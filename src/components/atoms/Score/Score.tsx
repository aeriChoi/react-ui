import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  id?: string;
  score?: number;
  type?: string;
}

interface ItemProps {
  state?: string;
}

export const Score = memo<Props>(({ id = '', score = 0, type}) => {
  const scoreId = `${id}-${score}`;
  return (
    <ScoreWrap>
      {['score1', 'score2', 'score3', 'score4', 'score5'].map((i, index) =>
        <>
          {score !== 0 && index < score ? <ScoreItem key={`${i}-${id}-active`} state='active' /> : <ScoreItem key={`${i}-${id}`} />}
        </>
      )}
    </ScoreWrap>
  );
});

const ScoreWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ScoreItem = styled.p<ItemProps>`
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: ${props => (props.state === 'active' ? '#ffc801' : '#999')};
  border-radius: 100%;
`;