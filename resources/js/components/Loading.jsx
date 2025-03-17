import React from 'react';
import ReactLoading from 'react-loading';
import PulseLoader from "react-spinners/PulseLoader";
 
export function Loading (props) {
	return (
		<ReactLoading className="loading" type={props.type} color="#333" height={props.height} width={props.width} />
	);
};

export function Loading2 (props) {
	return (
		<PulseLoader
			color={'#333'}
			loading={true}
			cssOverride={ {display: "block"} }
			size={20}
			aria-label="Fetching Data...."
			data-testid="loader"
			className="flex"
      />
	);
};