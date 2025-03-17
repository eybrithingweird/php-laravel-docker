import React from "react";
import { useAdmin } from "../../contexts/AdminContext";
import { useCreate } from "../../contexts/CreateContext";
import { Tooltip } from "react-tooltip";
import ComboboxNamesFlexi from "./ComboboxNamesFlexi";

export const TableChannels = () => {
	const {
		draftChannels,
		offices,
		selectedChannels,
		employeesOIC
	} = useCreate();

	console.log(draftChannels);

	// console.log(offices[0]);

	console.log(selectedChannels);

	return (
		<table className="grid grid-cols-12 p-1">
			<thead className="grid grid-cols-subgrid col-span-12 gap-2">
				<tr className="grid grid-cols-subgrid col-span-12">
					<th className="grid grid-cols-subgrid col-span-1 text-center">Step #</th>
					<th className="grid grid-cols-subgrid col-span-5">Office (Designation)</th>
					<th className="grid grid-cols-subgrid col-span-5">Person</th>
				</tr>
			</thead>

			<tbody className="grid grid-cols-subgrid col-span-12 gap-2">
				{
					draftChannels != null &&
					draftChannels.map((channel, index) => {
						// TODO: Compare and check college and department
						// if (index != draftChannels.length - 1) {
						console.log(channel, channel.length);
						if (channel.length === 1) {
							const office = offices.filter((option) => { return option.id == channel[0].office_id });
							// console.log(office);
							// console.log(selectedChannels.dst_offices_id);
							// console.log(index);
							// console.log(channel);
							// console.log(employeesOIC);
							const empOic = employeesOIC.filter((option) => { return option.oic_of_employee_id === channel[0].id })[0];
							// console.log(empOic);
							return (
							
								<tr className="grid grid-cols-subgrid col-span-12" key={channel[0].id + ' ' + channel[0].office_id + ' ' + channel[0].designation}>
									<td className="grid grid-cols-subgrid col-span-1 text-center" key={channel[0].id + ' ' + channel[0].office_id}>{index + 1}</td>
									<td className="grid grid-cols-subgrid col-span-5" key={channel[0].office_id + ' office'}>
										{office[0]?.initials} ({index + 1 < selectedChannels.dst_offices_id.length && selectedChannels.dst_offices_id[index][1]})
									</td>
									<td className="grid grid-cols-subgrid col-span-5" key={channel[0].id + ' designation'}>
										{channel[0].prenominal_title + ' ' + channel[0].first_name + ' ' + channel[0].last_name} 
										{channel[0].postnominal_title != '' && ', ' + channel[0].postnominal_title}
										<br />
										{empOic ? 
											<u>
												Officer-in-charge: 
												{empOic.prenominal_title + ' ' + empOic.first_name + ' ' + empOic.last_name + ', ' + empOic.postnominal_title}
											</u> : ''}
									</td>
									<i className="fa fa-trash fa-lg text-iit-gray hover:cursor-pointer hover:text-iit-red z-20" data-tooltip-id="tooltip-trash" 
										data-tooltip-content={`Remove Channel (${channel[0].designation})`} key={channel[0].id + '-trash'}>
										<Tooltip className="-ml-12 -mt-2 z-20" id="tooltip-trash" key={channel[0].id + '-tooltip'} />	
									</i>
								</tr>
								
							)
						} else {
							if (selectedChannels.dst_offices_id[index][0] == 92) {
								const data = channel.map((option) => { 
									return { 
										id: option.id, 
										office: offices.filter((office) => { return office.id == option.office_id })[0], 
										first_name: option.first_name,
										last_name: option.last_name,
										middle_initial: option.middle_initial,
										postnominal_title: option.postnominal_title,
										prenominal_title: option.prenominal_title,
										designation: option.designation 
									} });

								return (
									<tr className="grid grid-cols-subgrid col-span-12">
										<td className="grid grid-cols-subgrid col-span-1 content-center text-center" key={channel[0].id + ' ' + channel[0].office_id}>{index + 1}</td>
										<td className="grid grid-cols-subgrid col-span-11 place-content-center" key={`channelSelect` + channel[0].designation}>
											<ComboboxNamesFlexi
												data={data}
												type="employee/office"
											/>
										</td>
									</tr>
								);
							} else if (selectedChannels.dst_offices_id[index][0] == 93) {
								return (
									<tr className="grid grid-cols-subgrid col-span-12">
										<td className="grid grid-cols-subgrid col-span-1 content-center text-center" key={channel[0].id + ' ' + channel[0].office_id}>{index + 1}</td>
										<td className="grid grid-cols-subgrid col-span-11 place-content-center" key={`collegeSelect` + channel[0].designation}>
											<ComboboxNamesFlexi
												data={channel}
												type='office'
											/>
										</td>
									</tr>
								);
							} else if (selectedChannels.dst_offices_id[index][0] == 94) {
								return (
									<tr className="grid grid-cols-subgrid col-span-12">
										<td className="grid grid-cols-subgrid col-span-1 content-center text-center" key={channel[0].id + ' ' + channel[0].office_id}>{index + 1}</td>
										<td className="grid grid-cols-subgrid col-span-11 place-content-center" key={`channelSelect` + channel[0].designation} id="allColleges">
											All Colleges (Deans)
										</td>
									</tr>
								)
							} else if (selectedChannels.dst_offices_id[index][0] == 95) {
								return (
									<tr className="grid grid-cols-subgrid col-span-12">
										<td className="grid grid-cols-subgrid col-span-1 content-center text-center" key={channel[0].id + ' ' + channel[0].office_id}>{index + 1}</td>
										<td className="grid grid-cols-subgrid col-span-11 place-content-center" key={`channelSelect` + channel[0].designation} id="allViceChancellors">
											All Offices of the Vice Chancellors (Vice Chancellors)
										</td>
									</tr>
								)
							}
							
						}
							
						// }
					})
				}
			</tbody>
		</table>
	);
};