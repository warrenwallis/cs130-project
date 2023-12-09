import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

//handle registration with firebase given email and password
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
