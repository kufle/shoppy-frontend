import getMe from "@/actions/get-me";

export default async function Home() {
	const me = await getMe();
	console.log(me);
	return (
		<h1>HEllo World</h1>
	);
}
