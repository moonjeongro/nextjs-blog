import { useState } from "react";


function DragAndDrop() {

  const [state, setState] = useState("draggable")

  const dragstartHandler = () => {
    setState("dragging");
  }
  
  const dragendHandler = () => {
    setState("draggable");
  }

  return (
    <div>
      <div draggable onDragStart={dragstartHandler} onDragEnd={dragendHandler }>{state}</div>
    </div>
  )
}

export default DragAndDrop
