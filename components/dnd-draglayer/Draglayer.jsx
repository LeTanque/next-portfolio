import Container from "./Container";
import CustomDragLayer from "./CustomDragLayer";



const DragLayer = () => {

    return (
        <section className="section__drag-layer">
            <Container snapToGrid={false} />
            <CustomDragLayer snapToGrid={false} />
        </section>
    );
};


export default DragLayer;

