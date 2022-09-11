import type { IInputProperties } from '@shared/ui'
import { Banner, ExtraInput, TargetIcon, useModal } from '@shared/ui'
import { MoreIcon } from '@shared/ui/icons/more.icon'
import * as React from 'react'
import { Link } from 'react-router-dom'

import type { ITarget } from '../model'

export interface ITargetInputProperties extends IInputProperties {
  target: ITarget | undefined
  errors: any
  register: any
}

export function TargetInput({
  target,
  errors,
  register,
  ...rest
}: ITargetInputProperties) {
  const { isOpen, toggle } = useModal()
  return !target ? (
    <>
      <ExtraInput
        setValue={() => {}}
        placeholder="Цель"
        containerClassName="w-full"
        name="target"
        register={register}
        errors={errors}
        leftIcon={
          <div
            onClick={() => {
              toggle()
            }}
          >
            <TargetIcon />
          </div>
        }
        rightIcon={<MoreIcon />}
        {...rest}
      />
      {/* {target && <TargetEditModal isOpen={isOpen} toggle={toggle} target={target} />} */}
    </>
  ) : (
    <>
      <Banner>
        <Banner.Header className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 mr-2">
              <TargetIcon />
            </div>
            {target.desire}
          </div>
          <button className="w-6">
            <MoreIcon />
          </button>
        </Banner.Header>
        <Banner.Body className="flex items-center justify-center">
          <Link to={'progress'} className="text-secondary-text text-sm">
            Посмотреть прогресс
          </Link>
        </Banner.Body>
      </Banner>
    </>
  )
}
