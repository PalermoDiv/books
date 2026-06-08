import { Link } from 'react-router-dom';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-blue-900/50 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl gap-6">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors duration-200 shrink-0"
        >
          My Library
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-blue-400/60 group-focus-within:text-indigo-400 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search books, games, comics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-blue-950/50 text-blue-100 placeholder-blue-400/50 border border-blue-800/50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right side spacer / future links */}
        <div className="w-32 shrink-0 hidden sm:block" />
      </div>
    </nav>
  );
}
