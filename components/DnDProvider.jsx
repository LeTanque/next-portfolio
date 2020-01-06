import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

// Dnd drop box
// import Dropbox from "./dnd-dropbox/Dropbox";

// Dnd drag layer
import DragLayer from "./dnd-draglayer/Draglayer";


const DnDProvider = () => (
    
    <section className="section__dnd-body" >
        <DndProvider backend={Backend}>
            {/* <Dropbox /> */}

            <DragLayer />
            
        </DndProvider>
    </section>
);



export default DnDProvider;

