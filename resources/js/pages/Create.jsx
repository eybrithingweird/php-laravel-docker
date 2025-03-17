import React, { useState, useEffect } from 'react';
import { CreateProvider } from '../contexts/CreateContext';
import Definition from '../components/Create/Definition';
import LetterForm from '../components/Create/LetterForm';

export default function Create() {

	const token = document.getElementById('container').getAttribute('token');
	
	return (
		<>
			<CreateProvider>
				<section className="content-header pt-24">
					<h1>Create Letter Request</h1>
				</section>

				<section className="content">
					<div className="box box-default">
						<div className="box-header with-border">
							<h3 className="box-title">New Letter Request</h3>
							{/* <span className="pull-right">
								<button name="backBtn" className="btn btn-default">
									<i className="fa fa-arrow-left"></i> Back
									{/* TODO: Please don't forget onClick function here
									TODO: Do we remove this????
								</button>
							</span> */}
						</div>

						<div className="box-body">
							<div className="row">
								<div className="col-lg-9">
									<LetterForm	token={token} />
								</div>
								<div className="col-lg-3">
									<Definition />
								</div>
							</div>
						</div>
					</div>
				</section>
			</CreateProvider>
		</>
	);
}