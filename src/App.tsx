import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { TaskContextProvider } from "./contexts/TaskContextProvider";
import { UserContextProvider } from "./contexts/UserContextProvider";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import TaskPage from "./pages/TaskPage";

function App() {
	return (
		<BrowserRouter>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<UserContextProvider>
					<TaskContextProvider>
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/task/:taskId" element={<TaskPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</TaskContextProvider>
				</UserContextProvider>
			</LocalizationProvider>
		</BrowserRouter>
	);
}

export default App;
