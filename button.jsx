
export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 ${className}`}
    >
      {children}
    </button>
  );
}
