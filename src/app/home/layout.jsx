import NavigationTab from '@/src/components/NavigationTab';

const HomeLayout = async ({ children }) => {
	return (
		<>
			<NavigationTab />

			<div className='pl-40'>{children}</div>
		</>
	);
};

export default HomeLayout;
