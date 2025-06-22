import React from "react";
import { Controller, useForm } from "react-hook-form";
import type { Task } from "../utils/types";
import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { TaskContext } from "../contexts/taskContext";
import {
	Autocomplete,
	Button,
	Card,
	CardHeader,
	TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { validateDueDate } from "../utils/validation";
import type { Dayjs } from "dayjs";

type FormValues = {
	text: string;
	assignedTo: number;
	dueDate: Dayjs;
};

const TaskForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors: formErrors },
	} = useForm<FormValues>();

	const { users, loading, error } = useContext(UserContext);
	const { tasks, setTasks } = useContext(TaskContext);

	const creationDate = useRef<Date>(new Date());

	function addTask(data: FormValues) {
		const currentIdMaxId = Math.max(...tasks.map((task) => task.id)) + 1;
		const newId = Math.max(currentIdMaxId, 1);

		const newTask: Task = {
			id: newId,
			assignedTo: Number(data.assignedTo),
			due: data.dueDate.format("YYYY-MM-DD"),
			text: data.text,
			createdAt: creationDate,
			finished: false,
		};

		setTasks((prev) => [...prev, newTask]);
		reset();
	}

	// TODO make a skeleton
	if (loading) return <div>Loading...</div>;

	// TODO Better error display
	if (users == null) return <div>{error}</div>;

	return (
		<Card>
			<CardHeader title="Create new task" />
			<form className="task-form" onSubmit={handleSubmit(addTask)}>
				<TextField
					id="outlined-basic"
					label="Task text"
					variant="outlined"
					error={!!formErrors.text}
					helperText={formErrors.text?.message}
					{...register("text", {
						required: "Task text is required",
						minLength: {
							value: 2,
							message: "Must be at least 2 characters",
						},
					})}
				/>

				<Controller
					name="assignedTo"
					control={control}
					rules={{ required: "Assignee is required" }}
					render={({ field }) => (
						<Autocomplete
							disablePortal
							options={users.map((user) => ({
								label: user.name,
								id: user.id,
							}))}
							getOptionLabel={(option) => option.label}
							onChange={(_, data) => field.onChange(data?.id || "")}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Assign To"
									error={!!formErrors.assignedTo}
									helperText={formErrors.assignedTo?.message}
								/>
							)}
						/>
					)}
				/>
				<Controller
					name="dueDate"
					control={control}
					rules={{
						required: "Due date is required",
						validate: validateDueDate,
					}}
					render={({ field }) => (
						<DatePicker
							label="Due Date"
							onChange={(date) => field.onChange(date)}
							slotProps={{
								textField: {
									fullWidth: true,
									error: !!formErrors.dueDate,
									helperText: formErrors.dueDate?.message,
								},
							}}
						/>
					)}
				/>

				<Button type="submit" variant="outlined">
					Add
				</Button>
			</form>
		</Card>
	);
};

export default TaskForm;
