import React, { useEffect, useRef, useState } from "react";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

// TODO IN THE FUTURE: Add a way for the user to clear the selected option

const ComboboxMain = ({
	type,
	filteredOptions,
	selectedOption,
	setSelectedOption,
	query,
	setQuery,

	setSelectedRequestType,
	setSelectedOffice,
	setSelectedDesignation,
	setSelectedEmployee,
	setSelectedField,

	id
}) => {

	function valueDisplaySwitch(option){
		switch (type) {
			case 'designation':
				return (option);
			case 'office':
				return (option.address + (option.initials.toUpperCase() != '' ? ' (' + option.initials.toUpperCase() + ')' : ''));
			case 'employee':
				return (option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase());
			case 'channels':
				return (option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase());
			case 'employee/office':
				return (option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase() + 
					' (' + option.office.address + (option.office.initials.toUpperCase() != '' ? ' (' + option.office.initials.toUpperCase() + ')' : '') + ')');
			case 'requesttype':
				return (option.reqtype);
			case 'requestfields':
				return (option.field + ' [' + option.field_type + ']' + (option.field_type == 'radio' ? ' [' + option.field_options + ']' : ''));
		}
	};

	return (
		<div className="relative" id={id}>
			<Combobox 
				onChange={(value) => {
					setSelectedOption(value);

					switch (type) {
						case 'designation':
							setSelectedDesignation(value);
							break;
						case 'office':
							setSelectedOffice(value);
							break;
						case 'employee':
							setSelectedEmployee(value);
							break;
						case 'employee/office':
							setSelectedEmployee(value);
							break;
						case 'requesttype':
							setSelectedRequestType(value);
							break;
						case 'requestfields':
							setSelectedField(value);
							break;
						default:
							break;
					}
				}}
				onClose={() => setQuery('')}
				value={selectedOption}
				immediate
			>
				<ComboboxInput
					aria-label="Request type"
					displayValue={selectedOption != null ? selectedOption : ''}
					onChange={(event) => setQuery(event.target.value)}
					className={clsx(
						'form-control'
						)}
					/>
				<ComboboxButton className={`group absolute inset-y-0 right-0 px-2.5 z-10 
					${type === 'office' || type === 'designation' || type === 'employee/office' || type === 'channels' ? 'pt-3' : ''}`} >
					<ChevronDownIcon className="size-7 fill-black-600 group-data-[hover]:fill-black-800" />
				</ComboboxButton>

				<ComboboxOptions anchor="bottom" transition
					className={clsx(
					'w-[var(--input-width)] rounded-xl border z-50 bg-white p-1 [--anchor-gap:var(--spacing-1)]',
					'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 !max-h-[50%]')}
					key={filteredOptions.length + '-' + type}
				>
					{filteredOptions.map((option) => (
						<>
							<ComboboxOption 
								key={option.id + '-' + valueDisplaySwitch(option)} 
								value={valueDisplaySwitch(option)} 
								className="group flex cursor-default items-center gap-2 py-1.5 px-3 select-none bg-white hover:bg-slate-300 data-[disabled]:hover:bg-white data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed"
							>
								<CheckIcon className="invisible size-7 fill-orange-500 group-data-[selected]:visible" key={option.id + '-icon'} />
								{valueDisplaySwitch(option)}
							</ComboboxOption>
						</>
					))}
					
					{filteredOptions.length == 0 && query != '' && (
						<ComboboxOption 
							key={'no-results'} 
							value={'No results found.'} 
							className="group flex cursor-default items-center gap-2 py-1.5 px-3 select-none bg-white data-[disabled]:hover:bg-white data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed"
							disabled={true}
						>
							<CheckIcon className="invisible size-7 fill-orange-500 group-data-[selected]:visible" key={'no-results-icon'}/>
							{'No results found.'}
						</ComboboxOption>
					)}
				</ComboboxOptions>
			</Combobox>
		</div>
	);;
};

export default ComboboxMain;