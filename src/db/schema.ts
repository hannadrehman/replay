import { int, sqliteTable, text, index } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	age: int().notNull(),
	email: text().notNull().unique(),
});

export const events = sqliteTable('events', {
	id: int().primaryKey({ autoIncrement: true }),
	sessionId: int().notNull(),
	type: int({ mode: 'number' }),
	timestamp: int(),
	data: text()
}, (table) => {
	return {
		timestampIndex: index('timestamp_index').on(table.timestamp),
		sessionIdIndex: index('session_id_index').on(table.sessionId)
	}
})
