import { Link } from 'react-router-dom';

const ProductNavBar = ({ className = '' }: { className?: string }) => {
  return (
    <nav className={`bg-white backdrop-blur-md shadow-sm h-14 flex justify-between items-center px-6 ${className}`}>
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
          Exicore
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/catalog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
          Catalog
        </Link>
        <Link to="/compare" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
          Compare
        </Link>
      </div>
    </nav>
  );
};

export default ProductNavBar;
