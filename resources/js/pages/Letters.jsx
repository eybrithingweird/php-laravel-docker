import React from 'react';
// import { IncomingProvider } from '../contexts/IncomingContext';
// import TableResults from '../components/IncomingOutgoing/IncomingTable';
// import IncomingTable from '../components/IncomingOutgoing/IncomingTable';
// import IncomingContents from '../components/IncomingReceivedOutgoing/IncomingContents';
import { LettersProvider } from '../contexts/LettersContext';
import HeaderTabs from '../components/Letters/HeaderTabs';
import BoxContent from '../components/Letters/BoxContent';

export default function Letters() {

	return (
		<>
			<LettersProvider>
				<section className="content-header pt-24">
					<h1>All Letter Requests</h1>
				</section>

				<section className="content">

					<HeaderTabs />

					<div className="box box-default">

						<BoxContent />

					</div>
				</section>
			</LettersProvider>
		</>
	);
}