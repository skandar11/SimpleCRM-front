import { useModal } from '@shared/hooks'
import { ExtraInput, GoalIcon } from '@shared/ui'
import { MoreIcon } from '@shared/ui/icons/more.icon'
import * as React from 'react'

import type { ITarget } from '../model'
import { TargetEditModal } from './target-edit-modal.component'

export interface ITargetInputProperties {
  target: ITarget | undefined
  errors: any
  register: any
}

export function TargetInput({ target, errors, register }: ITargetInputProperties) {
  const { isOpen, toggle } = useModal()
  return (
    <div>
      <ExtraInput
        setValue={() => {}}
        placeholder="Создать новую цель"
        containerClasses="w-full"
        name="target"
        defaultValue={target?.desire}
        register={register}
        errors={errors}
        icon={<GoalIcon />}
        inputClasses="w-full"
        rightIcon={<MoreIcon />}
        onRightIconClick={() => {
          toggle()
        }}
      />
      {target && <TargetEditModal isOpen={isOpen} toggle={toggle} target={target} />}
    </div>
  )
}
