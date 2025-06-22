import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./userContext";


export const UserContextProvider = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	const userProps = useUsers();

	return (
		<UserContext.Provider value={userProps}>
			{children}
		</UserContext.Provider>
	);
};
