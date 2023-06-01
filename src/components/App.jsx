import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import  AuthProvider  from "../contexts/AuthContext";

import Chats from "./Chats";
import Login from "./Login";

function App() {
	return (
		<div style={{ fontFamily: 'Avenir' }}>
			<HashRouter>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/chats" element={<Chats />} />
					</Routes>
				</AuthProvider>
			</HashRouter>
		</div>
	)
}

export default App;