import { useCallback, useState } from 'react';

export const useDragAndDrop = ({ data, draggableItem, draggableNode }) => {
  const [items, setItems] = useState(data);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    draggableItem.current = null;
    draggableNode.current.removeEventListener('dragend', handleDragEnd);
    draggableNode.current = null;
  }, []);

  const handleDragStart = useCallback((e, { groupInx, itemInx }) => {
    e.stopPropagation();

    draggableNode.current = e.target;
    draggableNode.current.addEventListener('dragend', handleDragEnd);
    draggableItem.current = { groupInx, itemInx };

    setIsDragging(true);
  }, []);

  const handleOnDragEnter = useCallback((e, params) => {
    const { groupInx, itemInx } = draggableItem.current;
    e.stopPropagation();

    if (e.target !== draggableNode.current) {
      setItems(prevItems => {
        const currentItems = [...prevItems];

        if (!itemInx && !params.itemInx) {
          currentItems.splice(params.groupInx, 0, currentItems.splice(groupInx, 1)[0]);
        } else {
          currentItems[params.groupInx]?.items.splice(
            params.itemInx,
            0,
            currentItems[groupInx]?.items.splice(itemInx, 1)[0],
          );
        }
        draggableItem.current = params;

        return currentItems;
      });
    }
  }, []);

  return { items, isDragging, handleDragStart, handleOnDragEnter };
};
