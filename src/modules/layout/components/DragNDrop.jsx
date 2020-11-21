import React, { memo, useRef, useState, useEffect } from 'react';
import { DrugNDropGroup, DrugNDropItem, DrugNDropWrapper } from '../styledComponents';

export const DragNDrop = memo(({ data }) => {
  const [items, setItems] = useState(data);
  const [isDragging, setIsDragging] = useState(false);

  const draggableItem = useRef(null);
  const draggableNode = useRef(null);

  const handleDragStart = (e, { groupInx, itemInx }) => {
    draggableNode.current = e.target;
    draggableNode.current.addEventListener('dragend', handleDragEnd);
    draggableItem.current = { groupInx, itemInx };

    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    draggableItem.current = null;
    draggableNode.current.removeEventListener('dragend', handleDragEnd);
    draggableNode.current = null;
  };

  const handleOnDragEnter = (e, params) => {
    const { groupInx, itemInx } = draggableItem.current;

    if(e.target !== draggableNode.current){
      setItems(prevItems => {
        const currentItems = [...prevItems];

        currentItems[params.groupInx]?.items.splice(
          params.itemInx, 0, currentItems[groupInx]?.items.splice(itemInx, 1)[0]
        );
        draggableItem.current = params;

        return currentItems;
      })
    }
  };

  return (
    <DrugNDropWrapper className="drag-n-drop">
      {items.map((group, groupInx) => (
        <DrugNDropGroup
          className="dnd-group"
          key={group.title}
          onDragEnter={ isDragging && !group.items.length ?
            e => handleOnDragEnter(e,{ groupInx, itemInx: 0 }) : null
          }>
            {group.title}
            {group.items.map((item, itemInx) => (
              <DrugNDropItem
                className="dnd-item"
                draggable
                key={item}
                isDragging={ draggableItem.current?.itemInx === itemInx && draggableItem.current?.groupInx === groupInx }
                onDragStart={ e => handleDragStart(e, { groupInx, itemInx })}
                onDragEnter={ isDragging ? e => handleOnDragEnter(e, { groupInx, itemInx }) : null }
              >
                {item}
              </DrugNDropItem>
            ))}
        </DrugNDropGroup>
      ))}
    </DrugNDropWrapper>
  )
});
