import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import * as React from 'react'

export interface IInputErrorProperties {
  errors?: any
  name?: string
  className?: string
}

export function InputError({ errors, name, className }: IInputErrorProperties) {
  return (
    errors &&
    name && (
      <ErrorMessage
        errors={errors}
        name={name}
        render={(e) => (
          <div
            className={classNames(
              className,
              'text-error absolute flex items-center space-x-3 left-1'
            )}
          >
            {/* <IconComponent name="errorCircle" className="w-2 ml-[0.05rem] mr-[0.1rem]" /> */}
            {e.message}
          </div>
        )}
      />
    )
  )
}
