function IncrementButton(props) {
    console.log(props);
    return (
    <button onClick={props.addOne}>
        Increment
    </button>
  )
}

export default IncrementButton