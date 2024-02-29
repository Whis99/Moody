const PasswordInput = ({ label, hideLabel }) => {
    const placeholder = label === 'Password' ? "Enter password" : "Confirm password";
    return (
        <div className={`${hideLabel? 'mt-1' : 'mt-4'}`}>
            {!hideLabel && <label className="block text-white-smoke">{label}</label>}
            <input 
            type="password" 
            name="password" 
            id={label} 
            placeholder={placeholder} 
            minLength="6" 
            className="appearance-none rounded-none relative block w-full px-3 py-2 
            border border-gray-300 placeholder-gray-500 text-gray-500 bg-white-smoke rounded-t-md 
            focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
            required />
        </div>
    )
}

export default PasswordInput