import React from "react";

export function Tooltip(props) {
	return (
		<span 
			className=
				{`absolute z-10 
				${props.content.toLowerCase().includes('default') ? '' : 'top-12'}
				right-12 group-hover:opacity-100 opacity-0 transition-opacity bg-orange-400 p-2 text-2xl text-black rounded-md m-4 mx-auto`}>
			{props.content}
		</span>
	);
}