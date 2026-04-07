"use client";

import { useEffect } from "react";

/**
 * Attaches IntersectionObserver to all elements with .reveal, .reveal-left,
 * .reveal-right, .reveal-scale, and .clip-inner classes.
 * Adds .visible when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const els = document.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // No bottom margin — elements already in viewport on load fire immediately
      { rootMargin: "0px", threshold: 0.05 }
    );

    els.forEach((el) => {
      // If already in viewport on mount, reveal immediately without waiting for scroll
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}

/**
 * 3D card tilt on mouse move.
 * Attach to any element with data-tilt attribute.
 */
export function useCardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");

    const handleMove = (e: MouseEvent) => {
      const card = (e.currentTarget as HTMLElement);
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    };

    const handleLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);
}

/**
 * Subtle parallax on elements with data-parallax="speed" attribute.
 * Speed is a multiplier (e.g. 0.3 = 30% of scroll offset).
 */
export function useParallax() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
    if (!els.length) return;

    const onScroll = () => {
      const sy = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0.2");
        el.style.setProperty("--py", `${(sy * speed).toFixed(1)}px`);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
