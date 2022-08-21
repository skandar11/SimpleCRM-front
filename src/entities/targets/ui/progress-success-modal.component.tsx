import congratsImg from '@shared/assets/congrats.png'
import { StarIcon } from '@shared/ui'
import Modal from '@shared/ui/modal/modal.component'
import { useNavigate } from 'react-router-dom'

import { useEditTargetMutation } from '../targets.api'

export interface IProgressSuccessModalProperties {
  isOpen: boolean
  toggle: Function
}

export function ProgressSuccessModal({
  isOpen,
  toggle,
}: IProgressSuccessModalProperties) {
  const navigate = useNavigate()

  const [editTarget] = useEditTargetMutation()

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="p-0">
      <div className="bg-white rounded-md flex flex-col px-10 py-4">
        <img src={congratsImg} className="w-[7rem] mx-auto" alt="" />
        <h1 className="text-center">
          Поздравляем вы завершили цель!
          <br /> Продолжайте в том же духе!
        </h1>
        <div className="flex flex-col space-y-5 mt-7">
          <button className="inline-flex items-center justify-center bg-black text-white p-3">
            <StarIcon />
            <p>Поставить новую цель</p>
          </button>

          <button
            onClick={() => {
              toggle()
              navigate('/clients')
            }}
            className="inline-flex items-center justify-center bg-white text-black border-black border p-3"
          >
            <p>Поставить цель позже</p>
          </button>

          <button className="inline-flex items-center justify-center">
            <p>Отменить изменение</p>
          </button>
        </div>
      </div>
    </Modal>
  )
}
