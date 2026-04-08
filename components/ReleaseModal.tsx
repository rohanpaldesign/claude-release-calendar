'use client'
import { useState } from 'react'
import { Release } from '@/data/releases'
import LearningPlan from './LearningPlan'
import SocialFeed from './SocialFeed'
import ReactMarkdown from 'react-markdown'

const TABS = ['Brief', 'Learning Plan', 'Community'] as const
type Tab = typeof TABS[number]

const PRODUCT_COLORS: Record<string, string> = {
  claude: 'bg-indigo-100 text-indigo-700',
  'claude-code': 'bg-emerald-100 text-emerald-700',
  api: 'bg-amber-100 text-amber-700',
}

export default function ReleaseModal({ release, onClose }: { release: Release; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('Brief')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${PRODUCT_COLORS[release.product]}`}>
                  {release.product === 'claude-code' ? 'Claude Code' : release.product === 'api' ? 'API' : 'Claude'}
                </span>
                <span className="text-xs text-gray-400">{release.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{release.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{release.summary}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
          </div>
          {/* Tabs */}
          <div className="flex gap-1 mt-4">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${tab === t ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {tab === 'Brief' && (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{release.fullDescription}</ReactMarkdown>
              {release.links.official && (
                <a href={release.links.official} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 hover:underline text-sm mt-4">
                  Official announcement &rarr;
                </a>
              )}
            </div>
          )}
          {tab === 'Learning Plan' && <LearningPlan steps={release.learningPlan} />}
          {tab === 'Community' && <SocialFeed releaseId={release.id} />}
        </div>
      </div>
    </div>
  )
}
