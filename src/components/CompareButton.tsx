const CompareButton = ({ count, onClick, variant = 'solid' }: { count: number; onClick: () => void; variant?: 'solid' | 'outline' }) => {
  const base = variant === 'outline' 
    ? 'border border-teal-600 text-teal-600 hover:bg-teal-50' 
    : 'bg-teal-600 text-white hover:bg-teal-700';
  
  return (
    <button 
      onClick={onClick}
      className={`${base} px-4 py-2 rounded text-sm font-medium transition-colors`}
    >
      Add to Comparison {count > 0 ? `(${count})` : ''}
    </button>
  );
};

export default CompareButton;
