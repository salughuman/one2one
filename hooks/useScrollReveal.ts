"use client";

import { useEffect } from "react";

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
