import React from "react";
import type { Task } from "../utils/types";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
		<div onClick={() => navigate(`/task/${task.id}`)}>
			<span>{task.text}</span>
			<span>Assigned to: {assignedToUser}</span>
			<input type="checkbox" checked={task.finished} disabled={true} />
		</div>
	);
};

export default TaskComponent;
