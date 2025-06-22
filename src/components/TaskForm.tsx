import React from "react";
import { useForm } from "react-hook-form";
import type { Task } from "../utils/types";
import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { TaskContext } from "../contexts/taskContext";

type FormValues = {
	text: string;
	assignedTo: number;
};

const TaskForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		// formState: { errors: formErrors }
	} = useForm<FormValues>();

	const { users, loading, error } = useContext(UserContext);
	const { tasks, setTasks } = useContext(TaskContext);

	const creationDate = useRef<Date>(new Date());

	function addTask(data: FormValues) {
		const currentIdMaxId = Math.max(...tasks.map((task) => task.id)) + 1;
		const newId = Math.max(currentIdMaxId, 1);
		console.log("NEW ID: ", newId);

		const newTask: Task = {
			id: newId,
			assignedTo: Number(data.assignedTo),
			text: data.text,
			createdAt: creationDate,
			finished: false,
		};

		setTasks((prev) => [...prev, newTask]);
	}

	// TODO make a skeleton
	if (loading) return <div>Loading...</div>;

	// TODO Better error display
	if (users == null) return <div>{error}</div>;

	return (
		<form onSubmit={handleSubmit(addTask)}>
			<input {...register("text", { required: true, minLength: 2 })} />
			<select {...register("assignedTo", { required: true })}>
				{users.map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default TaskForm;
