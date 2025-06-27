export const categories = [
  "All",
  "Landscape",
  "Architecture",
  "Portrait",
  "Travel",
  "Wildlife",
  "Abstract",
  "Interior",
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
    src: "/ruwanwelisaya-night.jpg",
    alt: "Majestic white stupa lit up at night, framed by dark silhouetted trees",
    title: "Sacred Glow",
    description: "The Ruwanwelisaya stupa under the night sky",
    category: "Architecture",
    location: "Anuradhapura, Sri Lanka",
    date: "January 2025",
    camera: "iPhone 15",
    settings: "f/4, 2s, ISO 800",
    story:
      "Capturing the serenity of this sacred place at night was a lesson in patience. I used a long exposure to absorb as much light as possible, balancing the bright glow of the stupa with the deep shadows of the surrounding trees to create a sense of tranquil grandeur.",
  },
  {
    src: "/pine-forest-mist.jpg",
    alt: "Tall pine trees in a forest with mist rolling through the trunks",
    title: "Misty Woods",
    description: "An atmospheric morning in a pine forest",
    category: "Landscape",
    location: "Hanthana, Sri Lanka",
    date: "December 2024",
    camera: "iPhone 15",
    settings: "f/5.6, 1/80s, ISO 400",
    story:
      "The goal was to capture the mood, not just the trees. The soft, diffused light from the mist created a natural filter, allowing me to photograph the layers of the forest and create a real sense of depth and mystery.",
  },
  {
    src: "/galle-fort-sunset.jpg",
    alt: "A warm, golden sunset over the ocean horizon with a stone walkway in Galle Fort in the foreground",
    title: "Golden Hour Farewell",
    description: "Sunset over the Laccadive Sea from Galle Fort",
    category: "Landscape",
    location: "Galle Fort, Sri Lanka",
    date: "May 2023",
    camera: "Redmi Note 9S",
    settings: "f/9, 1/200s, ISO 100",
    story:
      "This shot is all about the light. I positioned myself on the fort ramparts to use the winding stone path as a leading line, drawing the viewer's eye towards the setting sun. The warm tones of the golden hour bathed the entire historic scene in a beautiful, fleeting glow.",
  },
  {
    src: "/mother-child-silhouette.jpg",
    alt: "Silhouette of a mother lifting her child into the air against a vibrant sunset over the sea",
    title: "A Mother's Love",
    description: "An intimate moment captured against the setting sun",
    category: "Portrait",
    location: "Galle Fort, Sri Lanka",
    date: "July 2023",
    camera: "Redmi Note 9S",
    settings: "f/3.5, 1/1000s, ISO 200",
    story:
      "This was a spontaneous and precious moment. I deliberately underexposed the shot to create a strong silhouette, letting the powerful shapes and the stunning sunset tell the story. It’s a perfect example of how light can be used to evoke emotion.",
  },
  {
    src: "/lapwing-low-angle.jpg",
    alt: "A Red-wattled Lapwing bird standing on a concrete ledge, shot from a very low angle",
    title: "The Guardian",
    description: "A low-angle perspective of a Red-wattled Lapwing",
    category: "Wildlife",
    location: "Colombo, Sri Lanka",
    date: "June 2023",
    camera: "Redmi Note 9S",
    settings: "f/6.3, 1/500s, ISO 250",
    story:
      "To get this unique perspective, I had to get down to the bird's level. This low angle makes the subject appear more heroic and prominent against the sky. It took patience to wait for the perfect pose that highlights its sharp features and striking colors.",
  },
  {
    src: "/baby-sea-turtle.jpg",
    alt: "A close-up shot of a baby sea turtle making its way across the sand to the ocean",
    title: "First Journey",
    description: "The challenging first steps of a hatchling",
    category: "Wildlife",
    location: "Kosgoda Beach, Sri Lanka",
    date: "August 2022",
    camera: "Redmi Note 9S",
    settings: "f/2.8, 1/400s, ISO 320",
    story:
      "Documenting this tiny creature's monumental journey was an incredible privilege. I used a wide aperture to create a shallow depth of field, keeping the focus entirely on the turtle and blurring the sandy background to emphasize its vulnerability and determination.",
  },
  {
    src: "/galle-lighthouse-framed.jpg",
    alt: "The white Galle Lighthouse viewed through a frame of green leaves and pink flowers",
    title: "Tropical Beacon",
    description: "A framed view of the iconic Galle Lighthouse",
    category: "Architecture",
    location: "Galle Fort, Sri Lanka",
    date: "March 2025",
    camera: "iPhone 15",
    settings: "f/8, 1/320s, ISO 100",
    story:
      "I wanted a fresh perspective on this famous landmark. By stepping back and using the natural foliage as a foreground frame, I added depth and a splash of color that contrasts beautifully with the blue sky and the white tower, making the composition more engaging.",
  },
  {
    src: "/marigold-texture.jpg",
    alt: "A vibrant, tight shot filled with orange and yellow marigold flowers",
    title: "Sun Petals",
    description: "An explosion of color and texture",
    category: "Abstract",
    location: "Anuradhapura, Sri Lanka",
    date: "January 2025",
    camera: "iPhone 15",
    settings: "f/11, 1/125s, ISO 200",
    story:
      "This image is a celebration of color and texture. I filled the entire frame with the marigolds to create an abstract pattern, removing any sense of scale. The focus is purely on the interplay of light, shadow, and the rich, warm tones of the petals.",
  },
  {
    src: "/sigiriya-view-pool.jpg",
    alt: "A view of the Sigiriya rock fortress in the distance from a resort with a swimming pool and red umbrella in the foreground",
    title: "A Room with a View",
    description: "Tranquil poolside view of Sigiriya Rock",
    category: "Travel",
    location: "Sigiriya, Sri Lanka",
    date: "July 2024",
    camera: "Redmi Note 9S",
    settings: "f/10, 1/250s, ISO 100",
    story:
      "My goal here was to capture the feeling of this serene location. The composition is layered to show the relaxing foreground elements leading to the magnificent ancient fortress in the background, telling a story of luxury, nature, and history all in one frame.",
  },
  {
    src: "/dusk-silhouette.jpg",
    alt: "Silhouette of a person sitting alone against a moody, dusky sky with faint clouds",
    title: "Evening Solitude",
    description: "A moment of quiet contemplation as day turns to night",
    category: "Portrait",
    location: "Galle Fort, Sri Lanka",
    date: "December 2023",
    camera: "Samsung Galaxy S23",
    settings: "f/4.5, 1/160s, ISO 400",
    story:
      "Silhouettes can be incredibly powerful. By placing the subject against the fading light of the sky, the image becomes universal. The focus shifts to the form and the surrounding atmosphere, inviting the viewer to imagine their own story for this moment of peace.",
  },
  {
    src: "/stupa-blue-hour.jpg",
    alt: "A large stupa silhouetted against a deep blue evening sky, with the silhouettes of large trees in the foreground",
    title: "Twilight Serenity",
    description: "The calm of the blue hour at a sacred site",
    category: "Landscape",
    location: "Kandy, Sri Lanka",
    date: "February 2024",
    camera: "Redmi Note 9S",
    settings: "f/5.0, 1/30s, ISO 640",
    story:
      "The 'blue hour' offers a magical, soft light. I framed the distant, faintly lit stupa with the dark, intricate branches of a rain tree. This technique creates a natural vignette and a layered composition, highlighting the tranquil mood of twilight.",
  },
  {
    src: "/temple-statues-curved.jpg",
    alt: "A row of stone Buddha statues arranged along a curved wall inside a temple with warm, golden lighting",
    title: "Path to Enlightenment",
    description: "Repetition and reverence inside a modern temple",
    category: "Interior",
    location: "Kandy, Sri Lanka",
    date: "February 2024",
    camera: "Redmi Note 9S",
    settings: "f/4.0, 1/60s, ISO 1600",
    story:
      "The curving line of statues immediately caught my eye. I used it as a strong compositional element to lead the viewer through the image. The warm interior lighting created a beautiful golden glow on the stone, emphasizing the peaceful and reverent atmosphere of the space.",
  },
  {
    src: "/galle-clock-tower-night.jpg",
    alt: "A historic stone clock tower illuminated against a dark blue night sky",
    title: "Timeless Tower",
    description: "The Galle Fort Clock Tower at night",
    category: "Architecture",
    location: "Galle Fort, Sri Lanka",
    date: "January 2025",
    camera: "iPhone 15",
    settings: "f/8, 1.6s, ISO 400",
    story:
      "Night photography in a historic location is about balancing artificial light with ambient atmosphere. I used a tripod and a slower shutter speed to capture the details in the stonework while ensuring the sky remained a rich, deep blue, making the illuminated tower stand out dramatically.",
  },
  {
    src: "/barista-low-light.jpg",
    alt: "Neon 'BARISTA' sign glowing on a dark stone wall in a dimly lit cafe with lush plants in the foreground",
    title: "Urban Glow",
    description: "The moody, warm ambiance of a coffee house at night",
    category: "Interior",
    location: "Nugegoda, Sri Lanka",
    date: "November 2024",
    camera: "iPhone 15",
    settings: "f/2.8, 1/60s, ISO 3200",
    story:
      "This shot was all about capturing a mood. In the low light, my challenge was to balance the bright glow of the neon sign with the deep shadows of the interior. I used the foreground plants to create a sense of depth and frame the scene, making the viewer feel like they are sitting right there.",
  },
  {
    src: "/crepe-runners-galle.jpg",
    alt: "A vibrant food truck named Crepe Runners with green umbrellas and yellow chairs in an alleyway in Galle Fort",
    title: "Fort Street Food",
    description:
      "A charming crepe and mojito food truck tucked away in a historic lane",
    category: "Travel",
    location: "Galle Fort, Sri Lanka",
    date: "April 2025",
    camera: "iPhone 15",
    settings: "f/5.6, 1/500s, ISO 200",
    story:
      "I love capturing slices of life. This image was a spontaneous moment, framed by the large green umbrella to draw the eye in. The vibrant yellows and reds pop against the old stone walls, telling a story of modern energy within a historic setting.",
  },
  {
    src: "/garden-bud-macro.jpg",
    alt: "A close-up macro shot of a delicate pink and green flower bud emerging from behind large, textured green leaves",
    title: "Promise of Bloom",
    description: "A heliconia flower bud captured in the soft morning light",
    category: "Nature",
    location: "Baddegama, Sri Lanka",
    date: "March 2025",
    camera: "iPhone 15",
    settings: "f/4.0, 1/250s, ISO 200",
    story:
      "For this photo, I used a wide aperture to create a very shallow depth of field. This technique isolates the delicate bud, making it the hero of the shot, while transforming the background into a soft, painterly blur of color. It’s a celebration of the small details that nature offers.",
  },
  {
    src: "/sea-gate-hotel.jpg",
    alt: "A swimming pool reflecting tall palm trees on an overcast day, with the ocean and a decorative boat in the background",
    title: "Overcast Paradise",
    description: "The moody and tranquil atmosphere at the Sea Gate Hotel",
    category: "Travel",
    location: "Kalutara, Sri Lanka",
    date: "May 2025",
    camera: "iPhone 15",
    settings: "f/7.1, 1/200s, ISO 100",
    story:
      "I wanted to capture a different side of a beach hotel, away from the usual bright sun. The overcast sky created a beautiful, soft light that enriched the colors. The cool tones of the pool and sky contrast with the earthy greens and yellows, creating a serene, almost cinematic mood.",
  },
  {
    src: "/bomburu-ella-falls.jpg",
    alt: "The wide, cascading Bomburu Ella waterfall flowing over mossy rocks on a bright sunny day with blue skies",
    title: "The Roaring Falls",
    description: "A vibrant, sunlit day at Bomburu Ella waterfall",
    category: "Landscape",
    location: "Nuwara Eliya, Sri Lanka",
    date: "April 2023",
    camera: "Redmi Note 9S",
    settings: "f/11, 1/160s, ISO 100",
    story:
      "The goal here was to capture the immense scale and energy of the waterfall. I used a wide-angle lens to fit the entire cascade into the frame, from the top cliffs to the pool below. A fast shutter speed helped freeze the motion of the water, showing its power, while the bright sunlight made the lush greens of the moss pop against the blue sky.",
  },
  {
    src: "/ambuluwawa-winding-road.jpg",
    alt: "A sharp hairpin turn on a road winding through the green hills of Ambuluwawa under a dramatic cloudy sky.",
    title: "Hill Country Curves",
    description: "The winding road leading up through Ambuluwawa",
    category: "Landscape",
    location: "Ambuluwawa, Kandy, Sri Lanka",
    date: "June 2024",
    camera: "Redmi Note 9S",
    settings: "f/8, 1/180s, ISO 200",
    story:
      "I was fascinated by the geometry of this road against the organic shapes of the hills. I composed the shot to use the road as a strong leading line, guiding the viewer's eye through the frame and conveying the sense of adventure on a journey into the clouds.",
  },
  {
    src: "/nuwara-eliya-post-office.jpg",
    alt: "The iconic red-brick Nuwara Eliya Post Office with its prominent clock tower against an overcast sky.",
    title: "A Touch of England",
    description: "The historic Tudor-style post office building.",
    category: "Architecture",
    location: "Nuwara Eliya, Sri Lanka",
    date: "April 2023",
    camera: "Redmi Note 9S",
    settings: "f/7.1, 1/250s, ISO 100",
    story:
      "The soft, even light of the overcast sky was perfect for capturing the rich texture and color of this historic building without any harsh shadows. It’s a piece of colonial history, and my goal was to frame it in a way that felt timeless and stately.",
  },
  {
    src: "/hikkaduwa-morning.jpg",
    alt: "The serene shoreline of Hikkaduwa beach in the morning, with gentle waves and fishing boats in the distance under a partly cloudy sky.",
    title: "Morning Tides",
    description: "The calm and quiet of an early morning at Hikkaduwa beach.",
    category: "Seascape",
    location: "Hikkaduwa, Sri Lanka",
    date: "December 2023",
    camera: "Redmi Note 9S",
    settings: "f/10, 1/400s, ISO 100",
    story:
      "Waking up for the early morning light was worth it. I got down low to the ground to capture this perspective, emphasizing the texture of the wet sand and the gentle foam of the tide. It creates a very calming and immersive feeling, inviting you to step into the scene.",
  },
  {
    src: "/uthuwankanda-hiker.jpg",
    alt: "A lone hiker stands atop a massive rock at Uthuwankanda, framed by the soft green leaves of a branch in the foreground.",
    title: "Journey to the Peak",
    description:
      "A lone, unknown hiker contemplating the view from Uthuwankanda.",
    category: "Landscape",
    location: "Kegalle, Sri Lanka",
    date: "June 2024",
    camera: "Redmi Note 9S",
    settings: "f/5.6, 1/320s, ISO 200",
    story:
      "This photo is about creating depth and narrative. By focusing on the foreground leaves, the distant hiker becomes a mysterious focal point. It adds a sense of scale to the landscape and tells a story of adventure and solitude without needing to see a face.",
  },
  {
    src: "/araliya-hotel-galle-view.jpg",
    alt: "A stunning high-angle balcony view of the Araliya Hotel, showing its large water features, palm trees, and the blue ocean beyond.",
    title: "Galle from Above",
    description:
      "The incredible resort vista from a balcony at the Araliya Hotel.",
    category: "Travel",
    location: "Galle, Sri Lanka",
    date: "August 2023",
    camera: "Redmi Note 9S",
    settings: "f/1.8, 1/2200s, ISO 80",
    story:
      "Sometimes the best vantage point is from up high. This view from the balcony was breathtaking. I aimed to capture the beautiful symmetry of the hotel's layout, but also the raw power of the coastal wind, which you can see in the swaying tops of the coconut trees. It's a contrast between the calm, man-made design and the wild energy of nature.",
  },
  {
    src: "/kandy-rocky-viewpoint.jpg",
    alt: "A scenic view of a green valley and distant mountains near Kandy, with large, weathered boulders in the foreground.",
    title: "The Ancient Stones",
    description:
      "A random, beautiful viewpoint discovered in the hills near Kandy.",
    category: "Landscape",
    location: "Kandy, Sri Lanka",
    date: "June 2024",
    camera: "Redmi Note 9S",
    settings: "f/11, 1/250s, ISO 100",
    story:
      "While exploring, I stumbled upon this magnificent view. I used the massive rocks in the foreground to create a natural frame and add a sense of immense scale and history to the image. It makes the landscape feel more three-dimensional and grand.",
  },
];
