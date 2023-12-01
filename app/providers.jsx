'use client';

import { NextUIProvider } from '@nextui-org/react';
import { UserProvider } from './providers/UserProvider';

export function Providers({ children }) {
	return (
		<NextUIProvider>
			<UserProvider>{children}</UserProvider>
		</NextUIProvider>
	);
}
