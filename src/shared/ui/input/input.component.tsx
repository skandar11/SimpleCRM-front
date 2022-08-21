import './input.scss'

import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import type { DetailedHTMLProps } from 'react'

interface IInputProperties
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
}

export function Input(properties: IInputProperties) {
  const {
    value,
    title,
    setValue,
    containerClasses,
    inputClasses,
    register,
    name,
    errors,

    ...nativeInputAttribute
  } = properties
  return (
    <label className={classNames('block relative m-0', containerClasses)}>
      {title && <span className="mb-1 text-sm">{title}</span>}
      <input
        className={classNames('input ', inputClasses)}
        {...(register && { ...register(name) })}
        {...nativeInputAttribute}
        onChange={(e) => {
          if (setValue) {
            setValue(e.target.value)
          }
        }}
      />
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
