import type { User } from "./types";

function safeParseUser(data: unknown): User | null {
	const requiredFields = ["id", "name", "username", "email"];

	if (typeof data !== "object" || data === null) {
		console.warn("Invalid user data:", data, " Skipping...");
		return null;
	}

	for (const field of requiredFields) {
		if (!(field in data)) {
			console.warn(`Missing field '${field}' in user data`, data);
			return null;
		}
	}

	return data as User;
}

export function parseUserData(data: unknown): User[] {
	// Slo by nahradit pomoci zod, ale v tak malem projektu je to zbytecne
	if (!Array.isArray(data)) {
		console.error("Invalid user data - not an array:", data);
		throw new Error("Invalid data - not an array");
	}

	const validData: User[] = [];

	for (const user of data) {
		const parsed = safeParseUser(user);
		if (parsed != null) validData.push(parsed);
	}

	return validData;
}
