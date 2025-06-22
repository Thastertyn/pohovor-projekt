import type { Dayjs } from "dayjs";

export function validateDueDate(value: Dayjs): string | boolean {
	const selected = new Date(value.format("YYYY-MM-DD"));
	const now = new Date();
	now.setHours(0, 0, 0, 0);

	if (selected < now) return "Due date cannot be in the past";

	return true;
}
