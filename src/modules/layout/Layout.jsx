import React, { memo }  from 'react';
import {
  Wrapper,
  GlobalStyles,
  Title,
} from './styledComponents';
import { DragNDrop } from './components';

export const Layout = memo(() => {
  const data = [
    { title: 'group 1', items: ['1', '2', '3'] },
    { title: 'group 2', items: ['4', '5', '6', '7', '8'] },
    { title: 'group 3', items: [] },
  ];

  return (
    <Wrapper>
      <Title>
        Drag & Drop
      </Title>
      <DragNDrop data={data} />
      <GlobalStyles />
    </Wrapper>
  )
});


