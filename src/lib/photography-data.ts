export const categories = [
  "All",
  "Landscape",
  "Urban",
  "Portrait",
  "Travel",
  "Astrophotography",
  "Macro",
];

export type Photo = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  camera: string;
  settings: string;
  story: string;
};

export const photos = [
  {
    src: "/projects.jpg",
    alt: "Snowy mountain range",
    title: "Himalayas",
    description: "Sunrise over the peaks",
    category: "Landscape",
    location: "Nepal",
    date: "March 2024",
    camera: "Canon EOS R5",
    settings: "f/8, 1/125s, ISO 100",
    story:
      "Woke up at 4 AM to capture this breathtaking sunrise over the Himalayan peaks. The golden hour light created a magical atmosphere that made the early morning worth it.",
  },
  {
    src: "/7.png",
    alt: "Modern skyline at dusk",
    title: "Cityscape",
    description: "Blue hour urban vibe",
    category: "Urban",
    location: "New York City",
    date: "January 2024",
    camera: "Sony A7IV",
    settings: "f/11, 2s, ISO 200",
    story:
      "The blue hour in NYC is something special. Captured this during my evening walk, when the city lights started to compete with the fading daylight.",
  },
  {
    src: "/projects.jpg",
    alt: "Starry night long exposure",
    title: "Night Sky",
    description: "Milky Way seen from the desert",
    category: "Astrophotography",
    location: "Atacama Desert",
    date: "December 2023",
    camera: "Canon EOS R6",
    settings: "f/2.8, 20s, ISO 3200",
    story:
      "One of the clearest skies I've ever photographed under. The Milky Way was so bright you could see it with the naked eye. This 20-second exposure captured the cosmic beauty.",
  },
  {
    src: "/projects.jpg",
    alt: "Portrait in soft light",
    title: "Studio Portrait",
    description: "Natural lighting and mood",
    category: "Portrait",
    location: "Home Studio",
    date: "February 2024",
    camera: "Canon EOS R5",
    settings: "f/1.8, 1/160s, ISO 400",
    story:
      "Experimenting with natural window light and a simple reflector setup. Sometimes the best portraits come from the simplest lighting setups.",
  },
  {
    src: "/projects.jpg",
    alt: "Backpack traveler at cliffs",
    title: "Travel Life",
    description: "Captured during a solo hike",
    category: "Travel",
    location: "Iceland",
    date: "September 2023",
    camera: "Sony A7IV",
    settings: "f/5.6, 1/250s, ISO 200",
    story:
      "Solo hiking in Iceland led to this moment. The dramatic cliffs and endless ocean created the perfect backdrop for capturing the spirit of adventure.",
  },
  {
    src: "/projects.jpg",
    alt: "Macro flower detail",
    title: "Nature's Detail",
    description: "Morning dew on petals",
    category: "Macro",
    location: "Local Garden",
    date: "April 2024",
    camera: "Canon EOS R5",
    settings: "f/2.8, 1/320s, ISO 400",
    story:
      "Early morning photography session in my local garden. The dew drops created natural magnifying glasses, revealing intricate details usually hidden from the naked eye.",
  },
  // ... other photo objects
];
