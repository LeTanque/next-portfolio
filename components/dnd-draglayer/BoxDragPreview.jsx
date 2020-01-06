import React, { useState, useEffect } from "react";
import Box from "./Box";



const BoxDragPreview = ({ image, title }) => {
    const [tickTock, setTickTock] = useState(false);

    useEffect(
        function subscribeToIntervalTick() {
            const interval = setInterval(() => {
                setTickTock(!tickTock);
            }, 300);
            return () => clearInterval(interval);
        },
        [tickTock]
    );

    return (
        <div className="block__box-drag-preview" >
            <Box title={title} yellow={tickTock} image={image} />
        </div>
    );
};

export default BoxDragPreview;
