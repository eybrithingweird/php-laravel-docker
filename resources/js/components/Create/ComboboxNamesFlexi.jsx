import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { useAdmin } from "../../contexts/AdminContext";
import { Field } from "@headlessui/react";
import { useCreate } from "../../contexts/CreateContext";

const ComboboxNamesFlexi = ({
	data,
	type,
}) => {
	const [selectedEmployee, setSelectedEmployee] = useState('');
	const [selectedOffice, setSelectedOffice] = useState('');
	const [selectedOption, setSelectedOption] = 
		useState(type === 'employee/office' ? 'Start typing or select an employee...' : 'Start typing or select a college (send to all department heads)...');
	const [query, setQuery] = useState('');

	const filteredOptions =
		query === ''
			? data
			: data.filter((section) => {
				if (type === 'employee/office') {
					return (section.last_name.toLowerCase().includes(query.toLowerCase()) 
						|| section.first_name.toLowerCase().includes(query.toLowerCase()))
						|| section.office.address.toLowerCase().includes(query.toLowerCase())
						|| section.office.initials.toLowerCase().includes(query.toLowerCase());
				}
				else {
					return section.address.toLowerCase().includes(query.toLowerCase());
				}
			});	

	useEffect(() => {
		if (selectedEmployee !== '') {
			setSelectedOption(selectedEmployee);
		}
	}, [selectedEmployee]);

	useEffect(() => {
		if (selectedOffice !== '') {
			setSelectedOption(selectedOffice);
		}
	}, [selectedOffice]);

	return (
		<>
			<ComboboxMain 
				type={type}
				filteredOptions={filteredOptions}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				setSelectedOpt={null}
				query={query}
				setQuery={setQuery}
				setSelectedOffice={type === 'office' ? setSelectedOffice : null}
				setSelectedDesignation={null}
				setSelectedEmployee={type === 'employee/office' ? setSelectedEmployee : setSelectedEmployee}
				setSelectedField={null}
				id={type === 'office' ? 'officeComboFlexi' : 'employeeOfficeComboFlexi'}
			/>
		</>
	);
};

export default ComboboxNamesFlexi;
