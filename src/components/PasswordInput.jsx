const PasswordInput = ({ label, hideLabel }) => {
    const placeholder = label === 'Password' ? "Enter password" : "Confirm password";
    return (
        <div className={`${hideLabel? 'mt-1' : 'mt-4'}`}>
            {!hideLabel && <label className="block text-white-smoke">{label}</label>}
            <input type="password" name="password" id={label} placeholder={placeholder} minLength="6" 
            className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-grey 
            focus:bg-white focus:outline-none" required />
        </div>
    )
}

export default PasswordInput