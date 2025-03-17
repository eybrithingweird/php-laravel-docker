import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useUser } from "./contexts/UserContext";
import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
import { Loading, Loading2 } from './components/Loading';
import { LettersProvider } from "./contexts/LettersContext";
import Letters from "./pages/Letters";

export default function RoutesDisplay() {
	const Dashboard = lazy(() => import('./pages/Dashboard'));
	// const Incoming = lazy(() => import('./pages/Incoming'));
	// const Received = lazy(() => import('./pages/Received'));
	// const Outgoing = lazy(() => import('./pages/Outgoing'));
	const Mysulat = lazy(() => import('./pages/Mysulat'));
	const Create = lazy(() => import('./pages/Create'));
	const Admin = lazy(() => import('./pages/Admin'));
	const queryClient = new QueryClient();

	const { isAdmin } = useUser();

	return (
		<BrowserRouter>
			<Sidebar />
			<Suspense 
				fallback={
					<section className="ml-[230px]"> 
						<div className="grid grid-rows-9">
							<div className="grid row-span-4"></div>
							<div className="grid row-span-1 justify-items-center mx-auto">
								<Loading type={"spin"} height={70} width={70} /> 
								<span className="mt-2">Fetching data....</span>
							</div>
							<div className="grid row-span-4"></div>
							
						</div>
						
					</section>

					//OR

					// <section className="ml-[230px]"> 
					// 	<div className="grid grid-rows-15">
					// 		<div className="grid row-span-6"></div>
					// 		<div className="grid row-span-1 justify-items-center mx-auto">
					// 			<Loading2 height={50} width={50} /> 
					// 			<span className="mt-2">Fetching data....</span>
					// 		</div>
					// 		<div className="grid row-span-8"></div>
							
					// 	</div>
						
					// </section>
					}>

				<div className="content-wrapper min-h-[90rem]"> 
					<QueryClientProvider client={queryClient}>
						<LettersProvider>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/letters/*" element={<Letters />} />
							{/* <Route path="/incoming" element={<Incoming />} /> */}
							{/* <Route path="/received" element={<Received />} /> */}
							{/* <Route path="/outgoing" element={<Outgoing />} /> */}
							<Route path="/mysulat" element={<Mysulat />} />
							<Route path="/create" element={<Create />} />
							{ isAdmin ? <Route path="/admin"  element={<Admin />} /> : '' }
						</Routes>
						</LettersProvider>
					</QueryClientProvider>
				</div>

			</Suspense>
		</BrowserRouter>
	);
};