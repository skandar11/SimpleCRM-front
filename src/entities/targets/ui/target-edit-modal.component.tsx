import './target.scss'

import Modal from '@shared/ui/modal/modal.component'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import type { ITarget } from '../model'
import { TargetStatusEnum } from '../model/target-status.enum'
import { useDeleteTargetMutation, useEditTargetMutation } from '../targets.api'

export interface ITargetEditModalProperties {
  target: ITarget
  isOpen: boolean
  toggle: Function
}

export function TargetEditModal({ target, isOpen, toggle }: ITargetEditModalProperties) {
  const [editTarget] = useEditTargetMutation()
  const [deleteTarget] = useDeleteTargetMutation()
  const navigate = useNavigate()
  const { clientId } = useParams()

  const setComplete = useCallback(async () => {
    try {
      await editTarget({
        body: { ...target, status: TargetStatusEnum.Done },
        id: target.id,
      }).unwrap()
    } catch {}
  }, [editTarget, target])

  const handleDelete = useCallback(async () => {
    try {
      await deleteTarget({ id: target.id }).unwrap()
      navigate('/clients/')
    } catch {}
  }, [deleteTarget, navigate, target.id])

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="p-0">
      <div className="target-modal__content">
        <p className="target-modal__bttn">Создана {target.createdAt}</p>
        <button onClick={setComplete} className="target-modal__bttn">
          Отметить цель как выполненную
        </button>
        <button
          onClick={() => {
            navigate(`/targets/edit-target/${target.id}`)
          }}
          className="target-modal__bttn"
        >
          Изменить цель
        </button>
        <button onClick={() => {}} className="target-modal__bttn">
          Поделиться целью и прогрессом
        </button>
        <button
          onClick={() => {
            navigate(`/clients/progress/${clientId}`)
          }}
          className="target-modal__bttn"
        >
          Перейти к прогрессу
        </button>
        <button onClick={handleDelete} className="target-modal__bttn">
          Удалить цель
        </button>
      </div>
      <button onClick={() => toggle()} className="target-modal__exit-bttn">
        Отмена
      </button>
    </Modal>
  )
}
