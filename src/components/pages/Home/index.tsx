import { FC, useState } from 'react';
import useHomeHook, { Props, ReceivedProps } from './hook';
import StyledLogin from './styled';
import { Link } from 'react-router-dom';
import icons from '@/constants/icons';
import { styled } from 'styled-components';
import { Button, Steps, StepsProps } from 'antd';

const HomeLayout: FC<Props> = () => {
  const getStyleBackground = (status: string) => {
    let backgroundColor;
    switch (status) {
      case 'finish':
        backgroundColor = '#ffffff';
        break;
      case 'process ':
        backgroundColor = '#c7000d';
        break;
      case 'wait':
        backgroundColor = '#ffffff';
        break;
      default:
        backgroundColor = '#c7000d';
    }
    return backgroundColor;
  };

  const getBorderColor = (status: string) => {
    let borderColor;
    switch (status) {
      case 'finish':
        borderColor = '#c7000d';
        break;
      case 'process':
        borderColor = '#c7000d';
        break;
      case 'wait':
        borderColor = '#E6C8C1';
        break;
      default:
        borderColor = '#c7000d';
    }
    return borderColor;
  };

  const getStepColor = (status: string) => {
    let color;
    switch (status) {
      case 'finish':
        color = '#c7000d';
        break;
      case 'process':
        color = '#ffffff';
        break;
      case 'wait':
        color = '#323232';
        break;
      default:
        color = '#c7000d';
    }
    return color;
  };

  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <StepProgress
      style={{
        background: getStyleBackground(status),
        borderColor: getBorderColor(status),
      }}
    >
      <div style={{ color: getStepColor(status) }}>{index + 1}</div>

      {status === 'finish' && <div className="step-done"></div>}
    </StepProgress>
  );

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <StyledLogin>
      <div className="product-category">
        <ul className="category-list">
          {PRODUCT_LIST.map((item) => (
            <li className="category" key={item.key}>
              <Link to={item.link}>
                <img src={item.icon} alt="MOBILE_ICON" />
              </Link>

              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="carousel-ad"></div>

      <StyledSteps>
        <Steps
          style={{ paddingBottom: '30px' }}
          current={currentStep}
          progressDot={customDot}
          items={items}
        />
      </StyledSteps>

      <Button onClick={prevStep} disabled={currentStep === 0}>
        Back
      </Button>
      <Button onClick={nextStep} disabled={currentStep === 3}>
        Next
      </Button>
    </StyledLogin>
  );
};

export const StyledSteps = styled.div`
  .ant-steps-item-content {
    display: none !important;
  }

  .ant-steps-item-icon {
    width: 100%;
  }

  .ant-steps-dot .ant-steps-item-tail {
    top: 14px;
  }

  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    width: 100%;
    height: 2px;
    background-color: #c7000d;
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: #c7000d;
  }

  .ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    width: 100%;
    height: 2px;
    background: #e6c8c1;
  }

  .ant-steps-item-wait .ant-steps-item-container > .ant-steps-item-tail::after {
    width: 100%;
    height: 2px;
    background: #e6c8c1;
  }

  .ant-steps .ant-steps-item {
    flex: unset;
  }

  .ant-steps-item-content {
    width: unset;
  }
`;

export const StepProgress = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .step-done {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -2px;
    right: -5px;
    height: 14px;
    width: 14px;
    background: #fff;
    background-color: #c7000d;
    border-radius: 50px;
  }

  .step-done:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 3px;
    width: 2px;
    height: 5px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Home: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHomeHook(props)} />
);

export default Home;

export const PRODUCT_LIST = [
  {
    key: 0,
    label: 'Điện thoại',
    link: '/phones',
    icon: icons.MOBILE_ICON || '',
  },
  {
    key: 1,
    label: 'Đồng hồ',
    link: '/watches',
    icon: icons.WATCH_ICON || '',
  },
  {
    key: 2,
    label: 'Laptop',
    link: '/laptop',
    icon: icons.LAPTOP_ICON || '',
  },
  {
    key: 3,
    label: 'Iphone ',
    link: '/iphone',
    icon: icons.IPHONE_ICON || '',
  },
  {
    key: 4,
    label: 'Màn hình',
    link: '/screen',
    icon: icons.MONITOR_ICON || '',
  },
  {
    key: 5,
    label: 'Smart TV',
    link: '/smart-tv',
    icon: icons.TV_ICON || '',
  },
  {
    key: 6,
    label: 'Tablet',
    link: '/tablet',
    icon: icons.TABLET_ICON || '',
  },
  {
    key: 7,
    label: 'Âm Thanh',
    link: '/sound',
    icon: icons.HEADPHONE_ICON || '',
  },
  {
    key: 8,
    label: 'Smart Home',
    link: '/smart-home',
    icon: icons.SMART_HOME_ICON || '',
  },
  {
    key: 9,
    label: 'Phụ Kiện',
    link: '/accessories',
    icon: icons.ACCESSORIES_ICON || '',
  },
  {
    key: 10,
    label: 'Đồ chơi CN',
    link: '/',
    icon: icons.GAMEPAD_ICON || '',
  },
  {
    key: 11,
    label: 'Sửa chữa',
    link: '/fix',
    icon: icons.FIX_ICON || '',
  },
  {
    key: 12,
    label: 'Ưu đãi',
    link: '/promotion',
    icon: icons.PROMOTION_ICON || '',
  },
];

const steps = [
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
];
