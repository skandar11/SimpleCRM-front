import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import type { DetailedHTMLProps } from 'react'

interface IExtraInputProperties
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue(value: string): void
  title?: string
  containerClasses?: string
  inputClasses?: string
  register?: any
  name?: string
  errors?: any | undefined
  icon: any
  rightIcon?: any
  onRightIconClick?: Function
}

export function ExtraInput(properties: IExtraInputProperties) {
  const {
    value,
    title,
    setValue,
    containerClasses,
    inputClasses,
    register,
    name,
    errors,
    icon,
    rightIcon,
    onRightIconClick,

    ...nativeInputAttribute
  } = properties
  return (
    <label className={classNames('block relative m-0', containerClasses)}>
      <span className="absolute left-2 top-1/2 -translate-y-1/2">{icon}</span>
      <input
        className={classNames('input extra-input', inputClasses)}
        {...(register && { ...register(name) })}
        {...nativeInputAttribute}
        onChange={(e) => {
          if (setValue) {
            setValue(e.target.value)
          }
        }}
      />
      {rightIcon && (
        <span
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => {
            if (onRightIconClick) onRightIconClick()
          }}
        >
          {rightIcon}
        </span>
      )}

      {errors && name && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={(e) => <span className="text-rose-700 mt-1 relative">{e.message}</span>}
        />
      )}
    </label>
  )
}
