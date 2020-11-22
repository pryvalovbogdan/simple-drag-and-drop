import React, { memo, useRef } from 'react';

import canada from '../../../assets/canada.svg';
import austria from '../../../assets/austria.png';
import england from '../../../assets/england.jpg';

import { Wrapper, GlobalStyles, Title } from './styledComponents';
import { DragNDrop } from './components';

export const Layout = memo(() => {
  const data = [
    {
      title: 'group 1',
      items: [
        <img src={canada} width="130px" alt="canada" />,
        <img src={austria} width="130px" alt="austria" />,
        <img src={england} width="130px" alt="england" />,
      ],
    },
    { title: 'group 2', items: ['4', '5', '6', '7', '8'] },
    { title: 'group 3', items: ['9', '10'] },
    { title: 'group 4', items: [] },
  ];

  const draggableItem = useRef(null);
  const draggableNode = useRef(null);

  return (
    <Wrapper>
      <Title>Drag & Drop</Title>
      <DragNDrop data={data} draggableItem={draggableItem} draggableNode={draggableNode} />
      <GlobalStyles />
    </Wrapper>
  );
});
