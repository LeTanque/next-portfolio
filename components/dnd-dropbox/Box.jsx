import React from 'react'
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';



const Box = ({ name, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={connectDragSource}  className="block__box"  style={{ opacity }} >
      {name}
    </div>
  )
}

export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
