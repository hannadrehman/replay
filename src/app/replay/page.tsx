import { Player } from "@/components/player";

export default function Replay() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
			<header className="row-start-1 flex items-center justify-center gap-4 pt-10">
				<h5 className="text-4xl font-bold text-white">Session Player</h5>
			</header>
			<main >
				<Player />
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<h1>Footer</h1>
			</footer>
		</div>
	)
}
