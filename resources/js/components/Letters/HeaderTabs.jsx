import React, { useState, useEffect } from 'react';
import { useAdmin } from "../../contexts/AdminContext";
import { useLetters } from '../../contexts/LettersContext';
import NotificationBadge from './NotificationBadge';

const HeaderTabs = () => {
	const { 
		selectedTab, 
		setSelectedTab,
		
		isFetchingIncoming,
		isFetchingOutgoing,
		isFetchingReceived,
		isFetchingTagged,
		isFetchingWithdrawn,
		isFetchingCancelled,

		filteredLettersReceived,
		filteredLettersOutgoing,
		filteredLettersIncoming,
		filteredLettersWithdrawn,
		filteredLettersTagged,
		filteredLettersCancelled,
	} = useLetters();

	return (
		<>
			<div className="text-2xl text-center text-gray-800 border-b">
				<ul className="flex flex-wrap -mb-px">
					{/* <base href="/letters/" /> */}

					<li className="me-2">
						<a href="incoming/" 
							className={ 
								selectedTab === 'incoming' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'incoming' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/incoming"); setSelectedTab('incoming'); }}>
							Incoming Letter Requests { isFetchingIncoming ? '' : (<NotificationBadge number={filteredLettersIncoming.length} />) }
						</a>
					</li>
					<li className="me-2">
						<a href="received/" 
							className={ 
								selectedTab === 'received' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'received' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/received"); setSelectedTab('received'); }}>
							Received Letter Requests { isFetchingReceived ? '' : (<NotificationBadge number={filteredLettersReceived.length} />) }
						</a>
					</li>
					<li className="me-2">
						<a href="outgoing/" 
							className={ 
								selectedTab === 'outgoing' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'outgoing' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/outgoing"); setSelectedTab('outgoing'); }}>
							Outgoing Letter Requests { isFetchingOutgoing ? '' : (<NotificationBadge number={filteredLettersOutgoing.length} />) }
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
						<a href="withdrawn/" 
							className={ 
								selectedTab === 'withdrawn' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'withdrawn' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/withdrawn"); setSelectedTab('withdrawn'); }}>
							Withdrawn Letter Requests { isFetchingWithdrawn ? '' : (<NotificationBadge number={filteredLettersWithdrawn.length} />) }
						</a>
					</li>
					<li className="me-2">
						<a href="cancelled/" 
							className={ 
								selectedTab === 'cancelled' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'cancelled' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/cancelled"); setSelectedTab('cancelled'); }}>
							Cancelled Letter Requests { isFetchingCancelled ? '' : (<NotificationBadge number={filteredLettersCancelled.length} />) }
						</a>
					</li>
					<li className="me-2">
						<a href="tagged/" 
							className={ 
								selectedTab === 'tagged' 
									? "inline-block p-4 text-black border-b-2 border-iit-box bg-iit-box rounded-t-lg active"
									: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 bg-iit-gray text-stone-300 hover:text-iit-yellow"
								}
							aria-current={selectedTab === 'tagged' ? "page" : "false"}
							onClick={(e) => { e.preventDefault(); window.history.replaceState(null, null, "/letters/tagged"); setSelectedTab('tagged'); }}>
							Tagged in Comments { isFetchingTagged ? '' : (<NotificationBadge number={filteredLettersTagged.length} />) }
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default HeaderTabs;