import { useSession } from "next-auth/react";

import styles from "@styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
	const { data: session } = useSession();

	return (
		<main className={styles.main}>
			<h1>{session ? "You are logged in as:" : "You are not logged in"}</h1>
			<div className={styles.card}>
				{session ? (
					<img src={session?.user.image} alt="user avatar" />
				) : (
					<Image
						src="/images/placeholder_avatar.png"
						width={150}
						height={150}
					/>
				)}

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
