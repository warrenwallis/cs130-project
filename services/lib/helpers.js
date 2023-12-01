export const isValidEmail = (email) => {
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return regex.test(email);
};

export const isValidPassword = (password) => {
	const minLengthRegex = /.{8,}/; // At least 8 characters
	const lowercaseRegex = /[a-z]/; // At least one lowercase letter
	const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
	const numberRegex = /[0-9]/; // At least one number
	const specialCharRegex = /[!@#$%^&*]/; // At least one special character

	return (
		minLengthRegex.test(password) &&
		lowercaseRegex.test(password) &&
		uppercaseRegex.test(password) &&
		numberRegex.test(password) &&
		specialCharRegex.test(password)
	);
};

export const removeCodeBlocks = (inputString) => {
	return inputString.replace(/```sparql|```/g, '');
}


export const timeoutError = (setError, errMessage) => {
	setTimeout(() => {
		setError('');
	}, 4000);
	setError(errMessage);
};
