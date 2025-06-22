import React, { useContext } from "react";
import TaskComponent from "./Task";
import { TaskContext } from "../contexts/taskContext";
import { Card, List } from "@mui/material";

const TaskList: React.FC = () => {
	const { tasks } = useContext(TaskContext);

	// show unfinished tasks later and those with closer due date higher
	const sortedTasks = tasks.sort((a, b) => {
		if (a.finished == b.finished) {
			if (a.due === b.due) return 0;
			return a.due < b.due ? -1 : 1;
		}
		return a.finished ? 1 : -1;
	});

	return (
		<div className="task-list">
			<Card>
				{tasks.length === 0 ? (
					<p>No tasks yet...</p>
				) : (
					<List>
						{sortedTasks.map((task, index) => (
							<TaskComponent key={index} task={task} />
						))}
					</List>
				)}
			</Card>
		</div>
	);
};

export default TaskList;
