import React, { useContext } from "react";
import TaskComponent from "./Task";
import { TaskContext } from "../contexts/taskContext";
import { Card, List } from "@mui/material";

const TaskList: React.FC = () => {
	const { tasks } = useContext(TaskContext);

	return (
		<div className="task-list">
			<Card>
				{tasks.length === 0 ? (
					<p>No tasks yet...</p>
				) : (
					<List>
						{tasks.map((task, index) => (
							<TaskComponent key={index} task={task} />
						))}
					</List>
				)}
			</Card>
		</div>
	);
};

export default TaskList;
