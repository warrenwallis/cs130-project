import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

/**
 * Takes email and password and handles login using firebase
 * @param {string} email email of user
 * @param {string} password password of user
 * @returns {Object} Status code
 */
const login = async (email, password) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		return {
			user: res.user,
			status: 204,
			message: 'User successfully logged in.',
		};
	} catch (e) {
		return {
			status: 400,
			error: e.message,
		};
	}
};

export default login;
