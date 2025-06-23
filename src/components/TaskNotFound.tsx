import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const TaskNotFound: React.FC = () => {
	const { taskId } = useParams();

	const navigate = useNavigate();

	return (
		<Card>
			<CardHeader title="Not found!" />
			<CardContent>
				<Stack spacing={2}>
					<Typography>Task #{taskId} not found</Typography>
					<Button variant="outlined" onClick={() => navigate("/")}>
						Go back home
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default TaskNotFound;
