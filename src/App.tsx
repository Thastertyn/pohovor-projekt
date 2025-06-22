import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { TaskContextProvider } from "./contexts/TaskContextProvider";

function App() {
	return (
		<BrowserRouter>
			<UserContextProvider>
				<TaskContextProvider>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/task/:taskId" element={<TaskPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</TaskContextProvider>
			</UserContextProvider>
		</BrowserRouter>
	);
}

export default App;
