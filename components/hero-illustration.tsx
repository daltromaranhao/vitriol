import React from "react";

export const HeroIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8860B" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0d0d1a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="logoGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="goldVert" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Background ambient glow */}
      <circle cx="260" cy="255" r="240" fill="url(#bgGlow)" />

      {/* Outer decorative rings */}
      <circle cx="260" cy="255" r="228" stroke="#DAA520" strokeWidth="0.4" strokeOpacity="0.12" fill="none" strokeDasharray="2 10" />
      <circle cx="260" cy="255" r="210" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.1" fill="none" strokeDasharray="1 6" />
      <circle cx="260" cy="255" r="190" stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.15" fill="none" />
      <circle cx="260" cy="255" r="165" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.1" fill="none" strokeDasharray="4 8" />

      {/* Corner decorative elements */}
      {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => (
        <g key={i} transform={`translate(${260 + sx*185} ${255 + sy*185})`}>
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#DAA520" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#DAA520" strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="0" cy="0" r="2" fill="#DAA520" fillOpacity="0.4" />
        </g>
      ))}

      {/* Small orbit dots */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 260 + 195 * Math.cos(rad);
        const cy = 255 + 195 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 3 : 2} fill="#DAA520" fillOpacity={i % 2 === 0 ? 0.5 : 0.3} />;
      })}

      {/* Logo glow backdrop */}
      <circle cx="260" cy="235" r="130" fill="url(#logoGlow)" />

      {/* ===== LARGE VITRIOL LOGO ===== */}

      {/* Outermost hexagon */}
      <path
        d="M260 95 L380 160 L380 310 L260 375 L140 310 L140 160 Z"
        stroke="url(#goldGrad)"
        strokeWidth="1.8"
        strokeOpacity="0.35"
        fill="#DAA520"
        fillOpacity="0.04"
      />

      {/* Middle hexagon */}
      <path
        d="M260 110 L368 172 L368 298 L260 360 L152 298 L152 172 Z"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeOpacity="0.25"
        fill="none"
      />

      {/* Inner hexagon (main frame) */}
      <path
        d="M260 128 L354 183 L354 293 L260 348 L166 293 L166 183 Z"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        strokeOpacity="0.6"
        fill="#DAA520"
        fillOpacity="0.06"
        filter="url(#glow)"
      />

      {/* Hexagon corner dots */}
      {[
        [260,128],[354,183],[354,293],[260,348],[166,293],[166,183]
      ].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#DAA520" fillOpacity="0.7" filter="url(#glow)" />
      ))}

      {/* === BIG V MARK === */}
      <path
        d="M196 178 L260 315 L324 178"
        stroke="url(#goldVert)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#strongGlow)"
      />
      {/* V inner shine */}
      <path
        d="M200 183 L260 308 L320 183"
        stroke="#FFD700"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
        fill="none"
      />

      {/* Top accent dot above V */}
      <circle cx="260" cy="155" r="8" fill="url(#goldGrad)" filter="url(#strongGlow)" />
      <circle cx="260" cy="155" r="4" fill="#FFD700" fillOpacity="0.9" />

      {/* Horizontal accent lines flanking V */}
      <line x1="166" y1="235" x2="208" y2="235" stroke="#DAA520" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="312" y1="235" x2="354" y2="235" stroke="#DAA520" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="166" cy="235" r="2.5" fill="#DAA520" fillOpacity="0.5" />
      <circle cx="354" cy="235" r="2.5" fill="#DAA520" fillOpacity="0.5" />

      {/* Bottom V tip accent */}
      <path d="M248 310 L260 328 L272 310" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" fill="none" />

      {/* === VITRIOL TEXT === */}
      <text
        x="260" y="388"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        letterSpacing="10"
        fill="url(#goldGrad)"
        filter="url(#glow)"
      >
        VITRIOL
      </text>

      {/* Tagline */}
      <text
        x="260" y="412"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="9"
        letterSpacing="4"
        fill="#DAA520"
        fillOpacity="0.55"
      >
        GLOBAL BROTHERHOOD
      </text>

      {/* Decorative line under tagline */}
      <line x1="200" y1="422" x2="320" y2="422" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" />
      <circle cx="200" cy="422" r="1.5" fill="#DAA520" fillOpacity="0.4" />
      <circle cx="320" cy="422" r="1.5" fill="#DAA520" fillOpacity="0.4" />
      <circle cx="260" cy="422" r="2" fill="#DAA520" fillOpacity="0.5" />

      {/* Sparkles */}
      {[[120,130],[400,130],[100,370],[420,370],[260,68]].map(([cx,cy],i) => (
        <g key={i}>
          <line x1={cx-7} y1={cy} x2={cx+7} y2={cy} stroke="#DAA520" strokeWidth="0.9" strokeOpacity="0.4" />
          <line x1={cx} y1={cy-7} x2={cx} y2={cy+7} stroke="#DAA520" strokeWidth="0.9" strokeOpacity="0.4" />
          <line x1={cx-5} y1={cy-5} x2={cx+5} y2={cy+5} stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1={cx+5} y1={cy-5} x2={cx-5} y2={cy+5} stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx={cx} cy={cy} r="1.5" fill="#FFD700" fillOpacity="0.6" />
        </g>
      ))}
    </svg>
  );
};
