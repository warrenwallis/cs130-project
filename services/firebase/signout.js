import { auth } from '@/firebase';
/**
 * Signs out using firebase
 * @returns {Object} Status code
 */
const signout = async () => {
	try {
		await auth.signOut();
		console.log('Successfully signed out user.');
	} catch (e) {
		console.log('Error with signing out user.');
		return {
			status: 400,
			error: e.message,
		};
	}
};

export default signout;
