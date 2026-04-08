import { NextRequest, NextResponse } from 'next/server'
import { getAnthropicClient } from '@/lib/anthropic'
import { releases } from '@/data/releases'

const cache = new Map<string, object>()

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (cache.has(id)) return NextResponse.json(cache.get(id))

  const release = releases.find(r => r.id === id)
  if (!release) return NextResponse.json({ error: 'Release not found' }, { status: 404 })

  const client = getAnthropicClient()
  if (!client) {
    return NextResponse.json({
      posts: [{
        platform: 'Note',
        author: 'System',
        summary: 'Add an ANTHROPIC_API_KEY environment variable to enable AI-curated community reactions.',
        url: null,
      }]
    })
  }

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `You are a researcher summarizing community reactions to AI releases.

Release: "${release.title}" (${release.date})
Summary: ${release.summary}

Describe 4-5 notable community reactions to this release from X (Twitter), LinkedIn, Hacker News, or Reddit.
For each, include: platform, a realistic author handle, a 1-2 sentence summary of their reaction, and a URL if you know a real one (otherwise null).

Respond with ONLY valid JSON in this exact format:
{
  "posts": [
    { "platform": "X", "author": "@handle", "summary": "...", "url": "https://..." or null }
  ]
}`
    }]
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''
  try {
    const parsed = JSON.parse(text)
    cache.set(id, parsed)
    return NextResponse.json(parsed)
  } catch {
    return NextResponse.json({ posts: [{ platform: 'Note', author: 'System', summary: 'Could not parse community reactions.', url: null }] })
  }
}
