import React from "react";
import { TaskContext } from "./taskContext";
import type { Task } from "../utils/types";
import { useState } from "react";


export const TaskContextProvider = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	return (
		<TaskContext.Provider value={{tasks: tasks, setTasks: setTasks}}>
			{children}
		</TaskContext.Provider>
	);
};
