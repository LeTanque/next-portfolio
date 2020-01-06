import React from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
import DraggableBox from "./DraggableBox";
import snapToGrid from "./SnapToGrid";
import update from "immutability-helper";



class Container extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            boxes: {
                a: { top: 40, left: 250, rotation: 0, title: "Lakeside Herbal", slug:"lakeside", image: "/static/project/lakeside-logo-dark(1080x1080).png" },
                b: { top: 320, left: 180, rotation: -23, title: "Lambda Notes", slug:"lambdanotes", image: "/static/project/lambdanotes-screenshot.png" },
                c: { top: 100, left: 450, rotation: -10, title: "Triple C", slug:"triplec", image: "/static/project/triplec-screenshot.png" },
                d: { top: 130, left: 20, rotation: 12, title: "Magic cards", slug:"magical", image: "/static/project/magical-screenshot.png" },
            }
        };
    }
    
    render() {
        const { connectDropTarget } = this.props;
        const { boxes } = this.state;

        return connectDropTarget(
            <main className="main__drag-layer-container">
                {Object.keys(boxes).map(key => this.renderBox(boxes[key], key))}
            </main>
        );
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    moveBox(id, left, top) {
        this.setState(
            update(this.state, {
                boxes: {
                    [id]: {
                        $merge: { left, top },
                        rotation: { $set: this.getRandomInt(-25, 25) }
                    }
                }
            })
        );
    }
    renderBox(item, key) {
        return <DraggableBox key={key} id={key} {...item} />;
    }
}

export default DropTarget(
    ItemTypes.BOX,
    {
        drop(props, monitor, component) {
            if (!component) {
                return;
            }
            const delta = monitor.getDifferenceFromInitialOffset();
            const item = monitor.getItem();
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if (props.snapToGrid) {
                [left, top] = snapToGrid(left, top);
            }
            component.moveBox(item.id, left, top);
        }
    },
    connect => ({
        connectDropTarget: connect.dropTarget()
    })
)(Container);
