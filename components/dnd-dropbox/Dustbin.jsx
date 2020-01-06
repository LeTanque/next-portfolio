import React from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";




const Dustbin = ({ canDrop, isOver, connectDropTarget }) => {
    const isActive = canDrop && isOver;
    let backgroundColor = "#222";

    if (isActive) {
        backgroundColor = "darkgreen";
    } else if (canDrop) {
        backgroundColor = "darkkhaki";
    }
    
    return (
        <section ref={connectDropTarget}  className="section__dustbin"  style={{ backgroundColor }}>
            {isActive ? "Release to drop" : "Drag a box here"}
        </section>
    );
};


export default DropTarget(
    ItemTypes.BOX,
    {
        drop: () => ({ name: "Dustbin" })
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    })
)(Dustbin);
