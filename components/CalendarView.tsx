'use client'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from '@fullcalendar/interaction'
import { releases, Release } from '@/data/releases'
import ReleaseModal from './ReleaseModal'

const PRODUCT_COLORS: Record<string, string> = {
  claude: '#6366f1',
  'claude-code': '#10b981',
  api: '#f59e0b',
}

export default function CalendarView() {
  const [selected, setSelected] = useState<Release | null>(null)

  const events = releases.map(r => ({
    id: r.id,
    title: r.title,
    date: r.date,
    backgroundColor: PRODUCT_COLORS[r.product],
    borderColor: PRODUCT_COLORS[r.product],
    extendedProps: { release: r },
  }))

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex gap-4 mb-4 text-sm">
          {Object.entries(PRODUCT_COLORS).map(([product, color]) => (
            <div key={product} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-gray-600 capitalize">{product === 'claude-code' ? 'Claude Code' : product === 'api' ? 'API Features' : 'Claude Models'}</span>
            </div>
          ))}
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear',
          }}
          events={events}
          eventClick={({ event }) => setSelected(event.extendedProps.release as Release)}
          height="auto"
          eventDisplay="block"
        />
      </div>
      {selected && <ReleaseModal release={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
