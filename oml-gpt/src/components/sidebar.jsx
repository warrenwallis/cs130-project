export default function Sidebar({ initialUser }) {
    //const user = useUserSession(initialUser) ;

	// const handleSignOut = event => {
	// 	event.preventDefault();
	// 	signOut();
	// };

    return (
        <Link href="/" className="logo">
            <img src="/friendly-eats.svg" alt="FriendlyEats" />
            Friendly Eats
        </Link>

    )
}