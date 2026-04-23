import Script from 'next/script'

const NAMESPACE = '30min'
const CAL_LINK = 'erik-werner-0um6bf/30min'

export default function CalEmbed() {
  return (
    <>
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
      <Script id="cal-embed-init" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "Cal");
          Cal("init", "${NAMESPACE}", {origin:"https://cal.com"});
          Cal.ns["${NAMESPACE}"]("inline", {
            elementOrSelector:"#cal-inline-embed",
            config: {"layout":"month_view"},
            calLink: "${CAL_LINK}"
          });
          Cal.ns["${NAMESPACE}"]("ui", {
            styles: { branding: { brandColor: "#ff8773" } },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        `}
      </Script>
    </>
  )
}
