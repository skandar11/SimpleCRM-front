import classNames from 'classnames'
import type { DetailedHTMLProps } from 'react'

interface ITextareaProperties
  extends DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  setValue(value: string): void
  title?: string
  containerClasses?: string
  textareaClasses?: string
  register?: any
  name?: string
}

export function Textarea(properties: ITextareaProperties) {
  const {
    value,
    title,
    setValue,
    containerClasses,
    textareaClasses,
    register,
    name,
    ...nativeTextareaAttribute
  } = properties
  return (
    <label className={classNames('block', containerClasses)}>
      <span className="mb-1 text-sm">{title}</span>
      <textarea
        className={classNames(
          'px-3 py-[0.8438rem] border border-[#235CA710] rounded-xl  placeholder:text-[rgba(0,0,0,0.2)] shadow-[0px_4px_12px_rgba(37,86,159,0.08)] block w-full leading-5',
          textareaClasses
        )}
        value={value}
        onChange={(e) => {
          if (setValue) {
            setValue(e.target.value)
          }
        }}
        {...(register && { ...register(name) })}
        {...nativeTextareaAttribute}
      />
    </label>
  )
}
