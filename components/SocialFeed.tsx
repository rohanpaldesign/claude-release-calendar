'use client'
import { useEffect, useState } from 'react'

interface Post {
  platform: string
  author: string
  summary: string
  url: string | null
}

const PLATFORM_COLORS: Record<string, string> = {
  X: 'bg-black text-white',
  LinkedIn: 'bg-blue-600 text-white',
  'Hacker News': 'bg-orange-500 text-white',
  Reddit: 'bg-red-500 text-white',
  Note: 'bg-gray-200 text-gray-700',
}

export default function SocialFeed({ releaseId }: { releaseId: string }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/social/${releaseId}`)
      .then(r => r.json())
      .then(data => { setPosts(data.posts || []); setLoading(false) })
      .catch(() => { setError('Failed to load community reactions'); setLoading(false) })
  }, [releaseId])

  if (loading) return (
    <div className="flex flex-col gap-3">
      {[1,2,3].map(i => <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />)}
    </div>
  )

  if (error) return <p className="text-red-500 text-sm">{error}</p>

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500">Community reactions curated by Claude.</p>
      {posts.map((post, i) => (
        <div key={i} className="border border-gray-100 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${PLATFORM_COLORS[post.platform] ?? 'bg-gray-200 text-gray-700'}`}>
              {post.platform}
            </span>
            <span className="text-xs text-gray-400">{post.author}</span>
          </div>
          <p className="text-sm text-gray-700">{post.summary}</p>
          {post.url && (
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline mt-2 inline-block">
              View post &rarr;
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
