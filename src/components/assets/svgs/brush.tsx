import { ComponentProps } from "react"

const Brush = (props: ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={258}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#brush-a)"
      strokeLinecap="round"
      strokeWidth={9}
      d="M5 29C53.128 19.625 170.107 1.799 253 5.498"
    />
    <defs>
      <linearGradient
        id="brush-a"
        x1={5}
        x2={253}
        y1={17}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C1CFF" />
        <stop offset={0.275} stopColor="#9A4CFF" />
        <stop offset={0.635} stopColor="#E647A6" />
        <stop offset={1} stopColor="#FFCA8B" />
      </linearGradient>
    </defs>
  </svg>
)
export default Brush
