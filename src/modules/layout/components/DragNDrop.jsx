import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { DrugNDropGroup, DrugNDropItem, DrugNDropWrapper } from '../styledComponents';
import { useDragAndDrop } from './hooks';

const propTypes = {
  draggableItem: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  draggableNode: PropTypes.object.isRequired,
};

export const DragNDrop = memo(({ data, draggableItem, draggableNode }) => {
  const { items, handleOnDragEnter, handleDragStart, isDragging } = useDragAndDrop({
    data,
    draggableItem,
    draggableNode,
  });

  return (
    <DrugNDropWrapper className="drag-n-drop">
      {items.map((group, groupInx) => (
        <DrugNDropGroup
          className="dnd-group"
          key={group.title}
          draggable
          isDragging={draggableItem.current?.groupInx === groupInx}
          onDragStart={e => handleDragStart(e, { groupInx })}
          onDragEnter={
            isDragging && !group.items.length ? e => handleOnDragEnter(e, { groupInx }) : null
          }
        >
          {group.title}
          {group.items.map((item, itemInx) => (
            <DrugNDropItem
              className="dnd-item"
              draggable
              key={item + itemInx}
              isDragging={
                draggableItem.current?.itemInx === itemInx &&
                draggableItem.current?.groupInx === groupInx
              }
              onDragStart={e => handleDragStart(e, { groupInx, itemInx })}
              onDragEnter={isDragging ? e => handleOnDragEnter(e, { groupInx, itemInx }) : null}
            >
              {item}
            </DrugNDropItem>
          ))}
        </DrugNDropGroup>
      ))}
    </DrugNDropWrapper>
  );
});

DragNDrop.propTypes = propTypes;
