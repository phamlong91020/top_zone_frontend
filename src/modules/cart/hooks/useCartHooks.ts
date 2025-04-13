/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICustomerCartForm } from '@/interfaces';
import { customerCartFormValidationSchema } from '@/validations';

export const useCartHooks = () => {
  const defaultValues = {
    name: '',
    phoneNumber: '',
    city: '',
    district: '',
    ward: '',
    streetAddress: '',
  };

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ICustomerCartForm>({
    defaultValues,
    resolver: yupResolver(
      customerCartFormValidationSchema
    ) as Resolver<ICustomerCartForm>,
  });

  return {
    control,
    errors,
  };
};
