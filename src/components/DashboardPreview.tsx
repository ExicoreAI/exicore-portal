export default function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-900 text-white px-8 overflow-hidden relative">
      {/* Decorative Stats Icon */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <span className="material-symbols-outlined text-[12rem] text-gray-800">
          query_stats
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div>
          <span className="font-mono text-teal-1 text-sm font-bold tracking-widest uppercase">
            The Precision Dashboard
          </span>
          <h2 className="font-headline text-4xl mt-4 mb-6 tracking-tight leading-tight">
            Every movement tracked.<br/><span className="block">Every metric optimized.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
            Our robots are just the edge. The real power lies in the Exicore Cloud Hub. Track project progress, safety compliance, and robot health in real-time with developer-grade telemetry.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-1">check_circle</span>
              <span className="font-mono text-sm tracking-wide">Real-time RTK positioning (±1cm)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-1">check_circle</span>
              <span className="font-mono text-sm tracking-wide">Predictive maintenance alerts via AI</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-1">check_circle</span>
              <span className="font-mono text-sm tracking-wide">Direct ERP &amp; Procore integration</span>
            </li>
          </ul>
        </div>

        {/* Right: UI Mock */}
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-1"></div>
            </div>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
              Live_Telemetry_Feed.sh
            </span>
          </div>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between text-gray-500">
              <span>&gt; ROBOT_ID_459-EX</span>
              <span className="text-teal-1">[ACTIVE]</span>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-700 text-gray-400">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Latitude</p>
                  <p className="text-sm">34.0522° N</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Longitude</p>
                  <p className="text-sm">118.2437° W</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Battery</p>
                  <p className="text-sm text-teal-1">84.2%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Load Cap</p>
                  <p className="text-sm">2,450 kg</p>
                </div>
              </div>
            </div>
            <p className="text-gray-500 italic text-[10px]">
              Syncing with site mesh... complete.
              Recalibrating LiDAR sensors... Done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}