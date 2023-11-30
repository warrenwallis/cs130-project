import { getAuth, signOut } from 'firebase/auth';

const signout = async () => {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			// Sign-out successful.
		})
		.catch((error) => {
			// An error happened.
		});
};

export default signout;
