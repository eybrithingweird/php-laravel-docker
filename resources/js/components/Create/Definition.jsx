import React, { useEffect, useRef, useState } from "react";
import { useCreate } from '../../contexts/CreateContext';

const Definition = () => {
	const { 
		definition, 
		setDefinition,
		selectedOpt,
		setSelectedOpt 
	} = useCreate();

	return (
		<table className="table table-bordered" id="description">
			<thead>
				<tr className="active">
					<th>Definition</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<textarea 
							disabled
							id="definition" 
							name="definition" 
							rows="12" 
							className="block p-2.5 w-full form-control disabled:bg-white disabled:text-black rounded-lg"
							value={
								definition === ''
									? "Select a request type to read the definition."
									: definition
							}
						>
						</textarea>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Definition;
