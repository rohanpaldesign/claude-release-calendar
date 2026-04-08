import { LearningStep } from '@/data/releases'

export default function LearningPlan({ steps }: { steps: LearningStep[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Follow these steps to learn this feature hands-on.</p>
      {steps.map(step => (
        <div key={step.step} className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
            {step.step}
          </div>
          <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
            <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            {step.resources && step.resources.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {step.resources.map(url => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                    {new URL(url).hostname} &rarr;
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
