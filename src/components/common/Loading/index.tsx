import React from 'react';
import { Spin } from 'antd';
import { StyledLoading } from './styled';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <Spin indicator={antIcon} />
    </StyledLoading>
  );
};

export default Loading;
