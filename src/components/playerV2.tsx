'use client';

import { useEffect, useRef } from "react";
import { getEvents } from '@/app/actions'
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

import Link from "next/link";

export function Player() {
	const playerRef = useRef();
	const playerNode = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const sessionId = Number(params.get('sessionId') || 1);

		async function fetchEvents() {
			const userEvents = await getEvents(sessionId);
			playerRef.current = new rrwebPlayer({
				target: playerNode.current!,
				props: {
					events: userEvents,
				},
			});
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

		</>
	)
}
