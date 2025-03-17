import React, { useState, useEffect } from 'react';
import { useAdmin } from "../../contexts/AdminContext";

const HeaderTabs = () => {
	const { selectedTab, setSelectedTab } = useAdmin();

	return (
		<>
			<div className="text-2xl text-center text-gray-800 border-b">
				<ul className="flex flex-wrap -mb-px">
					<li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'add' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'add' ? "page" : "false"}
							onClick={() => setSelectedTab('add')}>
							Add New Letter Request
						</a>
					</li>
					<li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'fields' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'fields' ? "page" : "false"}
							onClick={() => setSelectedTab('fields')}>
							Edit Fields of Request Type
						</a>
					</li>
					<li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'existing' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'existing' ? "page" : "false"}
							onClick={() => setSelectedTab('existing')}>
							Add Default Channels to Request Type
						</a>
					</li>
					{/* <li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'edit' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'edit' ? "page" : "false"}
							onClick={() => setSelectedTab('edit')}>
							Edit Employee Status
						</a>
					</li> */}
					<li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'oic' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'oic' ? "page" : "false"}
							onClick={() => setSelectedTab('oic')}>
							OIC Settings
						</a>
					</li>
					<li className="me-2">
						<a href="#" 
							className={ 
								selectedTab === 'oc-staff' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'oc-staff' ? "page" : "false"}
							onClick={() => setSelectedTab('oc-staff')}>
							OC Staff Settings 
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default HeaderTabs;