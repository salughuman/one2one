"use client";

import { useScrollReveal, useCardTilt, useParallax } from "@/hooks/useScrollReveal";

export default function AnimationProvider() {
  useScrollReveal();
  useCardTilt();
  useParallax();
  return null;
}
