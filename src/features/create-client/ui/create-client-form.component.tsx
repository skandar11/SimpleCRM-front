import { AbonementUiService } from '@entities/abonement'
import { GraphicUiService } from '@entities/graphic'
import { ExtraInput, Form, Input, PhoneInput, TargetIcon } from '@shared/ui'
import { ContraIcon } from '@shared/ui/icons/contra.icon'
import { useFormContext } from 'react-hook-form'

export interface ICreateClientFormProperties {}

export function CreateClientForm(props: ICreateClientFormProperties) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <Form defaultValues={''} className="w-full h-full flex items-start justify-center">
      <div className="w-full flex flex-col gap-4 ">
        <div className="frame container py-4 rounded-b-frame">
          <Input
            setValue={() => {}}
            placeholder="Имя "
            inputClassName="w-full"
            name="name"
            register={register}
            errors={errors}
          />
          <PhoneInput name="phoneNumber" control={control} />
          <Input
            setValue={() => {}}
            placeholder="Дата рождения"
            inputClassName="w-full"
            name="birthDay"
            register={register}
            errors={errors}
            type="date"
          />
          <Input
            setValue={() => {}}
            placeholder="Email"
            inputClassName="w-full"
            name="email"
            register={register}
            errors={errors}
          />
        </div>

        <ExtraInput
          setValue={() => {}}
          placeholder="Противопоказания"
          inputClassName="w-full"
          name="contraindications"
          register={register}
          errors={errors}
          leftIcon={<ContraIcon />}
        />

        <ExtraInput
          setValue={() => {}}
          placeholder="Цели"
          inputClassName="w-full"
          leftIcon={<TargetIcon />}
        />

        <AbonementUiService.AbonementPicker />
        <GraphicUiService.GraphicPicker />
      </div>
    </Form>
  )
}
