import type { Media } from '../data/media.ts';

// ---------- Props for the MediaCard component -------------
interface MediaCardProps {
  media: Media;
}

// ---------- Helper to pick a color for the type badge -------------
function getTypeColor(type: Media['type']) {
  switch (type) {
    case 'Videogame': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'Manga': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    case 'Comic': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    case 'Light Novel': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    case 'Visual Novel': return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
    case 'Text-book': return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    case 'Novella': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
}

// ---------- Helper for rating color -------------
function getRatingColor(rating: number) {
  if (rating >= 9) return 'text-emerald-400';
  if (rating >= 7) return 'text-blue-400';
  if (rating >= 5) return 'text-yellow-400';
  return 'text-red-400';
}

// ---------- Component that renders a single media card -------------
export default function MediaCard({ media }: MediaCardProps) {
  return (
    <div className="group bg-blue-950/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-6 
                    hover:bg-blue-900/60 hover:border-blue-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                    transition-all duration-300 cursor-pointer">
      
      {/* ---------- Top Row: Title + Type Badge ---------- */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors">
          {media.title}
        </h3>
        <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${getTypeColor(media.type)}`}>
          {media.type}
        </span>
      </div>

      {/* ---------- Middle: Rating + Status ---------- */}
      <div className="flex items-center gap-4 mb-4">
        {media.rating !== undefined ? (
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${getRatingColor(media.rating)}`}>
              {media.rating}
            </span>
            <span className="text-sm text-blue-300/70 font-medium">/10</span>
          </div>
        ) : (
          <span className="text-sm text-blue-300/50 italic">Not rated</span>
        )}

        <span className="w-px h-4 bg-blue-800/50" />

        <span className="text-sm text-blue-200/70">
          {media.status}
        </span>
      </div>

      {/* ---------- Genres ---------- */}
      <div className="flex flex-wrap gap-2">
        {media.genres.map((genre) => (
          <span 
            key={genre} 
            className="text-xs text-blue-200/60 bg-blue-950/60 px-2 py-1 rounded-md border border-blue-800/40"
          >
            {genre}
          </span>
        ))}
      </div>

      {/* ---------- Synopsis (if it exists, faded) ---------- */}
      {media.synopsis && (
        <p className="mt-4 text-sm text-blue-200/50 line-clamp-2 leading-relaxed">
          {media.synopsis}
        </p>
      )}
    </div>
  );
}
