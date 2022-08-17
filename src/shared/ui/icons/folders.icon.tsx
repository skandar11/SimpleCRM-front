import * as React from 'react'

export const FoldersIcon = (properties: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path
      d="M16 8H2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2ZM2 4h14v2H2V4Zm2-4h10v2H4V0Z"
      fill="currentColor"
    />
  </svg>
)
