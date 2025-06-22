import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./userContext";


export const UserContextProvider = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	const userProps = useUsers();

	if(userProps.users == null && !userProps.loading) return <div>Failed to load users</div>;

	return (
		<UserContext.Provider value={userProps}>
			{children}
		</UserContext.Provider>
	);
};
