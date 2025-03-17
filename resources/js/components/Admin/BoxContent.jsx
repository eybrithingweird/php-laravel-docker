import React from 'react';

import { useAdmin } from "../../contexts/AdminContext";
import BoxContentExisting from './BoxContentExisting';
import BoxContentAdd from './BoxContentAdd';
import BoxContentFields from './BoxContentFields';
import BoxContentOIC from './BoxContentOIC';
import BoxContentOC from './BoxContentOC';


const BoxContent = () => {
	const { selectedTab } = useAdmin();
	return (
		<>
			<div className="box-header with-border">
				<h3 className="box-title right-0">
					{
						(() => {
							switch (selectedTab) {
								case 'add':
									return 'Add New Letter Request Type';
								case 'fields':
									return 'Edit Fields of Request Type';
								case 'existing':
									return 'Add Default Channels to Request Type';
								// case 'edit':
								// 	return 'Edit Employee Status'; //TODO: Add when employee table is constructed
								case 'oic':
									return 'OIC Settings';
								case 'oc-staff':
									return 'OC Staff Settings';
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
									case 'add':
										return <div className="col-lg-9"> <BoxContentAdd /> </div>;
									case 'fields':
										return <div className="col-lg-9"> <BoxContentFields /> </div>;
									case 'existing':
										return <div className="col-lg-9"> <BoxContentExisting /> </div>;
									// case 'edit':
									// 	return 'Edit Employee Status'; //TODO: Add when employee table is constructed
									case 'oic':
										return <div className="col-lg-9"> <BoxContentOIC /> </div>;
									case 'oc-staff':
										return <div className="col-lg-9"> <BoxContentOC /> </div>;
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