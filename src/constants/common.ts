import icons from './icons';
import images from './images';

export type LoginForm = {
  email: string;
  password: string;
  isRemember: boolean;
};

export const BANNER_ARRAY = [
  {
    image: images.BANNER_01,
  },
  {
    image: images.BANNER_02,
  },
  {
    image: images.BANNER_03,
  },
  {
    image: images.BANNER_04,
  },
];

export const THUMBNAIL_ARRAY = [
  {
    label: 'iPhone',
    value: 'iphone',
    route: '/iphone',
    icon: icons.IPHONE_GRADIENT,
    image: images.IPHONE,
  },
  {
    label: 'Mac',
    value: 'mac',
    route: '/mac',
    icon: icons.MACBOOK_GRADIENT,
    image: images.MAC,
  },
  {
    label: 'iPad',
    value: 'ipad',
    route: '/ipad',
    icon: icons.IPAD_GRADIENT,
    image: images.IPAD,
  },
  {
    label: 'Watch',
    value: 'watch',
    route: '/watch',
    icon: icons.APPLE_WATCH_GRADIENT,
    image: images.WATCH,
  },
  {
    label: 'Sound',
    value: 'sound',
    route: '/sound',
    icon: icons.AIRPODS_GRADIENT,
    image: images.SOUND,
  },
  {
    label: 'Gear',
    values: 'gear',
    route: '/gear',
    icon: icons.ACCESSORIES_GRADIENT,
    image: images.ACCESSORIES,
  },
  {
    label: 'TekZone',
    values: 'tekZone',
    route: '/tekZone',
    icon: icons.TEKZONE_GRADIENT,
  },
  {
    label: 'TopCare',
    values: 'topCare',
    route: '/topCare',
    icon: icons.TOP_CARE_GRADIENT,
  },
];

export const FLASH_SALE_ARRAY = [
  {
    label: 'iphone 14 Pro 256GB',
    image: images.IPHONE_14_PRO_256GB,
    price: '29.190.000',
    sale_price: '26.390.000',
  },
  {
    label: 'ipad 9 Wifi 64GB',
    image: images.IPAD_9_WIFI_64GB,
    price: '8.390.000',
    sale_price: '6.990.000',
    total: 0,
  },
  {
    label: 'Apple Watch Series 8 GPS 45mm',
    image: images.APPLE_WATCH_SERIES_8_GPS_45MM,
    price: '12.990.000',
    sale_price: '9.990.000',
  },
  {
    label: 'AirPods 3 sạc Lightning',
    image: images.AIRPODS_3_LIGHTNING,
    price: '4.490.000',
    sale_price: '3.790.000',
  },
  {
    label: 'Macbook Air 13 inch M1 2023',
    image: images.MACBOOK_AIR_13_M1,
    price: '19.590.000',
    sale_price: '18.990.000',
  },
  {
    label: 'iphone 12 64GB',
    image: images.IPHONE_12_64GB,
    price: '16.090.000',
    sale_price: '13.490.000',
  },
  {
    label: 'Magic Keyboard với Touch ID và Numeric Keypad',
    image: images.MAGIC_KEYBOARD_FULL_SIZE,
    price: '4.990.000',
    sale_price: '3.740.000',
  },
  {
    label: 'Apple Watch SE 2023 GPS 40mm Sport Band',
    image: images.APPLE_WATCH_SE_2023_GPS_40MM_SPORT_BAND,
    price: '6.390.000',
    sale_price: '6.190.000',
  },
  {
    label: 'Apple Pencil (thế hệ 2)',
    image: images.APPLE_PENCIL_2,
    price: '4.090.000',
    sale_price: '3.100.000',
  },
  {
    label: 'Apple Watch SE 2023 GPS 44mm Sport Loop',
    image: images.APPLE_WATCH_SE_2023_GPS_44mm_SPORT_LOOP,
    price: '7.190.000',
    sale_price: '6.990.000',
  },
  {
    label: 'Adapter sạc Apple USB 5W',
    image: images.ADAPTER_5W,
    price: '450.000',
    sale_price: '315.000',
  },
  {
    label: 'Magic Keyboard',
    image: images.ADAPTER_5W,
    price: '3.190.000',
    sale_price: '2.070.000',
  },
  {
    label: 'AirPods Pro (2nd Gen)',
    image: images.AIRPODS_PRO_2,
    price: '6.190.000',
    sale_price: '5.790.000',
  },
  {
    label: 'Ốp lưng Magsafe cho iphone 14 Pro Max Nhựa',
    image: images.MACSAFE_SHORTENED_14_PRO_MAX,
    price: '635.000',
    sale_price: '1.590.000',
  },
  {
    label: 'Magic Mouse',
    image: images.MAGIC_MOUSE,
    price: '2.490.000',
    sale_price: '1.640.000',
  },
];
