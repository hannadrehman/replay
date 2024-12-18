'use client';

import { useEffect, useRef } from "react";
import { Demo } from "./demo";
import { Monaco } from "./monaco";
import { record, } from 'rrweb';
import { save } from '@/app/actions'
import type { Event } from '@/app/actions';


export function Recorder() {

	const eventsRef = useRef<Event[]>([])

	useEffect(() => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const sessionId = Number(params.get('sessionId') || 1);

		const stopRecording = record({
			emit(event) {
				eventsRef.current.push(
					{
						...event,
						data: JSON.stringify(event.data),
						sessionId,
					}
				);
			},
		});

		const interval = setInterval(() => {
			const copy = eventsRef.current;
			eventsRef.current = []
			save(copy);
		}, 5 * 1000)

		return () => {
			stopRecording?.()
			clearInterval(interval);
		}
	}, [])
	return (
		<div className="flex gap-4">
			<Demo />
			<Monaco />
		</div>

	)
}
