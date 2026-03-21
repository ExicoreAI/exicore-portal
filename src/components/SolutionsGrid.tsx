import { Link } from 'react-router-dom';

export default function SolutionsGrid() {
  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="font-mono text-teal-1 font-bold text-sm tracking-tighter uppercase">
              The Fleet
            </span>
            <h2 className="font-headline text-4xl mt-2 text-slate-900 tracking-tight">
              Specialized Robotic Solutions
            </h2>
          </div>
          <Link
            to="/catalog"
            className="font-headline font-bold text-teal-1 flex items-center gap-2 border-b-2 border-teal-1/20 hover:border-teal-1 transition-all pb-1"
          >
            View All Robots
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Concrete */}
          <div className="relative group h-80 overflow-hidden col-span-1 md:col-span-2">
            <div className="w-full h-full bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <span className="font-mono text-[10px] text-teal-1 uppercase tracking-widest mb-1">
                Division 03
              </span>
              <h4 className="font-headline text-2xl text-white">Concrete &amp; Finishing</h4>
            </div>
          </div>
          {/* Earthmoving */}
          <div className="relative group h-80 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="font-mono text-[10px] text-teal-1 uppercase tracking-widest mb-1">
                Division 31
              </span>
              <h4 className="font-headline text-xl text-white">Earthmoving</h4>
            </div>
          </div>
          {/* Layout */}
          <div className="relative group h-80 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="font-mono text-[10px] text-teal-1 uppercase tracking-widest mb-1">
                Division 01
              </span>
              <h4 className="font-headline text-xl text-white">Site Layout</h4>
            </div>
          </div>
          {/* Masonry */}
          <div className="relative group h-64 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="font-mono text-[10px] text-teal-1 uppercase tracking-widest mb-1">
                Division 04
              </span>
              <h4 className="font-headline text-xl text-white">Masonry</h4>
            </div>
          </div>
          {/* Logistics */}
          <div className="relative group h-64 overflow-hidden col-span-1 md:col-span-3">
            <div className="w-full h-full bg-gradient-to-r from-teal-1 via-teal-3 to-teal-4 opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <span className="font-mono text-[10px] text-teal-1 uppercase tracking-widest mb-1">
                Supply Chain
              </span>
              <h4 className="font-headline text-2xl text-white">Site Logistics &amp; Material Transport</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}