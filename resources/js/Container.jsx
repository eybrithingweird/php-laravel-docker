// import { React, Suspense } from 'react';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// import { Loading, Loading2 } from './components/loading';
// import { Loading, Loading2 } from './components/Loading';
import Loading from './components/Loading';
// import { Suspense } from 'vue';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './contexts/UserContext';
import { SelectedLetterProvider } from './contexts/SelectedLetterContext';
import RoutesDisplay from './RoutesDisplay';

export default function Container() {
	return (
		<>
			<UserProvider>
				<React.StrictMode>
					<RoutesDisplay />
				</React.StrictMode>
			</UserProvider>
		</>
	);
}

if (document.getElementById('container')) {
	const containerDOM = ReactDOM.createRoot(document.getElementById("container"));
	// const dataRes = [];
	// const dataRes = document.getElementById('container').getAttribute('dataRes');
	// console.log(dataRes);
	const token = document.getElementById('container').getAttribute('token');
	containerDOM.render(<Container token={token} />);
}

export function PDFPreviewContainer(props) {
	const PDFPreview = lazy(() => import('./components/PDFPreview'));

	const queryClient = new QueryClient();

	return (
		// <>
		// 	<PDFPreview />
		// </>
		// <Route path="/pdf-preview"  element={<SelectedLetterProvider><PDFPreview /></SelectedLetterProvider>} />
		<UserProvider>
			<React.StrictMode>
				<BrowserRouter>
					<Suspense 
						fallback={
								<section className="m-auto"> 
									<div className="grid grid-rows-9">
										<div className="grid row-span-4"></div>
										<div className="grid row-span-1 justify-items-center mx-auto">
											<Loading type={"spin"} height={70} width={70} /> 
											<span className="mt-2">Fetching data....</span>
										</div>
										<div className="grid row-span-4"></div>
										
									</div>
									
								</section>
							}>

						<div className=""> 
							<QueryClientProvider client={queryClient}>
								<Routes>
									<Route path="/pdf-preview/*"  element={<PDFPreview />} />
								</Routes>
							</QueryClientProvider>
						</div>
					</Suspense>
				</BrowserRouter>
			</React.StrictMode>
		</UserProvider>
	);
}

if (document.getElementById('pdfpreview')) {
	const previewDOM = ReactDOM.createRoot(document.getElementById("pdfpreview"));
	// const dataRes = [];
	// const dataRes = document.getElementById('container').getAttribute('dataRes');
	// console.log(dataRes);
	const token = document.getElementById('pdfpreview').getAttribute('token');
	previewDOM.render(<PDFPreviewContainer token={token} />);
}