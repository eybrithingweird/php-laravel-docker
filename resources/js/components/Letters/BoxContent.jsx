import React from 'react';

// import { useAdmin } from "../../contexts/AdminContext";
// import BoxContentExisting from './BoxContentExisting';
// import BoxContentAdd from './BoxContentAdd';
// import BoxContentFields from './BoxContentFields';
// import BoxContentOIC from './BoxContentOIC';
// import BoxContentOC from './BoxContentOC';
import { useLetters } from '../../contexts/LettersContext';
import BoxContentIncoming from './BoxContentIncoming';
import BoxContentReceived from './BoxContentReceived';
import BoxContentOutgoing from './BoxContentOutgoing';
import BoxContentWithdrawn from './BoxContentWithdrawn';
import BoxContentCancelled from './BoxContentCancelled';
import BoxContentTagged from './BoxContentTagged';


const BoxContent = () => {
	const { selectedTab } = useLetters();
	const token = document.getElementById('container').getAttribute('token');

	return (
		<>
			<div className="box-header with-border">
				<h3 className="box-title right-0">
					{
						(() => {
							switch (selectedTab) {
								case 'incoming':
									return 'Incoming Letter Requests';
								case 'received':
									return 'Received Letter Requests';
								case 'outgoing':
									return 'Outgoing Letter Requests';
								case 'withdrawn':
									return 'Withdrawn Letter Requests';
								case 'cancelled':
									return 'Cancelled Letter Requests';
								case 'tagged':
									return 'Tagged in Comments';
								default:
									return 'Select a tab to continue';
							}
						})()
					}
				</h3>
			</div>

			<div className="box-body">
				<div className="row">

					{/* <div className="col-lg-9"> */}
						{
							(() => {
								switch (selectedTab) {
									case 'incoming':
										return <div className="col-lg-12"> <BoxContentIncoming token={token} /> </div>;
									case 'received':
										return <div className="col-lg-12"> <BoxContentReceived token={token} /> </div>;
									case 'outgoing':
										return <div className="col-lg-12"> <BoxContentOutgoing token={token} /> </div>;
									case 'withdrawn':
										return <div className="col-lg-12"> <BoxContentWithdrawn token={token} /> </div>;
									case 'cancelled':
										return <div className="col-lg-12"> <BoxContentCancelled token={token} /> </div>;
									case 'tagged':
										return <div className="col-lg-12"> <BoxContentTagged token={token} /> </div>;
									default:
										return '';
								}
							})()
						}
					{/* </div> */}

					<div className="col-lg-3"></div>
				</div>
				
			</div>
		</>
	);
};

export default BoxContent;