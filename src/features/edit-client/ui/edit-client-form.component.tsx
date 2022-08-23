import type { IGetClientInfoDto } from '@entities/clients/model'
import type { ITarget } from '@entities/targets/model'
import { TargetInput } from '@entities/targets/ui'
import { ExtraInput, Form, Input } from '@shared/ui'
import { ContresIcon } from '@shared/ui/icons/contres.icon'
import { Controller, useFormContext } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

export interface IEditClientFormProperties {
  clientInfo: IGetClientInfoDto | undefined
  target: ITarget | undefined
}

export function EditClientForm({ clientInfo, target }: IEditClientFormProperties) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <Form defaultValues={clientInfo} className="w-full">
      <div className="space-y-4">
        <Input
          setValue={() => {}}
          placeholder="Имя"
          containerClasses="w-full"
          inputClasses="w-full"
          defaultValue={clientInfo?.name}
          name="name"
          register={register}
          errors={errors}
        />
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue={clientInfo?.phoneNumber}
          // @ts-ignore
          render={({ field: { onChange, onBlur, value, name, ref } }) => {
            return (
              <ReactInputMask
                mask="+7 (999) 999-99-99"
                maskPlaceholder="+7"
                placeholder="+7"
                value={value}
                onChange={onChange}
                className="input w-full"
              />
            )
          }}
        />
        <Input
          setValue={() => {}}
          placeholder="Email"
          containerClasses="w-full"
          name="email"
          defaultValue={clientInfo?.email}
          register={register}
          inputClasses="w-full"
          errors={errors}
        />
        <Input
          setValue={() => {}}
          placeholder="Дата рождения"
          containerClasses="w-full"
          name="birthDay"
          defaultValue={clientInfo?.birthDay}
          register={register}
          errors={errors}
          inputClasses="w-full"
          type="date"
        />
        <ExtraInput
          setValue={() => {}}
          placeholder="Противопоказания"
          containerClasses="w-full"
          name="contraindications"
          defaultValue={clientInfo?.contraindications}
          register={register}
          inputClasses="w-full"
          errors={errors}
          icon={<ContresIcon />}
        />
        {/* <ExtraInput
          setValue={() => {}}
          placeholder="Цель"
          containerClasses="w-full"
          name="target"
          defaultValue={targets?.toString()}
          register={register}
          errors={errors}
          icon={<GoalIcon />}
        /> */}
        <TargetInput errors={errors} register={register} target={target} />
        {/* <ExtraInput
          setValue={() => {}}
          placeholder="Абонимент"
          containerClasses="w-full"
          name="abonement"
          register={register}
          errors={errors}
          icon={<AbonementIcon />}
        />
        <ExtraInput
          setValue={() => {}}
          placeholder="График тренировок"
          containerClasses="w-full"
          name="schedule"
          register={register}
          errors={errors}
          icon={<ScheduleTrainingIcon />}
        /> */}
      </div>
    </Form>
  )
}
