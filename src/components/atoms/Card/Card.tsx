import React, { memo } from 'react';
import styled from 'styled-components';
import { Score, Images } from '../../atoms'

interface Props {
  type: 'vertical' | 'horizontal';
  id?: number;
  title?: string;
  label?: string;
  highlight?: string;
  del?: string;
  des?: string;
  score?: number;
  src?: string;
}

export const Cards = memo<Props>(({ type, id, title, label, highlight, del, score, des, src  }) => {

  return (
    <CardContainer type={type}>
      <ImgContainer>
        {src && <Images name={title} src={src} objectFit="cover" />}
      </ImgContainer>
      <InfoContainer type={type}>
        <InfoBox>
          <TitleBox>
            {type === 'vertical' && label && <Label>{label}</Label>}
            {title && <Title type={type}>{title}</Title>}
            {type === 'horizontal' && des && <Des type={type}>{des}</Des>}
          </TitleBox>
          {type === 'vertical' &&
            <PriceBox>
              {highlight && <Highlight>{highlight}</Highlight>}
              {del && <Del>{del}</Del>}
            </PriceBox>
          }
        </InfoBox>
        <ScoreBox type={type}>
          <Score type={type} score={score} />
          {type === 'vertical' && des && <Des type={type}>{des}</Des>}
          {type === 'horizontal' && label && <Label>&nbsp;&nbsp;| {label}</Label>}
        </ScoreBox>
      </InfoContainer>
    </CardContainer>
  );
});

const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => (props.type === 'vertical' ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 200px;
  height: 100%;
  background-color: silver;
`;

const InfoContainer = styled.div<Props>`
  flex: ${props => (props.type === 'vertical' ? '1' : '2')};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  height: 100%;
`;

const InfoBox = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const TitleBox = styled.div`
  width: 100%;
  flex: 2;
`;

const PriceBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const ScoreBox = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: ${props => (props.type === 'vertical' ? 'column' : 'row')};
  align-items: ${props => (props.type === 'vertical' ? 'initial' : 'flex-end')};
  width: 100%;
  padding: 15px;
  border-top: ${props => (props.type === 'vertical' ? '1px solid #d9d9d9' : '0')};
`;

const Label = styled.p`
  color: #999;
  text-overflow: ellipsis; 
  white-space: nowrap;
  overflow: hidden;
`;

const Title = styled.strong<Props>`
  display: block;
  margin: ${props => (props.type === 'vertical' ? '10px 0' : '0 0 10px 0')};
  font-size: 15px;
  font-weight: bold;
  color: #333;
  text-overflow: ellipsis; 
  white-space: nowrap;
  overflow: hidden;
`;

const Highlight = styled.p`
  display: inline-flex;
  margin-right: 8px;
  align-items: center;
  color: red;
`;

const Del = styled.del`
  font-size: 13px;
  color: #d9d9d9;
`;

const Des = styled.p<Props>`
  margin-top: 15px;
  font-size: 13px;
  line-height: 16px;
  color: #626262;
  text-overflow: ellipsis;
  white-space:  ${props => (props.type === 'vertical' ? 'nowrap' : 'normal')};
  overflow: hidden;
`;
