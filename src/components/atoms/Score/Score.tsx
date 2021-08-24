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

  const renderScore = useCallback((id: string, score: number) => {
    return (
      <>
        {[...Array(5)].map((i, index) => {
          const scoreId = `score${index}-${id}`;
          return (
            <>
              {score !== 0 && index < score ? <ScoreItem key={scoreId} state='active' /> : <ScoreItem key={id} />}
            </>
          )
        })}
      </>
    )
  }, []);

  return (
    <ScoreWrap>
      {renderScore(id, score)}
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