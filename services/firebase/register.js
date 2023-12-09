import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

/**
 * Takes email and password and handles registration using firebase
 * @param {string} email email of user
 * @param {string} password password of user
 * @returns {Object} Status code
 */
const register = async (email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		return {
			user: res.user,
			status: 201,
			message: 'User successfully created.',
		};
	} catch (e) {
		return {
			status: 400,
			error: e.message,
		};
	}
};

export default register;
