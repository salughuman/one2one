"use client";

import { useEffect } from "react";

const SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export function useScrollReveal() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>(
        `${SELECTORS}:not(.visible)`
      );

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        // Generous margin — triggers well before element reaches viewport edge
        { rootMargin: "0px 0px -40px 0px", threshold: 0 }
      );

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Already visible on load — reveal immediately
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        } else {
          io.observe(el);
        }
      });

      return io;
    };

    // Run once immediately
    let io = observe();

    // Re-run after a short delay to catch client-rendered elements
    const t1 = setTimeout(() => { io.disconnect(); io = observe(); }, 300);
    const t2 = setTimeout(() => { io.disconnect(); io = observe(); }, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      io.disconnect();
    };
  }, []);
}

export function useCardTilt() {
  useEffect(() => {
    const attach = () => {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = "1";
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
          card.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        });
        card.addEventListener("mouseleave", () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        });
      });
    };
    attach();
    const t = setTimeout(attach, 500);
    return () => clearTimeout(t);
  }, []);
}

export function useParallax() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0.2");
        el.style.setProperty("--py", `${(window.scrollY * speed).toFixed(1)}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
