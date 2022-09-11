import './input.scss'

import classNames from 'classnames'
import type { DetailedHTMLProps, MutableRefObject } from 'react'
import { useRef } from 'react'

export interface IInputProperties
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue?(value: string): void
  title?: string
  placeholder?: string
  containerClassName?: string
  inputClassName?: string
  register?: any
  name?: string
  errors?: any | undefined
  leftIcon?: any
}

export function Input(properties: IInputProperties) {
  const {
    value,
    title,
    setValue,
    containerClassName,
    inputClassName,
    register,
    name,
    placeholder,
    errors,
    leftIcon,
    ...nativeInputAttribute
  } = properties

  const reference = useRef(null) as MutableRefObject<HTMLLabelElement | null>

  return (
    <label className={classNames('input__container', containerClassName)} ref={reference}>
      {title && <span className="input__title">{title}</span>}
      {leftIcon && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-5">{leftIcon}</div>
      )}

      <input
        className={classNames(
          'input',
          leftIcon && 'input--with-icon',
          errors && name && errors[name]
            ? 'border-error'
            : 'border-textfield-border focus:border-accent',
          inputClassName
        )}
        placeholder={placeholder || 'Enter here'}
        onChange={(e) => {
          if (setValue) {
            setValue(e.target.value)
          }
        }}
        {...(register && { ...register(name) })}
        {...nativeInputAttribute}
      />
      {/* <InputError errors={errors} name={name} className="-bottom-[1.2rem]" /> */}
    </label>
  )
}
