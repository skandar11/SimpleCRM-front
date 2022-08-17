import type { SVGProps } from 'react'

export const UsersIcon = (properties: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.355 4.608a5.67 5.67 0 0 1-.751 3.44C18.044 9.715 19 13.211 19 15h-2c0-.043-.049-4.299-4.281-5.539l-1.618-.475 1.192-1.192a3.693 3.693 0 0 0 1.072-2.986c-.118-1.175-.799-2.232-1.918-2.974L12.552.168c1.628 1.079 2.624 2.656 2.803 4.44ZM11.5 5c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4ZM0 16c0-3.309 2.691-6 6-6h3c3.309 0 6 2.691 6 6v1H0v-1Z"
      fill="currentColor"
    />
  </svg>
)
