import React, { useState, useEffect } from 'react';

import { AdminProvider } from '../contexts/AdminContext';
import HeaderTabs from '../components/Admin/HeaderTabs';
import BoxContent from '../components/Admin/BoxContent';

export default function Admin() {

	// console.log(props.errors);

	return (
		<>
			<AdminProvider>
				<section className="content-header pt-24">
					<h1>Admin Dashboard</h1>
				</section>

				<section className="content">

					<HeaderTabs />

					<div className="box box-default">
						
						<BoxContent />

					</div>
				</section>
			</AdminProvider>
		</>
	);
}