import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import "@/css/MainPage.css";

const MainPage: React.FC = () => {
	return (
		<>
			<TaskForm />
			<TaskList />
		</>
	);
};

export default MainPage;
