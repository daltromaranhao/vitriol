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
          <stop offset="0%" stopColor="#B8860B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="globeGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#2a2a4a" />
          <stop offset="100%" stopColor="#0d0d1a" />
        </radialGradient>
        <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DAA520" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="skinLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="100%" stopColor="#2a1a0a" />
        </linearGradient>
        <linearGradient id="skinRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="100%" stopColor="#2a1a0a" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="260" cy="255" r="190" />
        </clipPath>
      </defs>

      {/* Background glow */}
      <circle cx="260" cy="255" r="240" fill="url(#bgGlow)" />

      {/* Outer decorative ring */}
      <circle cx="260" cy="255" r="200" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.2" fill="none" strokeDasharray="4 8" />
      <circle cx="260" cy="255" r="215" stroke="#DAA520" strokeWidth="0.3" strokeOpacity="0.1" fill="none" />

      {/* Globe base */}
      <circle cx="260" cy="255" r="185" fill="url(#globeGrad)" stroke="#DAA520" strokeWidth="1" strokeOpacity="0.3" />

      {/* Globe grid lines (latitude) */}
      {[0.25, 0.45, 0.65, 0.80].map((ratio, i) => {
        const y = 255 - 185 + ratio * 370;
        const half = Math.sqrt(Math.max(0, 185 * 185 - (y - 255) * (y - 255)));
        return (
          <ellipse key={`lat-${i}`} cx="260" cy={y} rx={half} ry={half * 0.22}
            stroke="#DAA520" strokeWidth="0.4" strokeOpacity="0.15" fill="none" />
        );
      })}

      {/* Globe grid lines (longitude) */}
      {[-90, -45, 0, 45, 90].map((angle, i) => (
        <ellipse key={`lon-${i}`} cx="260" cy="255" rx={185 * Math.abs(Math.cos((angle * Math.PI) / 180))}
          ry="185" stroke="#DAA520" strokeWidth="0.4" strokeOpacity="0.15" fill="none"
          transform={`rotate(${angle} 260 255)`} />
      ))}

      {/* Continents (simplified silhouettes) */}
      {/* North America */}
      <path d="M185 195 L210 185 L225 190 L235 205 L225 220 L215 235 L205 240 L195 230 L185 215 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />
      {/* Europe */}
      <path d="M270 185 L290 180 L305 188 L308 200 L295 210 L275 208 L265 198 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />
      {/* Africa */}
      <path d="M278 218 L298 215 L308 230 L305 255 L295 275 L280 278 L268 265 L265 245 L270 228 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />
      {/* Asia */}
      <path d="M315 180 L360 175 L380 190 L375 210 L355 220 L330 215 L312 205 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />
      {/* South America */}
      <path d="M205 255 L225 248 L235 260 L232 285 L220 300 L205 298 L198 280 L200 265 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />
      {/* Australia */}
      <path d="M355 270 L378 265 L388 275 L385 290 L368 295 L352 288 Z"
        fill="#DAA520" fillOpacity="0.12" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.3" clipPath="url(#circleClip)" />

      {/* Connection lines between nodes */}
      {[
        [195, 215, 280, 248],
        [283, 194, 280, 248],
        [345, 188, 280, 248],
        [365, 280, 280, 248],
        [213, 275, 280, 248],
        [165, 248, 280, 248],
        [370, 200, 283, 194],
        [213, 275, 195, 215],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={`conn-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 5" />
      ))}

      {/* Member nodes (dots on globe) */}
      {[
        [195, 215], [283, 194], [345, 188], [365, 280],
        [213, 275], [165, 248], [370, 200], [310, 305],
        [240, 310], [180, 295], [405, 240], [310, 170],
      ].map(([cx, cy], i) => (
        <g key={`node-${i}`}>
          <circle cx={cx} cy={cy} r="5" fill="#DAA520" fillOpacity="0.15" />
          <circle cx={cx} cy={cy} r="2.5" fill="#DAA520" fillOpacity="0.7" filter="url(#glow)" />
        </g>
      ))}

      {/* Heart glow behind hands */}
      <circle cx="260" cy="248" r="80" fill="url(#heartGlow)" />

      {/* === HEART SHAPE === */}
      {/* Heart made of two curves, outlined in gold */}
      <path
        d="M260 310
           C240 295 195 275 195 238
           C195 218 210 205 228 205
           C241 205 252 213 260 222
           C268 213 279 205 292 205
           C310 205 325 218 325 238
           C325 275 280 295 260 310 Z"
        fill="#DAA520"
        fillOpacity="0.08"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        filter="url(#softGlow)"
      />

      {/* === LEFT HAND (reaching from bottom-left into heart) === */}
      <g filter="url(#glow)">
        {/* Palm */}
        <path
          d="M195 290 C185 280 182 265 188 252 C192 243 198 240 204 242
             C208 234 214 231 220 234 C222 228 228 226 234 230
             C237 225 243 224 248 229
             L248 268 C244 272 238 278 232 282
             C224 288 212 292 195 290 Z"
          fill="url(#skinLeft)"
          stroke="#DAA520"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        {/* Fingers hint */}
        <path d="M204 242 C202 236 203 230 206 228" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        <path d="M220 234 C218 228 219 222 222 220" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        <path d="M234 230 C233 224 234 218 237 216" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        {/* Wrist / arm */}
        <path d="M188 252 C180 262 175 278 178 295" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
        {/* Knuckle highlights */}
        <path d="M210 248 Q215 244 220 248" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
        <path d="M225 244 Q230 240 235 244" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
        <path d="M238 242 Q242 238 246 242" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
      </g>

      {/* === RIGHT HAND (reaching from bottom-right into heart) === */}
      <g filter="url(#glow)">
        {/* Palm */}
        <path
          d="M325 290 C335 280 338 265 332 252 C328 243 322 240 316 242
             C312 234 306 231 300 234 C298 228 292 226 286 230
             C283 225 277 224 272 229
             L272 268 C276 272 282 278 288 282
             C296 288 308 292 325 290 Z"
          fill="url(#skinRight)"
          stroke="#DAA520"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        {/* Fingers hint */}
        <path d="M316 242 C318 236 317 230 314 228" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        <path d="M300 234 C302 228 301 222 298 220" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        <path d="M286 230 C287 224 286 218 283 216" stroke="#DAA520" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        {/* Wrist / arm */}
        <path d="M332 252 C340 262 345 278 342 295" stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
        {/* Knuckle highlights */}
        <path d="M310 248 Q305 244 300 248" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
        <path d="M295 244 Q290 240 285 244" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
        <path d="M282 242 Q278 238 274 242" stroke="#DAA520" strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
      </g>

      {/* === VITRIOL LOGO centered inside heart === */}
      {/* Outer hexagon */}
      <path d="M260 215 L283 228 L283 254 L260 267 L237 254 L237 228 Z"
        stroke="#DAA520" strokeWidth="1.2" strokeOpacity="0.7" fill="#DAA520" fillOpacity="0.05" />
      {/* Inner hexagon */}
      <path d="M260 221 L278 231 L278 251 L260 261 L242 251 L242 231 Z"
        stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
      {/* V shape */}
      <path d="M249 229 L260 252 L271 229"
        stroke="#DAA520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        filter="url(#glow)" />
      {/* Top dot */}
      <circle cx="260" cy="224" r="2" fill="#DAA520" fillOpacity="0.9" filter="url(#glow)" />

      {/* VITRIOL text */}
      <text x="260" y="290" textAnchor="middle"
        fontFamily="Georgia, serif" fontSize="13" letterSpacing="5"
        fill="#DAA520" fillOpacity="0.85" filter="url(#glow)">
        VITRIOL
      </text>

      {/* Tagline */}
      <text x="260" y="306" textAnchor="middle"
        fontFamily="Georgia, serif" fontSize="6.5" letterSpacing="2.5"
        fill="#DAA520" fillOpacity="0.5">
        GLOBAL BROTHERHOOD
      </text>

      {/* Decorative stars / sparkles */}
      {[[155, 195], [365, 195], [155, 320], [365, 320], [260, 148]].map(([cx, cy], i) => (
        <g key={`star-${i}`}>
          <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1={cx - 3.5} y1={cy - 3.5} x2={cx + 3.5} y2={cy + 3.5} stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.25" />
          <line x1={cx + 3.5} y1={cy - 3.5} x2={cx - 3.5} y2={cy + 3.5} stroke="#DAA520" strokeWidth="0.5" strokeOpacity="0.25" />
        </g>
      ))}

      {/* Pulsing ring around globe */}
      <circle cx="260" cy="255" r="192" stroke="#DAA520" strokeWidth="0.8" strokeOpacity="0.12" fill="none" />
    </svg>
  );
};
