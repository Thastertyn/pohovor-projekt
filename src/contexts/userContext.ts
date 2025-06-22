import { createContext } from "react";
import type { UserProps } from "../utils/types";

export const UserContext = createContext<UserProps>({
	error: null,
	users: null,
	loading: true,
});
