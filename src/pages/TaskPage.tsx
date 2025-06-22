import React from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../contexts/taskContext";
import { useContext } from "react";

const TaskPage: React.FC = () => {
	const { taskId } = useParams();
	const numerizedTaskId = Number(taskId);

	const { tasks } = useContext(TaskContext);

	const taskInQuestion = tasks.find((task) => task.id === numerizedTaskId);

	if (!taskInQuestion) return <div>Task not found</div>;

	return <div>Task {taskId}</div>;
};

export default TaskPage;
