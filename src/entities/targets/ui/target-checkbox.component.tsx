import { useModal } from '@shared/hooks'
import { EmptyCheckboxIcon } from '@shared/ui/icons/empty-checkbox.icon'
import { FillCheckboxIcon } from '@shared/ui/icons/fill-checkbox.icon'
import { MoreIcon } from '@shared/ui/icons/more.icon'
import * as React from 'react'

import type { ITarget } from '../model'
import { TargetStatusEnum } from '../model'
import { useEditTargetMutation } from '../targets.api'
import { ProgressSuccessModal } from './progress-success-modal.component'
import { TargetEditModal } from './target-edit-modal.component'

export interface ITargetCheckboxProperties {
  target: ITarget | undefined
}

export function TargetCheckbox({ target }: ITargetCheckboxProperties) {
  const { isOpen: isEditTargetOpen, toggle: editTargetToggle } = useModal()
  const { isOpen: isSuccessOpen, toggle: successToggle } = useModal()
  const [editTarget] = useEditTargetMutation()

  const handleCheckbox = React.useCallback(async () => {
    if (target) {
      try {
        await editTarget({
          id: target.id,
          body: { desire: target.desire, status: TargetStatusEnum.Done },
        }).unwrap()

        successToggle()
      } catch {}
    }
  }, [editTarget, successToggle, target])

  return (
    <div className="w-full py-3 px-3 flex items-center justify-between target-checkbox">
      <div onClick={handleCheckbox}>
        {target?.status == TargetStatusEnum.Done ? (
          <FillCheckboxIcon />
        ) : (
          <EmptyCheckboxIcon />
        )}
      </div>

      <p>{target?.desire}</p>
      <button onClick={() => editTargetToggle}>
        <MoreIcon />
      </button>
      {target && (
        <TargetEditModal
          isOpen={isEditTargetOpen}
          toggle={editTargetToggle}
          target={target}
        />
      )}

      <ProgressSuccessModal isOpen={isSuccessOpen} toggle={successToggle} />
    </div>
  )
}
