function Button(props) {
    let { arr, onClick,children } = props;
    console.log(arr)
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button;
