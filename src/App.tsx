import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import { mediaItems } from './data/media';
import MediaCard from './components/MediaCard';
import Navbar from "./components/Navbar";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-6">
            {mediaItems.map((item) => (
              <div key={item.id} className="w-full md:w-[calc(50%-12px)]">
                <MediaCard media={item} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
