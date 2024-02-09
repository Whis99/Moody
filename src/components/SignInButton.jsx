const SignInButton = ({ label, handleClick }) => {
    return (
        <button type="submit" className="w-full block bg-dark-blue hover:bg-light-blue
        text-white font-semibold rounded-lg px-4 py-3 mt-6" onClick={handleClick}>
            {label}
        </button>
    )
}

export default SignInButton;