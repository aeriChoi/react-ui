import React, { memo } from 'react';
import styled from 'styled-components';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  name?: string;
  objectFit?: string;
}

export const Images = memo<ImageProps>(({ name, src, objectFit }) => {
  return (
    <>
      <Img key={name} src={src} alt={name} aria-label={`${name} 이미지`} objectFit={objectFit} />
    </>
  );
});

const Img = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${props => (props.objectFit ? `${props.objectFit}` : 'contain')};
`;
