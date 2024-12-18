'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";

export function Header() {
	const [sessionId, setSessionId] = useState(1);

	useEffect(() => {
		const url = new URL(window?.location.href);
		const params = new URLSearchParams(url.search);
		const sessionId = Number(params.get('sessionId') || 1);
		setSessionId(sessionId);

	}, [])

	return (
		<header className="row-start-1 flex items-center justify-between gap-4 w-full">
			<h1 className="text-4xl font-bold text-white">Session Recorder</h1>
			<Link href={`/replay?sessionId=${sessionId}`} className="px-4 py-2 bg-blue-500 text-white rounded" target="_blank" > Replay Session </Link>
		</header>

	)
}
