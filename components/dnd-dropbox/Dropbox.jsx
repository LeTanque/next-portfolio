import Dustbin from "./Dustbin";
import Box from "./Box";


const Dropbox = () => (
    <>
        <div className="block__boxes">
            <Box name="Drag me!" />
            <Box name="Drag me, too!" />
            <Box name="Drag me, baby!!" />
        </div>
        <Dustbin />
    </>
);



export default Dropbox

