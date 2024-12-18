'use server'

import { events } from '@/db/schema';
import { db } from '../db/connection';
import { eq, asc } from 'drizzle-orm';

export type Event = {
	sessionId: number;
	type: number;
	data: string;
	timestamp: number;
}

export async function save(userEvents: Event[]) {
	if (userEvents.length === 0) {
		return {}
	}

	try {
		const [returning] = await db.insert(events).values(userEvents).returning();
		return returning

	} catch (e) {
		console.log('log error', e)
	}
}

export async function getEvents(id: number) {
	const userEvents = await db.select().from(events).where(eq(events.sessionId, id)).orderBy(asc(events.timestamp));

	return userEvents.map(event => {
		return {
			type: event.type,
			timestamp: event.timestamp,
			data: JSON.parse(event.data || '{}')
		}
	});
}
