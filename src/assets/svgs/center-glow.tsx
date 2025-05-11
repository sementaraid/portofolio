import { ComponentProps } from "react"

const CenterGlow = (props: ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1397 1110"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g filter="url(#center-a)" opacity={0.2}>
      <ellipse
        cx={868.339}
        cy={608.713}
        fill="#FF00F6"
        rx={368.661}
        ry={340.594}
      />
    </g>
    <g filter="url(#center-b)" opacity={0.2}>
      <ellipse
        cx={583.362}
        cy={553.694}
        fill="#0224E9"
        rx={383.362}
        ry={353.694}
      />
    </g>
    <defs>
      <filter
        id="center-a"
        width={1057.32}
        height={1001.19}
        x={339.678}
        y={108.119}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_center_125"
          stdDeviation={80}
        />
      </filter>
      <filter
        id="center-b"
        width={1166.72}
        height={1107.39}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_center_125"
          stdDeviation={100}
        />
      </filter>
    </defs>
  </svg>
)

export default CenterGlow
