import React from 'react';
import { hot } from 'react-hot-loader/root';
import { PageContainer } from './styles';
import { CardList } from './containers';
import { ContensLayout, InputTextArea } from './components';

const App = () => {
  return (
    <PageContainer>
        <ContensLayout title="카드 UI (가로형)">
          <CardList type="horizontal" />
        </ContensLayout>
        <ContensLayout title="카드 UI (세로형)">
          <CardList type="vertical" />
        </ContensLayout>
       <ContensLayout title="입력 폼 UI">
        <InputTextArea type="default"/>
        <InputTextArea type="readonly"/>
        <InputTextArea type="disabled"/>
       </ContensLayout>
    </PageContainer>
  );
};

export default hot(App);