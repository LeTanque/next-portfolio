import React from "react";
import { DragLayer } from "react-dnd";
import ItemTypes from "./ItemTypes";
import BoxDragPreview from "./BoxDragPreview";
import snapToGrid from "./SnapToGrid";

function getItemStyles(props) {
    const { initialOffset, currentOffset } = props;
    if (!initialOffset || !currentOffset) {
        return {
            display: "none"
        };
    }
    let { x, y } = currentOffset;
    if (props.snapToGrid) {
        x -= initialOffset.x;
        y -= initialOffset.y;
        [x, y] = snapToGrid(x, y);
        x += initialOffset.x;
        y += initialOffset.y;
    }
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform
    };
}

const CustomDragLayer = props => {
    const { item, itemType, isDragging } = props;

    const renderItem = () => {
        switch (itemType) {
            case ItemTypes.BOX:
                return <BoxDragPreview title={item.title} image={item.image} />;
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    return (
        <section className="section__custom-drag-layer">
            <div style={getItemStyles(props)}>{renderItem()}</div>
        </section>
    );
};

export default DragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
}))(CustomDragLayer);
