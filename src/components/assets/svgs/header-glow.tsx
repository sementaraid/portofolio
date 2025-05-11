import { ComponentProps } from "react"

const HeaderGlow = (props: ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1713}
    height={442}
    fill="none"
    {...props}
  >
    <g filter="url(#header-a)" opacity={0.2}>
      <circle cx={1290} cy={19} r={223} fill="#FC4FF6" />
    </g>
    <g filter="url(#header-b)" opacity={0.2}>
      <ellipse cx={391} cy={-14} fill="#8593E8" rx={232} ry={231} />
    </g>
    <g filter="url(#header-c)" opacity={0.2}>
      <circle cx={833.5} cy={-41.5} r={233.5} fill="#5D6EF3" />
    </g>
    <defs>
      <filter
        id="header-a"
        width={846}
        height={846}
        x={867}
        y={-404}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_header_129"
          stdDeviation={100}
        />
      </filter>
      <filter
        id="header-b"
        width={864}
        height={862}
        x={-41}
        y={-445}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_header_129"
          stdDeviation={100}
        />
      </filter>
      <filter
        id="header-c"
        width={967}
        height={967}
        x={350}
        y={-525}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_header_129"
          stdDeviation={125}
        />
      </filter>
    </defs>
  </svg>
)
export default HeaderGlow
