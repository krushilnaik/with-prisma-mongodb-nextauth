import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

import styles from "@styles/Header.module.scss";

interface Props {}

function Header(props: Props) {
	const {} = props;
	const { data: session } = useSession();

	return (
		<header className={styles.header}>
			{session ? (
				<button onClick={() => signOut()}>Log out</button>
			) : (
				<button onClick={() => signIn()}>Log in</button>
			)}
		</header>
	);
}

export default Header;
