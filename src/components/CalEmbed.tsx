'use client'

import { useEffect } from 'react'

const CAL_LINK = 'erik-werner-0um6bf/30min'

export default function CalEmbed() {
  useEffect(() => {
    const snippet = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "Cal");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector:"#cal-inline-embed",
        calLink: "${CAL_LINK}",
        config: {"layout":"month_view"}
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#ff8773" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `
    const script = document.createElement('script')
    script.textContent = snippet
    script.dataset.calEmbedInit = 'true'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div
      id="cal-inline-embed"
      className="reveal"
      style={{
        minWidth: '320px',
        height: '700px',
        marginTop: '32px',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
      }}
    />
  )
}
