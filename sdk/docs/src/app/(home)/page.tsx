import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col justify-center text-center">
			<h1 className="mb-4 text-2xl font-bold">@sfpro/sdk</h1>
			<p className="text-fd-muted-foreground">
				You can open{" "}
				<Link href="/docs" className="text-fd-foreground font-semibold underline">
					/docs
				</Link>{" "}
				and see the documentation.
			</p>
		</main>
	);
}
