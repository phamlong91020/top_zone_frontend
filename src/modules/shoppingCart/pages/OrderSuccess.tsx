import { FC } from 'react';
import { StyledOrderSucess } from '../styled';
import { AppButton, AppIcon, AppImage, AppText } from '@/components';
import { Colors, icons } from '@/constants';
import { ETextCursor } from '@/enums';

export const OrderSuccess: FC = () => {
  return (
    <StyledOrderSucess className="order-success">
      <div className="payment-bill">
        <div className="header">
          <AppIcon iconUrl={icons.GREEN_ORDER_SUCCESS} size={30} />
          <AppText
            text="Đặt hàng thành công"
            fontSize={15}
            fontWeight={700}
            color={Colors.green_70}
          />
        </div>

        <div className="order-content">
          <div className="customer-info">
            <div className="thank-customer">
              <AppText text="Cảm ơn anh" color={Colors.black_80} />
              <AppText
                text="Phạm Thăng Long"
                color={Colors.black_80}
                fontWeight={700}
              />
              <AppText
                text="đã cho Topzone cơ hội được phục vụ"
                color={Colors.black_80}
              />
            </div>

            <div className="info">
              <div className="id-and-cancel">
                <div className="id-payment">
                  <AppText
                    text="Đơn hàng: "
                    color={Colors.black_10}
                    fontWeight={700}
                  />
                  <AppText text="#94691619" color={Colors.blue_140} />
                </div>
                <AppText
                  text="Hủy đơn hàng"
                  color={Colors.red_70}
                  cursor={ETextCursor.POINTER}
                />
              </div>

              <ul className="total-and-info">
                <li>
                  <AppText
                    text="•"
                    fontSize={12}
                    fontWeight={700}
                    color={Colors.black_10}
                  />
                  <AppText
                    text="Nguời nhận: "
                    color={Colors.black_10}
                    fontWeight={700}
                  />
                  <AppText text="Anh" color={Colors.black_10} />
                  <AppText text="Phạm Thăng Long," color={Colors.black_10} />
                  <AppText text="012314238758" color={Colors.black_10} />
                </li>
                <li>
                  <div className="label">
                    <AppText
                      text="•"
                      fontSize={12}
                      fontWeight={700}
                      color={Colors.black_10}
                      marginRight={3}
                    />
                    <AppText
                      text="Giao đến: "
                      color={Colors.black_10}
                      fontWeight={700}
                    />
                  </div>
                  <AppText
                    text="123/45 Đường Hoàng Hoa Thám, Phường 13, Phường 1, Quận Tân
                    Bình, Hồ Chí Minh (nhân viên sẽ gọi xác nhận trước khi
                    giao)."
                    color={Colors.black_10}
                  />
                </li>
                <li>
                  <AppText
                    text="•"
                    fontSize={12}
                    fontWeight={700}
                    color={Colors.black_10}
                  />
                  <AppText
                    text="Tổng tiền: "
                    color={Colors.black_10}
                    fontWeight={700}
                  />
                  <AppText
                    text="25.390.000₫"
                    fontWeight={700}
                    color={Colors.black_10}
                  />
                </li>
              </ul>
            </div>

            <div className="receive-item">
              <AppText
                text="Thời gian nhận hàng"
                fontWeight={700}
                color={Colors.black_10}
                marginBottom={12}
              />
              <div className="data-items">
                <div className="item">
                  <AppText
                    text="Giao trước 18h00 hôm nay (13/04)"
                    fontSize={13}
                    fontWeight={700}
                    color={Colors.black_10}
                    marginBottom={20}
                  />
                  <div className="image-and-data">
                    <AppImage
                      imageUrl="https://cdnv2.tgdd.vn/mwg-static//42/329143/s16/iphone-16-pro-natural-titan-1-638621710014984362-650x650.jpg"
                      width={80}
                      height={80}
                    />
                    <div className="data">
                      <AppText
                        text="iPhone 16 Pro 128Gb"
                        color={Colors.black_10}
                        marginBottom={8}
                      />
                      <div className="item">
                        <AppText text="Màu:" color={Colors.gray_300} />
                        <AppText
                          text="Titan tự nhiên"
                          color={Colors.black_10}
                        />
                      </div>
                      <div className="item">
                        <AppText text="Số lượng:" color={Colors.gray_300} />
                        <AppText text="1" color={Colors.black_10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AppButton
              backgroundColor={Colors.white_10}
              borderColor={Colors.blue_140}
              height={60}
              text="Về trang chủ Topzone"
              color={Colors.blue_140}
              borderRadius={12}
            />
          </div>

          <div className="list-products"></div>
        </div>
      </div>
    </StyledOrderSucess>
  );
};
