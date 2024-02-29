const TextInput = ({ label, placeholder, hideLabel }) => {
    const type = label === "Email" ? "email" : "text";

    return (
        <div className={`${hideLabel? 'mt-1' : 'mt-4'}`}>
            {!hideLabel && <label className="block text-gray-700">{label}</label>}
            <input 
            type={type} 
            name="" 
            id={label} 
            placeholder={placeholder} 
            className="appearance-none rounded-none relative block w-full px-3 py-2 
            border border-gray-300 placeholder-gray-500 text-gray-500 bg-white-smoke rounded-t-md 
            focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50" 
            autoComplete="email" 
            required />
        </div>
    )
}

export default TextInput;