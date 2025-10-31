"use client";

import { useEffect, useRef } from "react";

const WIDGET_ID = "aeecdde571ae336b4376b81d55c"; // seu ID do Trustindex (Google/Facebook/etc.)

export default function TrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (el.dataset.tiLoaded === "1") return; // evita duplicar
    el.dataset.tiLoaded = "1";

    el.innerHTML = "";

    // placeholder exigido pelo Trustindex
    const placeholder = document.createElement("div");
    placeholder.className = "ti-widget";
    placeholder.setAttribute("data-trustindex-widget-id", WIDGET_ID);
    el.appendChild(placeholder);

    // injeta o script DENTRO do contêiner (chave pra não ir pro rodapé)
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
      aria-label="Avaliações Trustindex"
    />
  );
}
