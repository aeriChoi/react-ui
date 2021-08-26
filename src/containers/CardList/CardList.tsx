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

  useEffect(() => {
    if (type === 'vertical') setListData(VerticalListData);
    if (type === 'horizontal') setListData(HorizontalListData);
  }, [type, listData]);

  return (
    <>
       <ListContainer>
          {listData.map((item) =>
            <ListItem key={item.id} className={item.id} type={type}>
              <Cards type={type} {...item}/>
            </ListItem>
          )}
       </ListContainer>
    </>
  );
});