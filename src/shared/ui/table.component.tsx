import classNames from 'classnames'
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TableLoader } from './loaders'

export interface ITableElement {
  value: string | number | React.ReactElement
  onClick?(): void
}

type TableRow = {
  row: Array<ITableElement>
  onClick?: () => void
}

interface ITableProperties {
  data: {
    head: ITableElement[]
    body: Array<TableRow>
  }
  additionalClasses?: string
  isLoading: boolean
}

export function Table(properties: ITableProperties) {
  const { data, additionalClasses, isLoading } = properties

  const headData = useMemo(() => {
    return data.head.map((item) => ({ ...item, id: uuidv4() }))
  }, [data.head])

  const bodyData = useMemo(() => {
    return data.body.map((item) =>
      item.row.map((cell) => ({
        ...cell,
        id: uuidv4(),
        onClick: cell.onClick || item.onClick,
      }))
    )
  }, [data.body])

  return isLoading ? (
    <TableLoader columns={headData} />
  ) : (
    <table className={classNames('w-full', additionalClasses)}>
      <thead>
        <tr>
          {headData.map((title) => (
            <th
              className="text-left text-[#00000040] text-sm py-2 px-3 font-semibold"
              key={title.id}
              onClick={title.onClick}
            >
              {title.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((row, rowIndex) => (
          <tr key={`${row[0]?.id}01`} className="cursor-pointer">
            {row.map((cell, index) => (
              <td
                className={classNames(
                  'py-2 px-3 font-medium text-sm',
                  !(rowIndex % 2) && 'bg-[#FAFBFF] rounded-[4px]'
                )}
                key={cell.id}
                onClick={cell.onClick}
              >
                {cell.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
