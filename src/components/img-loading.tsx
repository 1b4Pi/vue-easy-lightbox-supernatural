import { prefixCls } from '../constant'

export const ImgLoading = () => (
  <div class={`${prefixCls}-loading`}>
    <svg
      class="q-spinner text-primary"
      width="13em"
      height="13em"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="fSpinner">
        <feTurbulence baseFrequency="0.5" />
        <feDisplacementMap
          in="SourceGraphic"
          scale="2"
        />
      </filter>
      <defs>
        <linearGradient
          x1="8.042%"
          y1="0%"
          x2="65.682%"
          y2="23.865%"
          id="a"
        >
          <stop
            stop-color="#d1c4e9"
            stop-opacity="0"
            offset="0%"
          ></stop>
          <stop
            stop-color="#d1c4e9"
            stop-opacity=".631"
            offset="63.146%"
          ></stop>
          <stop
            stop-color="#d1c4e9"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        transform="translate(1 1)"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          filter="url(#fSpinner)"
          d="M36 18c0-9.94-8.06-18-18-18"
          stroke="url(#a)"
          stroke-width="2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
        <circle
          filter="url(#fSpinner)"
          fill="#d1c4e9"
          cx="36"
          cy="18"
          r="1"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  </div>
)
