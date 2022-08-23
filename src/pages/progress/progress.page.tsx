import { Targets, TargetsApi } from '@entities/targets'
import type { IProgressItem } from '@entities/targets/model'
import { TargetStatusEnum } from '@entities/targets/model'
import { AuthModel } from '@features/auth'
import { ArrowBackIcon, Footer, Header, Input } from '@shared/ui'
import { FileInput } from '@shared/ui/file-input.component'
import { Main } from '@shared/ui/main/main.component'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export interface IProgressProperties {}

export const ProgressPage = AuthModel.withAuthGuard((props: IProgressProperties) => {
  const navigate = useNavigate()
  const { clientId } = useParams()

  const { data: targets } = TargetsApi.useGetAllTargetsByUserQuery({
    id: clientId as string,
  })

  const currentTarget = useMemo(() => {
    return targets?.find((el) => el.status === TargetStatusEnum.Active)
  }, [targets])

  const [newProgress, setNewProgress] = useState<IProgressItem>({
    images: [],
    body: 'Результат взвешивания составил 80 кг',
    timestamp: new Date(),
  })

  return (
    <>
      <Header className="w-full flex justify-between">
        <div className="flex space-x-2 items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center"
          >
            <ArrowBackIcon />
          </button>
          <p>Цель и прогресс</p>
        </div>
      </Header>
      <Main>
        <div className="flex flex-col items-start justify-between mx-auto space-y-5 h-full overflow-hidden">
          <div className="w-full flex flex-col mt-4">
            <p className="my-8">Текущая цель</p>
            <Targets.TargetCheckbox target={currentTarget} />
          </div>

          <Targets.ProgressList targets={targets} newProgress={newProgress} />
        </div>
      </Main>
      <Footer>
        <div className="flex items-center justify-center w-full px-8">
          <FileInput
            onChange={(blobArray: Blob[]) =>
              setNewProgress({
                ...newProgress,
                images: blobArray,
              })
            }
          />

          <Input
            containerClasses="flex items-center justify-center w-full"
            setValue={() => {}}
            placeholder="Добавить комментарий"
            inputClasses="w-full"
          />
        </div>
      </Footer>
    </>
  )
})
