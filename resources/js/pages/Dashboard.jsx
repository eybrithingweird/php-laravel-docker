import React from 'react';

export default function Dashboard() {
	return (
		<>
			<section className="content-header pt-24">
				<h1>Dashboard</h1>
			</section>

			<section className="content">
				{/* <div class="box box-default">
					<div class="box-header with-border">
						Urgent Letter Requests
					</div>

					<div class="box-body">

					</div>
				</div> */}
				<div className="grid grid-rows-7">
					<div className="grid row-span-1 bg-hero-pattern bg-cover rounded-lg shadow-lg p-4">
						{/* <div className="grid grid-cols-3">Test</div> */}
						<p className="text-2xl">
							You have
						</p>
						<div className="grid grid-cols-3">
							<div className="grid col-span-2">
								<p className="text-4xl pt-2">
									4 Urgent Letter Requests
								</p>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	);
}