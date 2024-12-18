'use client';

import { useEffect, useRef, useState } from "react";
import { getEvents } from '@/app/actions'
import { Replayer } from 'rrweb';
import Link from "next/link";

export function Player() {
	const playerRef = useRef();
	const playerNode = useRef<HTMLDivElement>(null);
	const [sessionId, setSessionId] = useState(1);

	useEffect(() => {
		const url = new URL(window?.location.href);
		const params = new URLSearchParams(url.search);
		const sessionId = Number(params.get('sessionId') || 1);
		setSessionId(sessionId);
	}, [])

	useEffect(() => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const sessionId = Number(params.get('sessionId') || 1);

		async function fetchEvents() {
			const userEvents = await getEvents(sessionId);
			playerRef.current = new Replayer(userEvents, {
				root: playerNode.current,
				showController: true,
				showDebug: true,
			});
			playerRef.current?.play();
		}

		fetchEvents();


	}, [])
	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/style.css"
			/>
			<div ref={playerNode} />

			<br />
			<br />
			<div className="flex gap-4 item-center justify-center">
				<Link href={`/replay/v2?sessionId=${sessionId}`} className="px-4 py-2 bg-red-500 text-white rounded" target="_blank" > Replay Session V2 </Link>
			</div>
		</>
	)
}
