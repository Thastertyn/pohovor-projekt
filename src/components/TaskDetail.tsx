import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../contexts/taskContext";
import { useContext } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { UserContext } from "../contexts/userContext";
import type { User } from "../utils/types";

const TaskDetail: React.FC = () => {
	const navigate = useNavigate();

	const { taskId } = useParams();

	const { tasks, setTasks } = useContext(TaskContext);
	const { users, loading } = useContext(UserContext);

	const numerizedTaskId = Number(taskId);

	const taskInQuestion = tasks.find((task) => task.id === numerizedTaskId);

	if (!taskInQuestion) return <div>Task not found</div>;

	let userInQuestion: User | undefined;
	if (users && !loading) {
		userInQuestion = users.find(
			(user) => user.id === taskInQuestion?.assignedTo,
		);
	}

	function markFinished() {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				// @ts-expect-error The function is called after the check. It's safe to assume taskInQuestion is not undefined
				task.id === taskInQuestion.id
					? { ...task, finished: !task.finished }
					: task,
			),
		);
		navigate(-1);
	}

	return (
		<Card>
			<CardHeader title={`Task #${taskInQuestion.id}`} />
			<CardContent>
				<Stack spacing={2}>
					<Typography variant="subtitle1" color="text.primary">
						{taskInQuestion.text}
					</Typography>

					<Divider />

					<Typography variant="body2" color="text.secondary" align="left">
						<b>Assigned to:</b>{" "}
						{userInQuestion
							? `${userInQuestion.name} <${userInQuestion.email}>`
							: "Unknown user"}
					</Typography>

					<Typography variant="body2" color="text.secondary" align="left">
						<b>Due date:</b> {taskInQuestion.due}
					</Typography>

					<Typography variant="body2" color="text.secondary" align="left">
						<b>Created at:</b>{" "}
						{taskInQuestion.createdAt.current.toLocaleString()}
					</Typography>

					<Divider />

					<Stack
						direction="row"
						spacing={2}
						justifyContent="space-between"
					>
						<Button variant="outlined" onClick={() => navigate(-1)}>
							Go back
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={markFinished}
						>
							{!taskInQuestion.finished ? "Mark finished" : "Undo"}
						</Button>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default TaskDetail;
