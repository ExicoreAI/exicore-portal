import { FcConferenceCall, FcClock, FcApproval } from "react-icons/fc";

export default function ValueProps() {
  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-teal-1 font-bold text-sm tracking-tighter uppercase">
            Market Impact
          </span>
          <h2 className="font-headline text-4xl mt-2 text-on-surface tracking-tight">
            Solving Today's Infrastructure Crisis
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Labor Shortage */}
          <div className="group">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-teal-1 transition-colors rounded-sm">
              <FcConferenceCall className="text-teal-1" />
            </div>
            <h3 className="font-headline text-xl mb-4">Labor Shortages</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Bridge the gap in a shrinking workforce. Exicore robots handle repetitive, strenuous tasks, allowing your skilled laborers to focus on high-level site management.
            </p>
            <div className="font-mono text-xs text-gray-400 py-2 border-t border-gray-300/20 flex justify-between">
              <span>Human Capital ROI</span>
              <span className="text-teal-1 font-bold">+42%</span>
            </div>
          </div>
          {/* Productivity */}
          <div className="group">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-teal-1 transition-colors rounded-sm">
              <FcClock className="text-teal-1" />
            </div>
            <h3 className="font-headline text-xl mb-4">Productivity</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Enable multi-shift operations with zero fatigue. Our systems maintain constant output 24/7, reducing overall project timelines by up to 30%.
            </p>
            <div className="font-mono text-xs text-gray-400 py-2 border-t border-gray-300/20 flex justify-between">
              <span>Site Efficiency</span>
              <span className="text-teal-1 font-bold">3.5x Output</span>
            </div>
          </div>
          {/* Quality */}
          <div className="group">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-teal-1 transition-colors rounded-sm">
              <FcApproval className="text-teal-1" />
            </div>
            <h3 className="font-headline text-xl mb-4">Quality &amp; Reworks</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Eliminate the "human error" variable. Precision digital blueprint execution ensures millimetric accuracy, virtually eliminating costly re-dos and material waste.
            </p>
            <div className="font-mono text-xs text-gray-400 py-2 border-t border-gray-300/20 flex justify-between">
              <span>Error Margin</span>
              <span className="text-teal-1 font-bold">&lt; 2mm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}