"use client";

import { useEffect, useRef } from "react";

const WIDGET_ID = "701000f5748b336d93866ab9690"; // seu ID (Tripadvisor via Trustindex)

export default function TripadvisorWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (el.dataset.tiLoaded === "1") return; // evita duplicar
    el.dataset.tiLoaded = "1";

    el.innerHTML = "";

    const placeholder = document.createElement("div");
    placeholder.className = "ti-widget";
    placeholder.setAttribute("data-trustindex-widget-id", WIDGET_ID);
    el.appendChild(placeholder);

    const script = document.createElement("script");
    script.src = `https://cdn.trustindex.io/loader.js?${WIDGET_ID}`;
    script.async = true;
    script.defer = true;
    el.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
    style={{ width: "100%"}}
      aria-label="Avaliações Tripadvisor"
    />
  );
}
