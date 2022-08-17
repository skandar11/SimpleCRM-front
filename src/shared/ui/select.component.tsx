import classNames from 'classnames'
import { useEffect, useState } from 'react'

export type OptionType = {
  title: string
  data?: any
  id?: any
}

interface ISelectProperties {
  options: OptionType[]
  onChange?(data: OptionType): void
  /**
   * index of elem in options array
   */
  initValue?: number
  title?: string
  containerClasses?: string
  placeholder?: string
  value?: any
}

export function Select(properties: ISelectProperties) {
  const {
    title,
    containerClasses,
    placeholder = null,
    options,
    initValue,
    onChange = () => null,
  } = properties

  const [isOpen, toggleOpen] = useState(false)
  const [value, setValue] = useState<string | null>()

  function openSelect() {
    toggleOpen(true)
  }

  function selectOption(e: React.MouseEvent<HTMLLIElement>, option: OptionType) {
    e.stopPropagation()
    toggleOpen(false)
    setValue(option.title)
    onChange(option)
  }

  useEffect(() => {
    if (initValue == undefined) return

    const option = options.find((_option, index) => index === initValue)
    if (option) {
      setValue(option.title)
    }
  }, [initValue, options])

  return (
    <div className={classNames('cursor-pointer', containerClasses)} onClick={openSelect}>
      <span className="mb-1 text-sm">{title}</span>
      <div className="px-3 py-[0.8438rem] border border-solid border-[#235CA710] rounded-xl shadow-[0px_4px_12px_rgba(37,86,159,0.08)] leading-5 w-full">
        <div
          className={classNames(
            'flex justify-between items-center',
            !value && 'text-[rgba(0,0,0,0.2)]'
          )}
        >
          {value ?? placeholder}
          <button
            className={classNames(
              'w-6 h-6 flex justify-center items-center ease-out duration-[300ms]',
              isOpen && 'rotate-180'
            )}
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
                fill="black"
                fillOpacity="0.2"
              />
            </svg>
          </button>
        </div>
        <ul
          className={classNames(
            'overflow-auto ease-out duration-[300ms]',
            isOpen ? 'max-h-24' : 'max-h-0'
          )}
        >
          {options.map((item) => (
            <li key={item.title} className="my-1" onClick={(e) => selectOption(e, item)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
