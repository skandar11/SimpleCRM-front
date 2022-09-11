import type { IGetClientInfoDto } from '@entities/clients/model'
import type { ITarget } from '@entities/targets/model'
import { TargetInput } from '@entities/targets/ui'
import { ContraIcon, ExtraInput, Form, Input } from '@shared/ui'
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
          containerClassName="w-full"
          inputClassName="w-full"
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
          containerClassName="w-full"
          name="email"
          defaultValue={clientInfo?.email}
          register={register}
          inputClassName="w-full"
          errors={errors}
        />
        <Input
          setValue={() => {}}
          placeholder="Дата рождения"
          containerClassName="w-full"
          name="birthDay"
          defaultValue={clientInfo?.birthDay}
          register={register}
          errors={errors}
          inputClassName="w-full"
          type="date"
        />
        <ExtraInput
          setValue={() => {}}
          placeholder="Противопоказания"
          containerClassName="w-full"
          name="contraindications"
          defaultValue={clientInfo?.contraindications}
          register={register}
          inputClassName="w-full"
          errors={errors}
          leftIcon={<ContraIcon />}
        />
        {/* <ExtraInput
          setValue={() => {}}
          placeholder="Цель"
          containerClassName="w-full"
          name="target"
          defaultValue={targets?.toString()}
          register={register}
          errors={errors}
          leftIcon={<GoalIcon />}
        /> */}
        <TargetInput errors={errors} register={register} target={target} />
        {/* <ExtraInput
          setValue={() => {}}
          placeholder="Абонимент"
          containerClassName="w-full"
          name="abonement"
          register={register}
          errors={errors}
          leftIcon={<AbonementIcon />}
        />
        <ExtraInput
          setValue={() => {}}
          placeholder="График тренировок"
          containerClassName="w-full"
          name="schedule"
          register={register}
          errors={errors}
          leftIcon={<ScheduleTrainingIcon />}
        /> */}
      </div>
    </Form>
  )
}
