import { Targets, TargetsApi } from '@entities/targets'
import { TargetStatusEnum } from '@entities/targets/model'
import { ArrowBackIcon, Footer, Header } from '@shared/ui'
import { FooterNav } from '@shared/ui/footer/footer-nav.component'
import { Main } from '@shared/ui/main/main.component'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export interface IProgressProperties {}

export function ProgressPage(props: IProgressProperties) {
  const navigate = useNavigate()
  const { clientId } = useParams()

  const { data: targets } = TargetsApi.useGetAllTargetsByUserQuery({
    id: clientId as string,
  })

  const currentTarget = useMemo(() => {
    return targets?.find((el) => el.status === TargetStatusEnum.Active)
  }, [targets])

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
        <div className="flex flex-col items-start justify-center mx-auto space-y-5 mt-4">
          <Targets.TargetCheckbox target={currentTarget} />
          <Targets.ProgressList targets={[]} />
        </div>
      </Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}
