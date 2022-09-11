import '../input.scss'

import classNames from 'classnames'
import * as React from 'react'
import { Controller } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

import type { IInputProperties } from '../input.component'
import { InputError } from '../input-error'

export interface IPhoneInputProperties extends IInputProperties {
  control: any
  name: string
}

export function PhoneInput({
  control,
  name: fieldName,
  errors,
  title,
}: IPhoneInputProperties) {
  return (
    <Controller
      name={fieldName}
      control={control}
      // @ts-ignore
      render={({ field: { onChange, onBlur, value, ref, name } }) => {
        return (
          <label className={classNames('input__container')}>
            {title && <span className="input__title">{title}</span>}
            <ReactInputMask
              mask="+7 (999) 999-99-99"
              maskPlaceholder="+7"
              placeholder="+7"
              value={value}
              onChange={onChange}
              ref={ref}
              name={fieldName}
              className={classNames(
                'input',
                errors && name && errors[name]
                  ? 'border-error'
                  : 'border-textfield-border focus:border-accent'
              )}
            />
            <InputError errors={errors} name={name} />
          </label>
        )
      }}
    />
  )
}
