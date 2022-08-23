import { ExtraInput, Form, Input } from '@shared/ui'
import { ContresIcon } from '@shared/ui/icons/contres.icon'
import { Controller, useFormContext } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

export interface ICreateClientFormProperties {}

export function CreateClientForm(props: ICreateClientFormProperties) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <Form defaultValues={''} className='w-full h-full flex items-center justify-center'>
      <div className='w-full flex flex-col gap-4 '>
        <Input
          setValue={() => {}}
          placeholder="Имя"
          inputClasses="w-full"
          name="name"
          register={register}
          errors={errors}
        />
        <Controller
          name="phoneNumber"
          control={control}
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
          inputClasses="w-full"
          name="email"
          register={register}
          errors={errors}
        />
        <Input
          setValue={() => {}}
          placeholder="Дата рождения"
          inputClasses="w-full"
          name="birthDay"
          register={register}
          errors={errors}
          type="date"
        />
        <ExtraInput
          setValue={() => {}}
          placeholder="Противопоказания"
          inputClasses="w-full"
          name="contraindications"
          register={register}
          errors={errors}
          icon={<ContresIcon />}
        />
        {/* <ExtraInput
          setValue={() => {}}
          placeholder="Цель"
          containerClasses="w-full"
          name="goal"
          register={register}
          errors={errors}
          icon={<GoalIcon />}
        />
        <ExtraInput
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
