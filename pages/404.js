import Link from "next";

export default function Custom404() {
	return (
		<>
			<h1>404 - Page Not Found</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
		</>
	);
}
