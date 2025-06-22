import "@/css/MainPage.css";

import React from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const MainPage: React.FC = () => {
	return (
		<>
			<TaskForm />
			<TaskList />
		</>
	);
};

export default MainPage;
