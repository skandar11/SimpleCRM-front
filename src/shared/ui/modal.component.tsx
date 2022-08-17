import closeIcon from '@assets/icons/close.svg'
import classNames from 'classnames'
import type { ReactElement } from 'react'

interface IModal {
  children: ReactElement
  Title?: ReactElement
  additionalClasses?: string
  onModalClose?(): void
}

export function Modal(properties: IModal) {
  const { Title, children, additionalClasses, onModalClose } = properties

  return (
    <div className="h-screen w-screen fixed inset-0 flex justify-center items-center">
      <div
        className="bg-[#eeeeee50] absolute inset-0 w-full h-full animate-fadeIn"
        onClick={onModalClose}
      ></div>
      <div
        className={classNames(
          'bg-white w-[36.125rem] rounded-[1.5rem] p-[2.0625rem] animate-backInDown',
          additionalClasses
        )}
      >
        <div className="flex justify-between items-start text-[2rem] font-light">
          {Title}
          <button onClick={onModalClose}>
            <img src={closeIcon} alt="" className="w-[0.9375rem]" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
