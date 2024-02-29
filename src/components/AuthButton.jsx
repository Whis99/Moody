const AuthButton = ({ label, handleClick }) => {
    return (
        <button 
            type="submit" 
            className="w-full flex justify-center py-2 
            px-4 border border-transparent rounded-md 
            bg-indigo-600 text-sm font-medium text-white 
            hover:bg-indigo-500 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-indigo-500" 
            onClick={handleClick}>
            {label}
        </button>
    )
}

export default AuthButton;