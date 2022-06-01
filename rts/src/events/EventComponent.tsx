const EventComponent: React.FC = () => {
    // to place event change for typescript for inference
    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(event)
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement> ) => {
        console.log(event)
    }
    return (
        <>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart} >Drag Me!</div>
    </>
    )

}

export default EventComponent