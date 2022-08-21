import { FormProvider, useForm } from 'react-hook-form'

export interface IwithFormProviderProperties {}

export const withFormProvider =
  (Component: any, FieldsType: any) => (properties: JSX.IntrinsicAttributes) => {
    const methods = useForm<typeof FieldsType>()

    return (
      <FormProvider {...methods}>
        <Component {...properties} />
      </FormProvider>
    )
  }
