import * as React from 'react'

export interface IAbonementCardProperties {
  price: number
  trainingCount: number
  monthsCount: number
}

export function AbonementCard(props: IAbonementCardProperties) {
  const { price, monthsCount, trainingCount } = props

  return (
    <div className="frame flex justify-between py-3 px-2 text-primary-text font-semibold rounded-frame">
      <div className=" ">
        <span className="">{trainingCount} трен.</span>
        <span className="text-secondary-text"> X </span>
        <span className="">{monthsCount} месяц</span>
      </div>

      <span>{price} ₽</span>
    </div>
  )
}
