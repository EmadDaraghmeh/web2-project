import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext({
	authUser: null,
	setAuthUser: null,
	isLoggedIn: null,
	setIsLoggedIn: null,
});

export const useAuth = () => {
	return useContext(AuthContext);
};
export const AuthProvider = (props) => {
	const [authUser, setAuthUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// Save in local storage to refetch upon reloading a page
	useEffect(() => {
		if (localStorage.getItem("authUser")) {
			setAuthUser(JSON.parse(localStorage.getItem("authUser")));
		}
	}, []);

	useEffect(() => {
		if (!authUser) return;
		localStorage.setItem("authUser", JSON.stringify(authUser));
	}, [authUser]);

	useEffect(() => {
		if (!isLoggedIn) {
			localStorage.removeItem("authUser");
			setAuthUser(null);
		}
	}, [isLoggedIn]);
	const value = {
		authUser,
		setAuthUser,
		isLoggedIn,
		setIsLoggedIn,
	};

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
};
