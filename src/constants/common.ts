import { icons } from './icons';
import { images } from './images';

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
    image: images.MAGIC_KEYBOARD,
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
  {
    label: 'Loa Bluetooth Harman Kardon Aura Studio 4',
    image: images.HARMAN_KARDON_STUDIO_4,
    price: '6.990.000₫',
    sale_price: '5.990.000',
  },
  {
    label: 'Loa Bluetooth JBL Flip 6',
    image: images.JBL_FLIP_6,
    price: '2.990.000₫',
    sale_price: '2.490.000',
  },
  {
    label: 'Loa Bluetooth JBL Go 3',
    image: images.JBL_GO_3,
    price: '2.990.000₫',
    sale_price: '2.490.000',
  },
];

export const ALL_CATEGORY = [
  {
    key: 'iphone',
    category: 'iPhone',
    products: [
      {
        label: 'iPhone 15 Pro Max 256GB',
        image: images.IPHONE_15_PRO_MAX_BLUE,
        price: '34.590.000',
        sale_price: '33.790.000',
      },
      {
        label: 'iPhone 15 Pro 128GB',
        image: images.IPHONE_15_PRO_BLACK,
        price: '28.990.000',
        sale_price: '27.990.000',
      },
      {
        label: 'iPhone 15 Plus 128GB',
        image: images.IPHONE_15_PLUS_BLUE,
        price: '25.490.000',
        sale_price: '25.990.000',
      },
      {
        label: 'iPhone 15 128GB',
        image: images.IPHONE_15_BLACK,
        price: '22.190.000',
        sale_price: '22.690.000',
      },
      {
        label: 'iPhone 14 Pro 256GB',
        image: images.IPHONE_14_PRO_256GB,
        price: '29.190.000',
        sale_price: '26.390.000',
      },
      {
        label: 'iPhone 13 128GB',
        image: images.IPHONE_13_PINK,
        price: '16.590.000',
        sale_price: '18.890.000',
      },
      {
        label: 'iPhone 11 64GB',
        image: images.IPHONE_11_WHITE,
        price: '10.490.000',
        sale_price: '11.590.000',
      },
      {
        label: 'iPhone 14 128GB',
        image: images.IPHONE_14_PURPLE,
        price: '19.190.000',
        sale_price: '21.790.000',
      },
    ],
  },
  {
    key: 'mac',
    category: 'Mac',
    products: [
      {
        label: 'MacBook Pro 13 inch M2 2022 8CPU/8GB/512GB/10GPU',
        image: images.MAC_PRO_13_M2,
        price: '35.390.000',
        sale_price: '34.190.000',
      },
      {
        label: 'MacBook Pro 14 inch 2023 M2 Pro 12CPU/16GB/1TB/19GPU',
        image: images.MAC_PRO_14_M2,
        price: '59.690.000',
        sale_price: '34.190.000',
      },
      {
        label: 'MacBook Pro 16 inch M2 Pro 2023 12CPU/16GB/512GB/19GPU',
        image: images.MAC_PRO_16_M2,
        price: '59.690.000',
        sale_price: '58.990.000',
      },
      {
        label: 'MacBook Pro 16 inch 2023 M2 Pro 12CPU/16GB/1TB/19GPU',
        image: images.MAC_PRO_16_M2,
        price: '58.990.000',
        sale_price: '65.990.000',
      },
      {
        label: 'MacBook Air 15 inch M2 2023 8CPU/16GB/256GB/10GPU',
        image: images.MAC_AIR_15_M2_STARLIGHT,
        price: '37.990.000',
        sale_price: '36.490.000',
      },
      {
        label: 'MacBook Air 13 inch M2 2022 8CPU/8GB/256GB/8GPU',
        image: images.MAC_AIR_13_M2_YELLOW,
        price: '26.990.000',
        sale_price: '27.990.000',
      },
      {
        label: 'Mac mini M1 2020 8CPU/8GB/512GB/8GPU',
        image: images.MAC_MINI_M1,
        price: '13.990.000',
        sale_price: '12.990.000',
      },
      {
        label: 'iMac 24 inch M1 2021 8CPU/8GB/256GB/8GPU',
        image: images.IMAC_24_BLUE,
        price: '34.990.000',
        sale_price: '33.990.000',
      },
    ],
  },
  {
    key: 'ipad',
    category: 'iPad',
    products: [
      {
        label: 'iPad 9 WiFi 64GB',
        image: images.IPAD_9_WIFI_64GB,
        price: '7.890.000',
        sale_price: '8.290.000',
      },
      {
        label: 'iPad 10 WiFi 64GB',
        image: images.IPAD_10_WIFI_64GB,
        price: '11.190.000',
        sale_price: '11.290.000',
      },
      {
        label: 'iPad Pro M2 11 inch WiFi 128GB',
        image: images.IPAD_PRO_M2_11_INCH,
        price: '20.090.000',
        sale_price: '20.590.000',
      },
      {
        label: 'iPad Air 5 WiFi 64GB',
        image: images.IPAD_AIR_5_WIFI_STARLIGHT,
        price: '15.590.000',
        sale_price: '14.090.000',
      },
      {
        label: 'iPad Air 5 WiFi 64GB',
        image: images.IPAD_AIR_5_WIFI_STARLIGHT,
        price: '15.590.000',
        sale_price: '14.090.000',
      },
      {
        label: 'iPad mini 6 WiFi + Cellular 64GB',
        image: images.IPAD_GEN_10_CELULLAR_BLUE,
        price: '14.290.000',
        sale_price: '15.290.000',
      },
      {
        label: 'iPad Pro M2 11 inch WiFi 256GB',
        image: images.IPAD_PRO_M2_11_SILVER,
        price: '23.290.000',
        sale_price: '23.790.000₫',
      },
      {
        label: 'iPad Pro M2 11 inch WiFi Cellular 128GB',
        image: images.IPAD_PRO_M2_11_5G_GREY,
        price: '23.290.000',
        sale_price: '24.990.000₫',
      },
    ],
  },
  {
    key: 'watch',
    category: 'Watch',
    products: [
      {
        label: 'Apple Watch SE 2022 GPS 40mm viền nhôm dây thể thao',
        image: images.APPLE_WATCH_SE_2022_GPS_40MM,
        price: '6.090.000',
        sale_price: '7.490.000',
        new: true,
      },
      {
        label: 'Apple Watch Series 9 GPS 41mm viền nhôm dây thể thao',
        image: images.APPLE_WATCH_S9_GPS_41MM_PINK_SILICONE,
        price: '9.090.000',
        sale_price: '10.090.000',
      },
      {
        label: 'Apple Watch SE 2022 GPS 44mm viền nhôm dây thể thao',
        image: images.APPLE_WATCH_SE_2022_GPS_40MM,
        price: '8.490.000',
        sale_price: '6.790.000',
      },
      {
        label:
          'Apple Watch Ultra 2 GPS + Cellular 49mm viền Titanium dây Alpine size M',
        image: images.APPLE_WATCH_SE_2022_GPS_40MM,
        price: '21.990.000',
        sale_price: '20.790.000',
        new: true,
      },
      {
        label: 'Apple Watch Series 8 GPS 41mm viền nhôm dây thể thao',
        image: images.APPLE_WATCH_SE_2022_GPS_40MM,
        price: '8.990.000',
        sale_price: '11.990.000',
        new: true,
      },
      {
        label: 'Apple Watch Ultra GPS + Cellular 49mm viền Titanium dây Ocean',
        image: images.APPLE_WATCH_S8_ULTRA_YELLOW,
        price: '19.490.000',
        sale_price: '23.990.000',
      },
      {
        label:
          'Apple Watch Ultra GPS + Cellular 49mm viền Titanium dây Alpine size M',
        image: images.APPLE_WATCH_S8_ULTRA_SIZE_M_WHITE,
        price: '19.490.000',
        sale_price: '23.990.000',
      },
      {
        label: 'Apple Watch Series 8 GPS 45mm viền nhôm dây thể thao',
        image: images.APPLE_WATCH_S8_GPS_45MM_BLACK,
        price: '12.290.000',
        sale_price: '10.290.000',
      },
    ],
  },
  {
    key: 'sound',
    category: 'Sound',
    products: [
      {
        label: 'EarPods jack cắm Lightning',
        image: images.EARPODS_TYPE_C,
        price: '550.000',
        sale_price: '590.000',
      },
      {
        label: 'AirPods Pro (2nd Gen)',
        image: images.AIRPODS_PRO_GEN_2,
        price: '6.190.000',
        sale_price: '5.890.000',
      },
      {
        label: 'EarPods jack cắm 3.5 mm',
        image: images.EARPODS_CLASSIC_TYPE,
        price: '790.000',
        sale_price: '590.000',
      },
      {
        label: 'AirPods 3 New',
        image: images.AIRPODS_3,
        price: '4.490.000',
        sale_price: '4.090.000',
      },
      {
        label: 'AirPods Pro (2nd Gen) USB-C',
        image: images.AIRPODS_PRO_GEN_2,
        price: '6.200.000',
        sale_price: '5.990.000',
      },
      {
        label: 'EarPods USB-C',
        image: images.EARPODS_USB_C,
        price: '550.000',
        sale_price: '590.000',
      },
      {
        label: 'AirPods Max',
        image: images.AIRPODS_MAX,
        price: '13.990.000',
        sale_price: '12.490.000',
      },
      {
        label: 'AirPods 2',
        image: images.AIRPODS_2,
        price: '2.750.000',
        sale_price: '3.490.000',
      },
    ],
  },
  {
    key: 'accessories',
    category: 'Accessories',
    products: [
      {
        label: 'Adapter sạc Apple USB-C 20W',
        image: images.ADAPTER_TYPE_C_20W,
        price: '550.000',
        sale_price: '550.000',
      },
      {
        label: 'Magic Keyboard',
        image: images.MAGIC_KEYBOARD,
        price: '3.190.000',
        sale_price: '2.070.000',
      },
      {
        label: 'Cáp sạc USB-C - Lightning 1m',
        image: images.CHARGING_CORD_C_TO_LIGHTNING,
        price: '550.000₫',
        sale_price: '490.000',
      },
      {
        label: 'Apple Pencil (thế hệ 1)',
        image: images.APPLE_PENCIL_GEN_1,
        price: '2.890.000',
        sale_price: '2.310.000',
      },
      {
        label: 'Magic Mouse',
        image: images.MAGIC_MOUSE,
        price: '2.490.000',
        sale_price: '1.690.000',
      },
      {
        label: 'AirTag',
        image: images.AIRTAG,
        price: '800.000',
        sale_price: '690.000',
      },
      {
        label: 'Apple TV 4K 64GB',
        image: images.APPLE_TV_4K_64GB,
        price: '5.900.000',
        sale_price: '4.790.000',
      },
      {
        label: 'Cáp sạc không dây Apple MagSafe Charger',
        image: images.WIRELESS_CHARGING,
        price: '1.500.000',
        sale_price: '1.270.000',
      },
    ],
  },
];

export const TEK_ZONE = [
  {
    key: 'iphone',
    category: 'Tekzone',
    products: [
      {
        title:
          'Cách ghép 2 video thành 1 trên CapCut siêu đơn giản, giúp bạn có thể tạo ra những video, vlog hấp dẫn',
        image: images.TEKZONE_01,
        link: 'https://www.topzone.vn/tekzone/cach-ghep-2-video-thanh-1-tren-capcut-1554563',
        time: '2 giờ trước',
      },
      {
        title:
          'Flashsale 11/11 tại TopZone: Giảm đến 20% iPhone, Apple Watch, AirPods và MacBook',
        image: images.TEKZONE_02,
        link: 'https://www.topzone.vn/tekzone/flashsale-11-11-tai-topzone-1554217',
        time: '23 giờ trước',
      },
      {
        title:
          'iPhone 15 Series giảm đến 2 triệu đồng tại TopZone, ưu đãi cao chót vót mà bạn không thể bỏ lỡ',
        image: images.TEKZONE_03,
        link: 'https://www.topzone.vn/tekzone/iphone-15-series-giam-den-2-trieu-1554372',
        time: '1 ngày trước',
      },
      {
        title:
          'iPhone giá chỉ từ 10.49 triệu tại TopZone, cơ hội vàng dành cho bạn để lên đời iPhone mới giá hời',
        image: images.TEKZONE_04,
        link: 'https://www.topzone.vn/tekzone/iphone-gia-chi-tu-10-49-trieu-1554371',
        time: '2 ngày trước',
      },
      {
        title: 'iPhone 15 Pro Max màu titan cực sang, giảm cực nhiều đến 800k',
        image: images.TEKZONE_05,
        link: 'https://www.topzone.vn/tekzone/iphone-15-pro-max-mau-titan-cuc-sang-1554544',
        time: '2 ngày trước',
      },
      {
        title:
          'Khuyến mãi Apple Watch tháng 11: Sở hữu đồng hồ thông minh đến từ Apple với giá cả siêu ưu đãi',
        image: images.TEKZONE_06,
        link: 'https://www.topzone.vn/tekzone/khuyen-mai-apple-watch-thang-11-1553977',
        time: '5 ngày trước',
      },
    ],
  },
];

export const POLICY = [
  {
    label: 'Mẫu mã đa dạng',
    icon: icons.SUCCESS_ICON_WHITE,
  },
  {
    label: 'Giao hàng toàn quốc',
    icon: icons.WHITE_SHIPPING,
  },
  {
    label: 'Bảo hành 12 tháng',
    icon: icons.WHITE_SECURE,
  },
  {
    label: 'Đổi trả linh hoạt',
    icon: icons.REFRESH_WHITE_ICON,
  },
];
