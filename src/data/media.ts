// ---------- Type for the type of Media ---------------
export type MediaType = 'Comic' | 'Videogame' | 'Novella' | 'Manga' | 'Light Novel' | 'Visual Novel' | 'Text-book';

// ---------- Type for the status of the Media -------------
export type MediaStatus = 'Completed' | 'Reading' | 'Playing' | 'On hold' | 'Not started' | 'Up to date';

// ---------- Interface for the Media itself ------------- 
export interface Media {
  id: number;
  title: string;
  type: MediaType;
  rating: number | undefined;
  status: MediaStatus;
  cover?: string;
  genres: string[];
  synopsis?: string;
  review?: string;
  dateFinished?: string;
}

// ---------- Array with all the Media items -------------
export const mediaItems: Media[] = [
  {
    id: 1,
    title: 'Malazan: Gardens of the Moon',
    type: 'Novella',
    rating: undefined,
    status: 'On hold',
    genres: ['Fantasy', 'Epic', 'Dark'],
    synopsis: 'The Malazan Empire simmers with discontent, bled dry by interminable warfare...',
  },
  {
    id: 2,
    title: 'Treasure Island',
    type: 'Novella',
    rating: 7,
    status: 'Completed',
    genres: ['Adventure', 'Classic'],
    synopsis: 'Young Jim Hawkins discovers a treasure map and embarks on a perilous voyage.',
    review: 'A timeless classic. Long John Silver is an unforgettable villain.',
    dateFinished: '2019-06-12',
  },
  {
    id: 3,
    title: 'Persona 4',
    type: 'Videogame',
    rating: 9,
    status: 'Completed',
    genres: ['RPG', 'Social Sim', 'Mystery'],
    synopsis: 'A transfer student investigates a series of bizarre murders in a rural Japanese town.',
    review: 'Incredible characters and a gripping mystery. The social links are the heart of the game.',
    dateFinished: '2023-08-20',
  },
  {
    id: 4,
    title: 'Fathers and Sons',
    type: 'Novella',
    rating: undefined,
    status: 'Reading',
    genres: ['Classic', 'Philosophy', 'Drama'],
    synopsis: 'A generational clash between the traditionalist older generation and the nihilistic youth.',
  },
  {
    id: 5,
    title: 'One Piece',
    type: 'Manga',
    rating: 10,
    status: 'Up to date',
    genres: ['Adventure', 'Fantasy', 'Action'],
    synopsis: 'Monkey D. Luffy sails the Grand Line with his crew to find the ultimate treasure.',
    review: 'Peak fiction. World-building on a scale no one else has matched.',
  },
  {
    id: 6,
    title: 'Hollow Knight: Silksong',
    type: 'Videogame',
    rating: 9.5,
    status: 'Completed',
    genres: ['Metroidvania', 'Indie', 'Action'],
    synopsis: 'A silent knight descends into a ruined kingdom to uncover ancient secrets.',
    review: 'Hauntingly beautiful. Every area feels alive despite the desolation.',
  },
  {
    id: 7,
    title: 'Berserk',
    type: 'Manga',
    rating: 8,
    status: 'Reading',
    genres: ['Dark Fantasy', 'Horror', 'Action'],
    synopsis: 'Guts, the Black Swordsman, wanders a medieval world plagued by demonic entities.',
    review: 'The art is unmatched. Very solid manga.',
  },
  {
    id: 8,
    title: 'Monogatari',
    type: 'Light Novel',
    rating: 10,
    status: 'Completed',
    genres: ['Action', 'Romance',],
    synopsis: 'Araragi Koyomi faces different anomalies happening in their town since he became a vampire',
    review: 'Great and lots of personal impact'
  },
  {
    id: 9,
    title: 'Hades',
    type: 'Videogame',
    rating: 9,
    status: 'Completed',
    genres: ['Roguelike', 'Action', 'Indie'],
    synopsis: 'Prince Zagreus attempts to escape the Underworld against his father\'s wishes.',
    review: 'Voice acting and writing are incredible. Every run feels fresh.',
  },
  {
    id: 10,
    title: 'Steins;Gate',
    type: 'Visual Novel',
    rating: 9.5,
    status: 'Completed',
    genres: ['Sci-Fi', 'Thriller', 'Drama'],
    synopsis: 'A self-proclaimed mad scientist accidentally discovers time travel via a microwave.',
    review: 'Slow start, but the payoff is one of the best in any medium.',
  },
  {
    id: 11,
    title: 'Crime and Punishment',
    type: 'Novella',
    rating: 9,
    status: 'Completed',
    genres: ['Psychological', 'Philosophy', 'Classic'],
    synopsis: 'A former student commits murder and grapples with guilt, paranoia, and redemption.',
    review: 'Dense but deeply rewarding. Raskolnikov\'s spiral is terrifying.',
    dateFinished: '2023-01-10',
  },
  {
    id: 12,
    title: 'Minecraft Dungeons',
    type: 'Videogame',
    rating: 7,
    status: 'Completed',
    genres: ['Action', 'Adventure'],
    synopsis: 'Help the Villagers survive',
    review: 'Great game to play with friends',
  },
  {
    id: 13,
    title: 'Astro Boy',
    type: 'Comic',
    rating: 7,
    status: 'Completed',
    genres: ['Sci-Fi', 'Adventure', 'Classic'],
    synopsis: 'A powerful robot boy with a heart of gold fights evil and protects humanity.',
    review: 'Charming and surprisingly philosophical for its time.',
  },
];
