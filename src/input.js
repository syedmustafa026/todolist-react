function Input({ type, placeholder,onChange,value }) {
    return (
        <input value={value} onChange={onChange} type={type} placeholder={placeholder} />
    )
}

export default Input;