import React, { useEffect, useRef, useState } from "react";
import { Field } from "@headlessui/react";
// import ConvertToFromEdit from "../ConvertToFromEdit";
import ConvertToFromEdit from "../Letters/ConvertToFromEdit";

const AdditionalFieldsAnswered = ({ additionalFields, is_sent }) => {

	return (
		additionalFields.length > 0 && additionalFields.map((field) => {
			console.log(field.id);
			return (
				<tr id={`${field.field_label.split(' ')[0].toLowerCase()}`}>
					<td className="warning"> 
						{field.field_label} 
					</td>

					<td>
						{ is_sent ? 
							(field.field_type === 'text' || field.field_type === 'file' ? 
								field.field_value : 
								field.field_option) : 
								
							<ConvertToFromEdit 
							data={
								field.field_type === 'text' || field.field_type === 'file' ? 
									field.field_value : 
									field.field_option} 
							type={field.field_type}
							label={field.field_label}
							additionalField={true}
							id={field.id} /> }
					</td>
				</tr>
			);
		})
	);
};

export default AdditionalFieldsAnswered;
