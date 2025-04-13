import * as Yup from 'yup';

export const customerCartFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập họ và tên')
    .min(10, 'Họ và tên tối thiểu là 10 kí tự')
    .max(100, 'Họ và tên tối đa chỉ có 100 kí tự'),

  phoneNumber: Yup.string()
    .required('Vui lòng nhập số điện thoại')
    .min(11, 'Số điện thoại phải có ít nhất 11 số')
    .max(15, 'Số điện thoại chỉ có thể tối đa là 16 số'),

  city: Yup.string()
    .required('Vui lòng nhập tỉnh hoặc thành phố')
    .min(6, 'Tỉnh hoặc thành phố phải có ít nhất 6 kí tự')
    .max(50, 'Tỉnh hoặc thành phố có thể tối đa là 50 kí tự'),

  district: Yup.string()
    .required('Vui lòng nhập quận hoặc huyện')
    .min(6, 'Quận hoặc huyện phải có ít nhất 6 kí tự')
    .max(50, 'Quận hoặc huyện chỉ có thể tối đa là 50 kí tự'),

  ward: Yup.string()
    .required('Vui lòng nhập phường hoặc xã')
    .min(6, 'Phường hoặc xã phải có ít nhất 6 kí tự')
    .max(50, 'Phường hoặc xã chỉ có thể tối đa là 50 kí tự'),

  streetAddress: Yup.string()
    .required('Vui lòng nhập số nhà hoặc tên đường')
    .min(6, 'Số nhà hoặc tên đường thoại phải có ít nhất 6 kí tự')
    .max(100, 'Số nhà hoặc tên đường chỉ có thể tối đa là 100 kí tự'),

  paymentMethod: Yup.string().required('Phương thức thanh toán là bắt buộc'),

  cardNumber: Yup.string()
    .required('Số thẻ là bắt buộc')
    .min(16, 'Số thẻ phải có ít nhất 6 kí tự')
    .max(16, 'Số thẻ chỉ có thể tối đa là 16 kí tự'),
});
