export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t-0 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <span className="font-brand font-bold text-2xl text-slate-900 dark:text-white block mb-6">
            Exicore
          </span>
          <p className="font-body text-sm text-slate-500 dark:text-slate-500 leading-relaxed mb-6 max-w-sm">
            Exicore Robotics is the global leader in autonomous construction technology. We engineer the hardware and software that build the world of tomorrow.
          </p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-cyan-500 transition-colors material-symbols-outlined" href="#">
              public
            </a>
            <a className="text-slate-400 hover:text-cyan-500 transition-colors material-symbols-outlined" href="#">
              hub
            </a>
            <a className="text-slate-400 hover:text-cyan-500 transition-colors material-symbols-outlined" href="#">
              description
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-brand font-bold text-slate-900 dark:text-white text-sm mb-6 uppercase tracking-wider">
              Resources
            </h5>
            <ul className="space-y-4">
              <li>
                <a className="font-body text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all" href="#">
                  Compliance
                </a>
              </li>
              <li>
                <a className="font-body text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all" href="#">
                  Safety Standards
                </a>
              </li>
              <li>
                <a className="font-body text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all" href="#">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-brand font-bold text-slate-900 dark:text-white text-sm mb-6 uppercase tracking-wider">
              Company
            </h5>
            <ul className="space-y-4">
              <li>
                <a className="font-body text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-body text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body text-sm text-slate-500 dark:text-slate-500">
          © 2024 Exicore Robotics. Precision Engineered.
        </span>
        <div className="flex gap-6">
          <span className="font-mono text-[10px] text-slate-400">Ver. 4.9.2</span>
          <span className="font-mono text-[10px] text-slate-400">Region: NA-WEST</span>
        </div>
      </div>
    </footer>
  );
}