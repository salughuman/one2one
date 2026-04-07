"use client";

import { useCardTilt, useParallax } from "@/hooks/useScrollReveal";

export default function AnimationProvider() {
  useCardTilt();
  useParallax();
  return null;
}
