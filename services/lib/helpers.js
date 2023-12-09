// utility functions used commonly

/**
 * checks if email is valid
 * @param {string} email 
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return regex.test(email);
};

/**
 * checks if email is valid
 * @param {string} password 
 * @returns {boolean}
 */
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

/**
 * Removes the code blocks + other common issues with the SparQL query
 * @param {string} inputString 
 * @returns {string} the query part of inputString
 */
export const removeCodeBlocks = (inputString) => {
	inputString = inputString.replace(/```sparql|```/g, '');
	inputString = inputString.replace(/#>/g, '>');
	inputString = inputString.replace(/#[^\n]*/g, '');
	return inputString;
}

/**
 * Displays error message
 * @param {*} setError 
 * @param {*} errMessage 
 */
export const timeoutError = (setError, errMessage) => {
	setTimeout(() => {
		setError('');
	}, 4000);
	setError(errMessage);
};
