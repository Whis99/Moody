const TextInput = ({ label, placeholder, hideLabel }) => {
    const type = label === "Email" ? "email" : "text";

    return (
        <div className={`${hideLabel? 'mt-1' : 'mt-4'}`}>
            {!hideLabel && <label className="block text-gray-700">{label}</label>}
            <input type={type} name="" id={label} placeholder={placeholder} 
            className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-grey 
            focus:bg-white focus:outline-none block" autoComplete required />
        </div>
    )
}

export default TextInput;