import { createContext } from "react";
import type { TaskProps } from "../utils/types";

export const TaskContext = createContext<TaskProps>({
	tasks: [],
	setTasks: () => {}
});
