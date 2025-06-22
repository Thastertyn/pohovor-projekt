import React from "react";
import type { Task } from "../utils/types";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, ListItem, Typography } from "@mui/material";

type TaskComponentProps = {
	task: Task;
};

const TaskComponent: React.FC<TaskComponentProps> = ({ task }) => {
	const { users } = useContext(UserContext);

	const navigate = useNavigate();

	let assignedToUser = "";
	if (users != null) {
		const foundUser = users.find((user) => user.id === task.assignedTo);
		assignedToUser = foundUser?.name ?? "Unknown user";
	} else {
		assignedToUser = "No users found";
	}

	return (
		<ListItem
			className={`task-list-item ${task.finished && "finished"}`}
			onClick={() => navigate(`/task/${task.id}`)}
		>
			<Grid container spacing={2} alignItems="center" width={"100%"}>
				<Grid size={4}>
					<Typography variant="body1" fontWeight="bold">
						{task.text}
					</Typography>
				</Grid>
				<Grid size={4}>
					<Typography variant="body2" color="text.secondary" align="left">
						Assigned to: {assignedToUser}
					</Typography>
				</Grid>
				<Grid size={4}>
					<Typography variant="body1" color="text.secondary">
						Due: {task.due}
					</Typography>
				</Grid>
			</Grid>
		</ListItem>
	);
};

export default TaskComponent;
