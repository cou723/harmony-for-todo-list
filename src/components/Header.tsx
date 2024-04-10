import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { Container, Group } from '@mantine/core'

export function Header() {
	return (
		<header>
			<Container size="md">
				{/* <MantineLogo size={28} /> */}
				<Group gap={5} visibleFrom="xs">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</Group>
			</Container>
		</header>
	)
}

export default Header
