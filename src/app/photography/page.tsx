"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Photography from "./Components/Photography";

export default function PhotographyPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <Photography />
    </section>
  );
}
