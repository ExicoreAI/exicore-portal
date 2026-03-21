import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Robots", path: "/catalog" },
    { label: "Analytics", path: "/" },
    { label: "Specs", path: "/compare" },
    { label: "Support", path: "/" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-headline font-bold text-2xl text-slate-900">
            Exicore
          </span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map(item => (
            <Link
              key={item.path + item.label}
              to={item.path}
              className={`font-headline font-bold tracking-tight text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-teal-1 border-b-2 border-teal-1 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/catalog"
          className="bg-teal-1 text-white px-5 py-2 rounded font-headline font-bold text-sm tracking-wide shadow-lg hover:bg-teal-2 transition-all"
        >
          Deploy Bot
        </Link>
      </div>
    </nav>
  );
}
