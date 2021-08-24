import React, { FC, memo, useState } from 'react';
import styled from 'styled-components';
import { layOutProps } from 'styles';

interface Props {
  title?: string;
}


export const ContensLayout: FC<Props> = memo(({ children, title }) => {
  return (
    <>
      <ContensContainer>
        <ContensTitle>{title}</ContensTitle>
        {children}
      </ContensContainer>
    </>
  );
});

const ContensContainer = styled.section<layOutProps>`
  margin: 20px 0 30px 0;
  transition: 0.3s;
`;

const ContensTitle = styled.h2<layOutProps>`
  margin: 15px 0;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s;
`;
