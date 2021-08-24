import React, { memo, useCallback, useEffect, useState } from 'react';
import { ListContainer, ListItem } from '../../styles';
import { Cards } from '../../components';
import { HorizontalListData, VerticalListData } from './CardListData';

interface Props {
  type: 'vertical' | 'horizontal';
}

interface ListData {
  id: string;
  label?: string;
  title?: string;
  highlight?: string;
  del?: string;
  src?: string;
  score?: number;
  des?: string;
}

export const CardList = memo<Props>(({ type }) => {
  const [listData, setListData] = useState<ListData[]>([]);

  const renderList = useCallback((type: string) => {
    if (type === undefined) {
      return null;
    };

    return (
      <>
        {
          type === 'vertical' && (
            <>
              {listData.map((item) => {
                const {id, title, label, highlight, del, score, des, src} = item;
                return (
                  <>
                    <ListItem key={id} type={type}>
                      <Cards
                        key={label}
                        type={type}
                        id={id}
                        title={title}
                        label={label}
                        highlight={highlight}
                        del={del}
                        score={score}
                        des={des}
                        src={src}
                      />
                    </ListItem>
                  </>
                )
              })}
            </>
          )
        }
        {
          type === 'horizontal' && (
            <>
              {listData.map((item) => {
                const {id, title, label, score, des, src} = item;
                return (
                  <>
                     <ListItem key={id} type={type}>
                       <Cards
                        type={type}
                        id={id}
                        title={title}
                        label={label}
                        score={score}
                        des={des}
                        src={src}
                       />
                     </ListItem>
                  </>
                )
              })}
            </>
          )
        }
      </>
    )
  }, [listData]);

  useEffect(() => {
    if (type === 'vertical') setListData(VerticalListData);
    if (type === 'horizontal') setListData(HorizontalListData);
  }, [type, listData]);

  return (
    <>
       <ListContainer key={type}>
         {renderList(type)}
       </ListContainer>
    </>
  );
});