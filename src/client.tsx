import { createRoot } from 'react-dom/client'

import { ClerkProvider } from '@clerk/clerk-react'
import { MantineProvider } from '@mantine/core'

import { App } from './App'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) throw new Error('Missing Publishable Key')

const domNode = document.getElementById('root')!
const root = createRoot(domNode)
root.render(
	<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
		<MantineProvider>
			<App />
		</MantineProvider>
	</ClerkProvider>
)
