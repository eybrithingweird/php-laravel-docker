import React from "react";
import { useAdmin } from "../../contexts/AdminContext";

export const TableAddChannels = () => {
	const {
		selectedChannels,
	} = useAdmin();

	return (
		<table className="grid grid-cols-12 p-1">
			<thead className="grid grid-cols-subgrid col-span-12 gap-2">
				<tr className="grid grid-cols-subgrid col-span-12">
					<th className="grid grid-cols-subgrid col-span-1 text-center">Step #</th>
					<th className="grid grid-cols-subgrid col-span-5">Office</th>
					<th className="grid grid-cols-subgrid col-span-5">Designation</th>
				</tr>
			</thead>

			<tbody className="grid grid-cols-subgrid col-span-12 gap-2">
				{
					selectedChannels.map((channel) => {
						return (
							
								<tr className="grid grid-cols-subgrid col-span-12" key={channel.id + ' ' + channel.office_id}>
									<td className="grid grid-cols-subgrid col-span-1 text-center" key={channel.id + ' ' + channel.office_id}>{channel.id}</td>
									<td className="grid grid-cols-subgrid col-span-5" key={channel.office_id + ' office'}>{channel.office}</td>
									<td className="grid grid-cols-subgrid col-span-5" key={channel.id + ' designation'}>{channel.designation}</td>
								</tr>
							
						)
					})
				}
			</tbody>
		</table>
	);
};