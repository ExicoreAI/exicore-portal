import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <header className="relative pt-16 min-h-[870px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>
        {/* Placeholder for robot image - using a gradient as placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-1/20 border border-teal-1/30 px-3 py-1 rounded mb-6">
            <span className="font-mono text-teal-1 text-xs tracking-widest uppercase">
              System Status: Optimal
            </span>
            <span className="w-2 h-2 bg-teal-1 rounded-full animate-pulse"></span>
          </div>

          {/* Headline and Subheadline */}
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
            Building the Intelligence Layer for <span className="text-teal-1">Physical AI</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-light">
            Exicore creates AI agents that understand construction processes, enabling robots to build smarter, safer, and faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/catalog" className="bg-teal-1 text-white px-8 py-4 rounded font-headline font-bold text-lg flex items-center gap-2 group transition-all hover:bg-teal-2">
              Explore the Catalog
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link to="/compare" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-headline font-bold text-lg hover:bg-white/20 transition-all">
              Compare Robots
            </Link>
          </div>
        </div>
      </div>

      {/* Float Tech Stats */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-4">
        <div className="bg-white/10 backdrop-blur-md border border-gray-300/20 p-6 rounded-lg w-64 shadow-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">
            Active Deployments
          </span>
          <div className="text-3xl font-mono font-bold text-teal-1 mt-1">
            1,284
          </div>
          <div className="h-1 w-full bg-gray-700 mt-3 overflow-hidden">
            <div className="h-full bg-teal-1 w-3/4"></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-gray-300/20 p-6 rounded-lg w-64 shadow-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">
            Global Uptime
          </span>
          <div className="text-3xl font-mono font-bold text-teal-1 mt-1">
            99.98%
          </div>
          <div className="flex gap-1 mt-3">
            <span className="h-2 w-full bg-teal-1"></span>
            <span className="h-2 w-full bg-teal-1"></span>
            <span className="h-2 w-full bg-teal-1"></span>
            <span className="h-2 w-full bg-teal-1"></span>
            <span className="h-2 w-full bg-gray-700"></span>
          </div>
        </div>
      </div>
    </header>
  );
}