'use client'
import dynamic from 'next/dynamic'

const CalendarView = dynamic(() => import('@/components/CalendarView'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Claude Release Calendar</h1>
          <p className="text-gray-500 mt-1">Every Claude and Claude Code release — with learning plans and community reactions</p>
        </div>
        <CalendarView />
      </div>
    </main>
  )
}
