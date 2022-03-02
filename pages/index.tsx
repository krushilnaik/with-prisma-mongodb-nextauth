import { useSession } from "next-auth/react";

import styles from "@styles/Home.module.scss";

export default function Home() {
	const { data: session } = useSession();

	return (
		<main className={styles.main}>
			<h1>{session ? "You are logged in as:" : "You are not logged in"}</h1>
			<div className={styles.card}>
				<img
					src={session?.user.image ?? "images/placeholder_avatar.png"}
					alt="user avatar"
				/>

				<div>
					<div className={styles.name}>
						{session?.user.name ?? "------------"}
					</div>
					<div className={styles.email}>
						{session?.user.email ?? "------------"}
					</div>
				</div>
			</div>
		</main>
	);
}
