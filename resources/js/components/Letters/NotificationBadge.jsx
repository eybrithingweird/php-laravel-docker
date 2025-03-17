import React from 'react';

const NotificationBadge = ({ number }) => {
	return (
		<span className="border border-orange-400 rounded-full inline-flex bg-orange-400 ml-2 text-lg px-3 py-1 font-bold text-black">{number}</span>
	);
}

export default NotificationBadge;