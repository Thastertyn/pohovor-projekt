import React, { useContext } from "react";
import TaskComponent from "./Task";
import { TaskContext } from "../contexts/taskContext";

const TaskList: React.FC = () => {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) return <div>No tasks yet...</div>;

	return tasks.map((task, index) => (
		<div key={index}>
			<TaskComponent task={task} />
		</div>
	));
};

export default TaskList;
