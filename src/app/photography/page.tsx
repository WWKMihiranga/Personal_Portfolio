"use client";
// import { Metadata } from "next";
import Photography from "./Components/Photography";

// export const metadata: Metadata = {
//   title: "Kavindu Mihiranga | Sri Lanka Photography",

//   description:
//     "A photography portfolio by Kavindu Mihiranga, capturing the stunning landscapes, vibrant wildlife, and rich culture of Sri Lanka—from Galle Fort to the hills of Kandy.",

//   keywords: [
//     "Sri Lanka Photography",
//     "Landscape Photography Sri Lanka",
//     "Travel Photography",
//     "Galle Fort Photos",
//     "Kandy Photography",
//     "Wildlife Photography Sri Lanka",
//     "Kavindu Mihiranga Photography",
//     "Anuradhapura",
//     "Nuwara Eliya",
//     "Colombo Photography",
//     "Portrait Photography",
//     "Architectural Photography",
//   ],

//   openGraph: {
//     title: "Photography by Kavindu Mihiranga | Moments from Sri Lanka",
//     description:
//       "Explore my collection of landscape, wildlife, and travel photos capturing the beauty of Sri Lanka. A glimpse through my lens.",
//     url: "https://kavindumihiranga.com/photography",
//     images: [
//       {
//         url: "/Me.jpg",
//         width: 1200,
//         height: 630,
//         alt: "A stunning landscape photograph of Sri Lanka by Kavindu Mihiranga.",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Kavindu Mihiranga | Sri Lanka Photography",
//     description:
//       "A gallery of my landscape, travel, and wildlife photography from across Sri Lanka. Capturing moments through my lens.",
//     creator: "@WWKMihiranga",
//     images: ["/Me.jpg"],
//   },

//   alternates: {
//     canonical: "/photography",
//   },
// };

export default function PhotographyPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <Photography />
    </section>
  );
}
