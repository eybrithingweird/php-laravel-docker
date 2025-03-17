import React, { useEffect, useState } from 'react';
import { useIncomingReceivedOutgoingMutation } from '../../hooks/useIncomingReceivedOutgoingMutation';
import { useSelectedLetter } from '../../contexts/SelectedLetterContext';
import { Loading } from '../Loading';

const ConvertToFromEdit = ({ data, type, label, additionalField, id }) => {
	// console.log(key);
	if (additionalField){
		console.log(id);
	}

	const [ defaultValue, setDefaultValue ] = useState(data);

	const { 
		selectedLetterForm, 
		setSelectedLetterForm,
		openLetterForm,
		setOpenLetterForm,
		changedValue,
		setChangedValue
	} = useSelectedLetter();

	const [ editableField, setEditableField ] = useState(false);

	const { handleSubmit, isSubmitting, success, error } = useIncomingReceivedOutgoingMutation();
	//TODO: WARNING FOR ABOVE LINE AS SAME COMPONENT IS USED IN MYSULAT(....or no?)
	//I don't think you need to have an editable field in IncomingOUtoging....

	useEffect(() => {
		if (success) { setEditableField(false); }
	}, [success]);

	return (
		<>
			<span className="grid grid-cols-12">
				{ 
					!editableField ? 
						<span className="place-content-center col-span-7"> {defaultValue} </span> :
						type === 'text' ?
							<input type="text" 
								className="form-control col-span-7" 
								defaultValue={defaultValue} 
								onChange={(e) => { setChangedValue({ [label]: e.target.value}); setDefaultValue(e.target.value); }} /> :
						type === 'file' ?
							<input type="file" 
								className="form-control col-span-7" 
								// defaultValue={defaultValue}
								onChange={(e) => { setChangedValue({ [label]: e.target.value}); setDefaultValue(e.target.value); }} /> : ''
						// type === 'checkbox' ?
						// 	<input type="checkbox" className="form-control" value={data} /> :
				}
				{ success && <i className="place-content-center bg-iit-green fa fa-check col-span-1" style={{color: 'green'}}></i> }
				{ error && <i className="place-content-center bg-iit-green fa fa-close col-span-1" style={{color: 'red'}}></i> }
				<span className={"grid grid-rows " + (success ? 'col-span-4' : error ? 'col-span-4' : 'col-span-5')}>
					{
						!editableField ? 
							<>
								<span className="grid justify-items-end">
									<button name="editBttn" className="btn btn-default" onClick={() => setEditableField(!editableField)}>
										<i className="fa fa-pencil"></i> Edit
									</button>
								</span>
							</> : 
								isSubmitting ?
									<span className="flex space-x-1 justify-end"> <Loading type={"bubbles"} height={50} width={50} /> </span> :
									<span className="flex space-x-1 justify-end">
										<button name="saveBttn" className="btn btn-success" onClick={() => handleSubmit(additionalField, id)}> {/* TODO: onClick function here */}
											<i className="fa fa-save"></i> Save
										</button>
										<button name="cancelBttn" className="btn btn-danger" onClick={() => setEditableField(!editableField)}>
											<i className="fa fa-close"></i> Cancel
										</button>
									</span>
					}
				</span>
			</span>
		</>
	);
	
};

export default ConvertToFromEdit;