import { useState } from "react";
import type { User } from "../utils/types";
import { useEffect } from "react";
import { parseUserData } from "../utils/parseResults";

export function useUsers() {
	const [users, setUsers] = useState<User[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const apiUrl: string = import.meta.env.VITE_USER_API_URL;

	useEffect(() => {
		const fetchUser = async () => {
			setLoading(true);
			try {
				const response = await fetch(apiUrl);

				if (!response.ok) {
					setError("Failed to get info about users.");
				}

				const data = parseUserData(await response.json());
				setUsers(data);
				setError(null);
			} catch(error) {
				console.error(error)
				setError("An error occurred during data fetching.");
			}
			setLoading(false);
		};

		fetchUser();
	}, []);

	return { users, loading, error };
}
