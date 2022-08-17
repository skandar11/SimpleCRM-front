import { useState } from 'react'

export interface ISwitcherItem {
  id: number
  text: string
  disabled?: boolean
}

export interface ISwitcherProperties {
  items: ISwitcherItem[]
  onChange?(index: number): void
  /**
   * @desc Index of initial item in items array
   */
  initialStep?: number
  additionalClasses?: string
}

export function Switcher(properties: ISwitcherProperties) {
  const { items, initialStep = 0, onChange = () => null, additionalClasses } = properties

  const [step, setStep] = useState<number>(initialStep)

  function switcherItemClickHandler(index: number) {
    setStep(index)
    onChange(index)
  }

  return (
    <div
      className={`flex justify-between bg-grey rounded-[0.5rem] relative p-1 ${additionalClasses}`}
    >
      <div
        className="absolute h-full p-1 top-0 duration-300 ease-out"
        style={{
          width: `${100 / items.length}%`,
          left: `${(100 / items.length) * step}%`,
        }}
      >
        <div className={`bg-white t-0 rounded-[0.5rem] shadow-base h-full w-full`}></div>
      </div>
      {items.map((item, index) => (
        <button
          onClick={() => {
            if (item.disabled) {
              return
            }
            switcherItemClickHandler(index)
          }}
          key={item.id}
          className="text-center flex-1 p-3 font-semibold text-sm relative"
        >
          {item.text}
        </button>
      ))}
    </div>
  )
}

Switcher.defaultProps = {
  mode: 'simple',
  onChange: () => {},
  initialStep: 0,
  style: null,
}
