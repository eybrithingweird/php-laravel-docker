import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '../contexts/UserContext';

export default function Sidebar() {
	const {
		user_id,
		user_first_name,
		user_last_name,
		user_office,
		isAdmin
	} = useUser();

	return (
		<aside className="main-sidebar hidden-print fixed">
			<div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '100vh'}}>
				<section id="sidebar" className="sidebar bg-iit-gray text-white grid grid-rows-12" style={{overflow: 'hidden', width: 'auto', height: '100vh'}}>
					<div className="grid grid-rows-subgrid row-span-2 place-content-center mb-4">
						<div className="grid row-span-2 grid-rows-14">
							<div className="grid grid-rows-subgrid row-span-1">

							</div>

							<div className="grid grid-rows-subgrid row-span-10 image h-[120px] w-[120px]">
								<a href="https://myiit.msuiit.edu.ph/my/v2/cropper.php" className="btn-upload grid grid-rows-subgrid row-span-10" id="btn-upload-photo">
									<img src="https://myiit.msuiit.edu.ph/my/v2/assets/img/profile-photos/4147d48915e114579e79df82296104f2.jpg" className="profile-photo rounded-full grid grid-rows-subgrid row-span-9" alt="User Image" />

									<div className="profile-pic-selector absolute top-[95px] left-[70px] text-lg text-gray-400" id="profile-pic-selector" style={{display: 'block'}}>
										<i className="fa fa-camera"></i>
										<span className="visible">Update Photo</span>
									</div>
								</a>
							</div>

							<div className="grid grid-rows-subgrid row-span-2">

							</div>

							<div className="leading-none ellipsis grid grid-rows-subgrid row-span-1 justify-self-center"> 
								{user_first_name} {user_last_name} ({user_id})
							</div>
						</div>
						
					</div>

					<div className="grid grid-rows-subgrid row-span-10" id="container">
						<ul className="grid row-span-10 grid-rows-20">
							<li className="grid grid-rows-subgrid text-xl bg-iit-header text-iit-gray">
								<span className="pt-[12px] pl-[15px]">
									iSULAT - Online Letter Requests
								</span>
							</li>

							<SidebarLink to="/" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-home mr-2"></i>
								<span>Dashboard</span>
							</SidebarLink>
							
							{/* <SidebarLink to="/incoming" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-share mr-2"></i>
								<span>Incoming Requests</span>
							</SidebarLink>

							<SidebarLink to="/received" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-inbox mr-2"></i>
								<span>Received Requests</span>
							</SidebarLink>

							<SidebarLink to="/outgoing" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-reply mr-2"></i> 
								<span>Outgoing Requests</span>
							</SidebarLink> */}

							<SidebarLink to="/letters/*" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-inbox mr-2"></i> 
								<span>All Letter Requests</span>
							</SidebarLink>

							<SidebarLink to="/mysulat" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-envelope mr-2"></i> 
								<span>My Letter Requests</span>
							</SidebarLink>

							<SidebarLink to="/create" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
								<i className="fa fa-plus mr-2"></i> 
								<span>Create Letter Request</span>
							</SidebarLink>

							{
								isAdmin && (
									<SidebarLink to="/admin" styles="pt-[12px] pl-[15px] hover:text-iit-yellow focus:text-iit-yellow">
										<i className="fa fa-lock mr-2"></i> 
										<span>Admin Dashboard</span>
									</SidebarLink>
								)
							}

							<li className="grid grid-rows-subgrid align-middle">
								<a href="https://myiit.msuiit.edu.ph/my/v2/index.php?ref=fms-ar" data-toggle="tooltip" data-container="body" data-placement="right" data-title="Back to My.IIT Home" data-original-title="" title="" className="pt-[12px] pl-[15px] hover:text-iit-yellow">
									<i className="fa fa-arrow-left mr-2"></i> 
									<span>Back to My.IIT Home</span>
								</a>
							</li>
							<li className="grid grid-rows-subgrid align-middle">
								<a href="https://myiit.msuiit.edu.ph/my/v2/logout.php?ref=left-menu" className="pt-[12px] pl-[15px] hover:text-iit-yellow">
									<i className="fa fa-power-off mr-2"></i> 
									<span>Logout</span>
								</a>
							</li>
						</ul>
					</div>
				</section>
				
				<div className="slimScrollBar" style={{background: 'rgb(119, 119, 119)', width: '7px', position: 'absolute', top: '0px', opacity: 0.4, display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '584px'}}>
				</div>

				<div className="slimScrollRail" style={{width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: 0.2, zIndex: 90, right: '1px'}}>
				</div>
			</div>
		</aside>
	);
}

function SidebarLink( { to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	const propStyle = isActive ? 'bg-iit-gray-active text-iit-yellow' : 'text-white';
	const combinedStyles = propStyle + ' ' + props.styles;

	return (
		<li className="grid grid-rows-subgrid align-middle">
			<Link to={to.split('*')[0]} className={combinedStyles}>
				{children}
			</Link>
		</li>
	)
}