export enum ERoute {
  HOME = '/',
  LOGIN = 'sign-in',
  PRODUCT_DETAILS = '/product-details/:productId',
  CART = '/cart',
}

export enum ETextCursor {
  TEXT = 'text',
  POINTER = 'pointer',
  DEFAULT = 'default',
  NOT_ALLOWED = 'not-allowed',
  UNSET = 'unset',
}

export enum EBreakPoint {
  SMALL_MOBILE = '320px',
  MEDIUM_MOBILE = '375px',
  LARGE_MOBILE = '425px',
  EXTRA_MOBILE = '525px',
  TABLET = '768px',
  LAPTOP = '1024px',
  SMALL_DESKTOP = '1200px',
  MEDIUM_DESKTOP = '1440px',
  LARGE_DESKTOP = '1600px',
}

export enum ETypeButton {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum EInputAntdError {
  ERROR = 'error',
  WARNING = 'warning',
  NONE = '',
}
