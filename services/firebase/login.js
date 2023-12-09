import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

//handle login with firebase given email and password
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
