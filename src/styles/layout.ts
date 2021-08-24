import styled, { css } from 'styled-components';

export interface layOutProps {
  type?: 'vertical' | 'horizontal';
  className?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  padding?: string
  margin?: string;
  height?: any;
}

export const PageContainer = styled.section<layOutProps>`
  width: 1100px;
  box-sizing: border-box;
  padding: 50px 0;
  margin: 0 auto;
  transition: 0.5s;
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-content: stretch;
  margin: 0;
  transition: 0.5s;
`;

export const ListItem = styled.li<layOutProps>`
  flex: 1;
  height: ${props => (props.type === 'vertical' ? '460px' : '200px')};;
  margin: 8px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
`;

export const FlexContainer = styled.div<layOutProps>`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? `${props.flexDirection}` : 'row')};
  align-items: ${props => (props.alignItems ? `${props.alignItems}` : 'center')};
  justify-content: ${props => (props.justifyContent ? `${props.justifyContent}` : 'flex-start')};
  flex-wrap: ${props => (props.flexWrap ? `${props.flexWrap}` : 'nowrap')};
  margin: ${props => (props.margin ? `${props.margin}` : '0')};
  ${props =>
  props.flexWrap &&
  css`
      align-content: stretch;
    `};
`;
