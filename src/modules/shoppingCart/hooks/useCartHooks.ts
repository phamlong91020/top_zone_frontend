/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICustomerCartForm } from '@/interfaces';
import { customerCartFormValidationSchema } from '@/validations';
import { EPaymentMethod } from '@/enums';

export const useCartHooks = () => {
  const defaultValues = {
    name: '',
    phoneNumber: '',
    city: '',
    district: '',
    ward: '',
    streetAddress: '',
    paymentMethod: EPaymentMethod.CASH,
    cardNumber: '',
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

  const watchValues = watch();

  const handleCheckout = handleSubmit((values) => {});

  return {
    control,
    errors,
    watchValues,
    handleCheckout,
  };
};
