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
    <label className={classNames('block relative', containerClasses)}>
      <span className="mb-1 text-sm">{title}</span>
      <input
        className={classNames(
          'px-3 py-[0.8438rem] border border-[#235CA710] rounded-xl  placeholder:text-[rgba(0,0,0,0.2)] shadow-[0px_4px_12px_rgba(37,86,159,0.08)] block w-full leading-5',
          inputClasses
        )}
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
          render={(e) => (
            <span className="text-rose-700 mt-1 relative -bottom-2">{e.message}</span>
          )}
        />
      )}
    </label>
  )
}
