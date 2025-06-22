export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

export type Task = {
	id: number;
	finished: boolean;
	assignedTo: number; // User ID
	createdAt: React.RefObject<Date>;
	due: string;
	text: string;
};

export type UserProps = {
	users: User[] | null;
	loading: boolean;
	error: string | null;
};

export type TaskProps = {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
