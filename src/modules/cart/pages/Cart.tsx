import { FC } from 'react';
import { StyledCart } from '../styled';
import {
  AppButton,
  AppButtonIcon,
  AppButtonIconOnly,
  AppIcon,
  AppImage,
  AppInput,
  AppText,
} from '@/components';
import { Colors, LIST_PROMOTIONS_PRODUCT_DETAILS, icons } from '@/constants';
import { Controller } from 'react-hook-form';
import { useCartHooks } from '../hooks';
import { Minus, Plus } from 'lucide-react';

export const Cart: FC = () => {
  const { control, errors } = useCartHooks();

  return (
    <StyledCart className="cart">
      <div className="wrapper-cart">
        <div className="header">
          <AppButtonIcon
            width={200}
            height={50}
            backgroundColor={Colors.transparent}
            color={Colors.black_70}
            text="Về trang chủ TopZone"
            leftIcon={<AppIcon iconUrl={icons.BLACK_CHEVRON_LEFT} />}
            gap={12}
          />
          <AppText text="Giỏ hàng của bạn" color={Colors.black_80} />
        </div>

        <div className="product-and-price">
          <div className="first-layout">
            <div className="image-and-clear-button">
              <AppImage
                imageUrl="https://cdnv2.tgdd.vn/mwg-static//42/329143/s16/iphone-16-pro-natural-titan-1-638621710014984362-650x650.jpg"
                width={80}
                height={80}
              />
              <AppButtonIcon
                width={50}
                height={20}
                leftIcon={<AppIcon iconUrl={icons.BLACK_CLEAR_ICON} size={8} />}
                backgroundColor={Colors.gray_260}
                color={Colors.gray_270}
                fontSize={12}
                text="Xóa"
              />
            </div>
            <div className="info">
              <div className="name-and-price">
                <AppText
                  text="iPhone 16 Pro 128GB"
                  fontSize={15}
                  color={Colors.black_80}
                />
                <AppText
                  text="25.390.000₫"
                  fontSize={15}
                  fontWeight={600}
                  color={Colors.black_80}
                  marginBottom={10}
                />
              </div>
              <AppText
                text="Online giá rẻ quá"
                fontSize={12}
                fontWeight={300}
                color={Colors.black_80}
              />
              <ul className="list-promotions">
                {LIST_PROMOTIONS_PRODUCT_DETAILS.map((item) => (
                  <li key={item.id}>
                    <AppText
                      text={item.text}
                      marginBottom={4}
                      color={Colors.black_80}
                    />
                  </li>
                ))}
              </ul>
              <div className="color-and-temporary-price">
                <div className="color">
                  <AppText text="Màu: " color={Colors.black_80} />
                  <AppText
                    text="Titan tự nhiên"
                    color={Colors.black_80}
                    fontWeight={600}
                  />
                </div>
                <div className="temporary-price">
                  <AppButtonIconOnly
                    width={22}
                    height={22}
                    icon={
                      <Minus
                        strokeWidth={1.5}
                        size={12}
                        color={Colors.black_10}
                      />
                    }
                    backgroundColor={Colors.white_10}
                    borderColor={Colors.gray_280}
                    paddingHorizontal={0}
                    paddingVertical={0}
                  />
                  <div className="quantity">
                    <AppText text="1" fontSize={12} color={Colors.black_10} />
                  </div>
                  <AppButtonIconOnly
                    width={22}
                    height={22}
                    icon={
                      <Plus
                        strokeWidth={1.5}
                        size={12}
                        color={Colors.black_10}
                      />
                    }
                    backgroundColor={Colors.white_10}
                    borderColor={Colors.gray_280}
                    paddingHorizontal={0}
                    paddingVertical={0}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="second-layout">
            <div className="temperory-and-total-quantity">
              <AppText
                text="Tạm tính"
                color={Colors.black_80}
                fontWeight={700}
              />
              <AppText
                text="(1 sản phẩm):"
                color={Colors.black_80}
                fontSize={13}
              />
            </div>
            <div className="price">
              <AppText
                text="25.390.000₫"
                color={Colors.black_80}
                fontWeight={700}
              />
            </div>
          </div>
        </div>

        <div className="customer-info">
          <AppText
            text="Thông tin khách hàng"
            fontSize={15}
            fontWeight={600}
            color={Colors.black_80}
            marginBottom={12}
          />

          <div className="wrapper-form">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <AppInput
                  {...field}
                  required={true}
                  placeholder="Họ và tên"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  onBlur={(e) => {
                    field.onBlur();
                    field.onChange(e.target.value.trim());
                  }}
                  errors={errors?.name?.message}
                  width={260}
                  height={50}
                  borderRadius={12}
                />
              )}
            />

            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <AppInput
                  {...field}
                  placeholder="Số điện thoại"
                  required={true}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  onBlur={(e) => {
                    field.onBlur();
                    field.onChange(e.target.value.trim());
                  }}
                  errors={errors?.phoneNumber?.message}
                  width={260}
                  height={50}
                  borderRadius={12}
                />
              )}
            />
          </div>
        </div>

        <div className="address-info">
          <AppText
            text="Địa chỉ nhận hàng"
            fontSize={15}
            fontWeight={600}
            color={Colors.black_80}
            marginBottom={12}
          />

          <div className="wrapper-address">
            <div className="item">
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    required={true}
                    placeholder="Tỉnh / thành phố"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    errors={errors?.name?.message}
                    width={250}
                    height={50}
                    borderRadius={12}
                  />
                )}
              />
              <Controller
                name="district"
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    placeholder="Quận / huyện"
                    required={true}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    errors={errors?.phoneNumber?.message}
                    width={250}
                    height={50}
                    borderRadius={12}
                  />
                )}
              />
            </div>

            <div className="item">
              <Controller
                name="ward"
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    placeholder="Phường / xã"
                    required={true}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    errors={errors?.phoneNumber?.message}
                    width={250}
                    height={50}
                    borderRadius={12}
                  />
                )}
              />
              <Controller
                name="streetAddress"
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    placeholder="Số nhà, tên đường"
                    required={true}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    errors={errors?.phoneNumber?.message}
                    width={250}
                    height={50}
                    borderRadius={12}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="total-amount">
          <div className="total">
            <AppText
              text="Tổng tiền:"
              fontSize={15}
              fontWeight={600}
              color={Colors.black_80}
            />
            <AppText
              text="25.390.000₫"
              color={Colors.red_60}
              fontWeight={600}
            />
          </div>
          <AppButton
            text="Đặt hàng"
            height={50}
            fontSize={15}
            fontWeight={700}
            backgroundColor={Colors.blue_140}
            borderRadius={12}
          />
        </div>
      </div>
    </StyledCart>
  );
};
