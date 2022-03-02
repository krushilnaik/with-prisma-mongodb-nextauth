import { signOut, useSession } from "next-auth/react";
import React from "react";

import styles from "@styles/Header.module.scss";

function Header() {
	const { data: session } = useSession();

	const popupCenter = (url: string, title: string) => {
		const dualScreenLeft = window.screenLeft ?? window.screenX;
		const dualScreenTop = window.screenTop ?? window.screenY;

		const width =
			window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

		const height =
			window.innerHeight ??
			document.documentElement.clientHeight ??
			screen.height;

		const systemZoom = width / window.screen.availWidth;

		const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
		const top = (height - 550) / 2 / systemZoom + dualScreenTop;

		const newWindow = window.open(
			url,
			title,
			`width=${500 / systemZoom},height=${
				550 / systemZoom
			},top=${top},left=${left}`
		);

		newWindow?.focus();
	};

	return (
		<header className={styles.header}>
			{session ? (
				<button onClick={() => signOut()}>Log out</button>
			) : (
				<button onClick={() => popupCenter("/auth/sign_in", "Sample Sign In")}>
					Log in
				</button>
			)}
		</header>
	);
}

export default Header;
