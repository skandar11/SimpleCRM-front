import classNames from 'classnames'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface ITableLoaderProperties {
  columns: any[]
}
export const TableLoader = (props: ITableLoaderProperties) => {
  const { columns } = props
  return (
    <SkeletonTheme>
      <div className={classNames('w-full mt-6 opacity-50')}>
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((title) => (
                <th key={title.id} onClick={title.onClick} className="px-3">
                  <Skeleton className="h-[3rem] " />
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div className="px-3">
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
          <Skeleton className="h-[1rem] mt-6" />
        </div>
      </div>
    </SkeletonTheme>
  )
}
