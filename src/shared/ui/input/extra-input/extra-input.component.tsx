import classNames from 'classnames'
import type { ChangeEvent, DetailedHTMLProps, FocusEvent } from 'react'
import { useState } from 'react'

interface IExtraInputProperties
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
  rightIcon?: any
  leftIcon?: any
}

export function ExtraInput(properties: IExtraInputProperties) {
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
    rightIcon,
    ...nativeInputAttribute
  } = properties

  const [isFocus, setIsFocus] = useState(false)
  const [isEmpty, setIsEmpty] = useState(!value)

  const handleChange = (e: ChangeEvent<HTMLLabelElement>) => {
    const target = e.target as unknown as HTMLInputElement
    if (setValue) {
      setValue(target.value)
    }
    if (target.value) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLLabelElement>) => {
    const target = e.target as unknown as HTMLInputElement
    if (target.value) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
    setIsFocus(false)
    console.log('blur')
  }

  return (
    <label
      className={classNames('flex flex-col items-start relative m-0', containerClassName)}
      onChange={handleChange}
      onFocus={() => setIsFocus(true)}
      onBlur={handleBlur}
    >
      {/* {title && (
        <span className="mb-2 text-xs uppercase font-semibold font-Poppins">{title}</span>
      )} */}

      {/* <IconComponent
        name={icon}
        className={classNames(
          'w-4 absolute left-2 top-1/2 -translate-y-1/2',
          !isFocus && isEmpty && 'grayscale'
        )}
      /> */}
      {leftIcon && (
        <div className="absolute top-1/2 left-2 -translate-y-1/2 w-6">{leftIcon}</div>
      )}

      {rightIcon && (
        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-6">{rightIcon}</div>
      )}

      <input
        className={classNames(
          'extraInput w-full px-2 pl-10 py-[0.5rem] rounded-[8px] outline-none outline-offset-[-1px] frame',
          errors && name && errors[name]
            ? 'outline-2 outline-error'
            : 'outline-2 focus:outline-accent',
          inputClassName
        )}
        placeholder={placeholder || 'Enter here'}
        {...(register && { ...register(name) })}
        {...nativeInputAttribute}
      />

      {/* <InputError errors={errors} name={name} className="-bottom-[1.4rem]" /> */}
    </label>
  )
}
