import { NextResponse } from 'next/server';

const safePaths = ['/'];

export const middleware = async (req) => {
	const destinationPath = req.nextUrl.pathname;
	const destinationPathArray = destinationPath.split('/').splice(1);

	return NextResponse.next();

	// // get current user's session
	// const session = await getSession();
	// const user = session?.user;

	// // if logged out
	// if (!user) {
	// 	// if going to safe path, proceed
	// 	if (safePaths.includes(destinationPath)) return NextResponse.next();
	// 	// if going to sensitive path, go back to home
	// 	else return NextResponse.redirect(new URL('/', req.nextUrl.origin));
	// }
	// // if logged in
	// else {
	// 	// get correct management console account id for user
	// 	const { management_account_id } = user;
	// 	const correctManagementConsole = destinationPathArray[0] === management_account_id;

	// 	// if going to correct console, go there
	// 	if (correctManagementConsole) {
	// 		return NextResponse.next();
	// 	}
	// 	// if not, go to correct console
	// 	else {
	// 		return NextResponse.redirect(new URL(`/${management_account_id}/dashboard`, req.nextUrl.origin));
	// 	}
	// }
};

export const config = {
	// only runs for actual routes, not fetching routes
	matcher: ['/((?!api|_next/static|_next/image|icon.ico).*)'],
};
