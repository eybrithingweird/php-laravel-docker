import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from '../contexts/UserContext';

export default function Navbar() {
	return (
		<>
			<UserProvider>
				<header className="fixed main-header w-full">
					<a href="https://myiit.msuiit.edu.ph/my/v2/index.php?ref=logo" className="logo !grid place-content-center bg-iit-red !z-1000">
						<span className="logo-mini">
							<img src="https://myiit.msuiit.edu.ph/my/v2/assets/img/msuiit-logo-40x40.png" alt="My.IIT" />
						</span>
						<span className="logo-lg">
							<img style={{border: '1px solid #fc0'}} src="https://accounts.msuiit.edu.ph/signin/module.php/myiit/assets/images/myiit.gif" alt="MyIIT" />
						</span>
					</a>
					{/* Header Navbar */}
					<nav className="navbar navbar-static-top bg-iit-navbar text-white" role="navigation">
						{/* Sidebar toggle button */}
						<a href="#sidebar-toggle" className="sidebar-toggle hover:bg-iit-red" data-toggle="offcanvas" role="button">
							<span className="sr-only">Toggle navigation</span>
						</a>
						{/* Navbar Right Menu */}
						<div className="navbar-custom-menu float-right">
							<ul className="nav navbar-nav navbar-hover">
								<li className="visible-xs">
									<a href="https://myiit.msuiit.edu.ph/my/v2/index.php?ref=navbar" className="hover:text-white hover:bg-iit-red">
										<small className="visible-xs">
											<i className="fa fa-home"></i>
										</small>
										<span className="hidden-xs">
											<i className="fa fa-home"></i> Home
										</span>
									</a>
								</li>

								<li className="dropdown notifications-menu">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" title="Announcements (SMS Blast)">
										<small className="visible-xs">
											<i className="fa fa-bell"></i>
										</small>
										<span className="hidden-xs">
											<i className="fa fa-bell"></i>
										</span>
									</a>
									<ul className="dropdown-menu boxshadow-light-dark">
										<li className="header">Announcements (SMS Blast)</li>
										<li>
											<ul className="menu">
												<li>
													<div className="alert alert-info-light">
														<i className="fa fa-info-circle"></i> No announcement posted for S.Y. 2024-2025, 1 sem.
													</div>
												</li> 

												<li className="footer bg-warning">
													<a href="https://myiit.msuiit.edu.ph/my/v2/messages.php?ref=navbar" className="text-center">View All Messages</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="https://myiit.msuiit.edu.ph/my/v2/#feedbackModal" title="Feedback" data-toggle="modal" data-target="#feedbackModal">
										<small className="visible-xs">
											<i className="fa fa-paper-plane"></i>
										</small>
										<span className="hidden-xs">
											<i className="fa fa-paper-plane"></i>
										</span>
									</a>
								</li>

								{/* Google Apps Menu */}
								<li className="dropdown notifications-menu hidden-xs">
									<a href="https://myiit.msuiit.edu.ph/my/v2/gsuite.php">G.MSUIIT</a>
								</li>
								<li className="visible-xs">
									<a href="https://myiit.msuiit.edu.ph/my/v2/gsuite.php">
										<small>
											<i className="fa-brands fa-google"></i>
										</small>
									</a>
								</li>

								{/* IIT Apps Menu */}
								<li className="dropdown notifications-menu">
									<a href="https://myiit.msuiit.edu.ph/my/v2/apps/">
										<small className="visible-xs">IIT Apps</small>
										<span className="hidden-xs">IIT Apps</span>
									</a>
								</li>

								{/* MOLÉ Menu */}
								<li className="dropdown notifications-menu">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									MOLÉ
									</a>
									<ul className="dropdown-menu boxshadow-light-dark">
										<li>
											<ul className="menu">
												<li>
													<a target="_blank" href="https://myiit.msuiit.edu.ph/my/v2/redirect.php?id=mole3&amp;ref=navbar">MOLÉ 3.0 (New)
														<span className="text-info"></span>
													</a>
												</li>
												<li>
													<a target="_blank" href="https://myiit.msuiit.edu.ph/my/v2/redirect.php?id=mole2&amp;ref=navbar">MOLÉ 2.0 (Old)
														<span className="text-info"></span> 
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>

								<li className="dropdown notifications-menu">
									<a target="_blank" title="MSU-IIT Vision, Mission, Goals, and Objectives" href="https://www.msuiit.edu.ph/about/facts/core-values.php" className="hover:bg-iit-red">VGMO</a>
								</li>

								{/* User Account Menu */}
								<li className="dropdown user user-menu">
									{/* Menu Toggle Button */}
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									{/* The user image in the navbar */}
										<div className="user-image">
											<img src="https://myiit.msuiit.edu.ph/my/v2/assets/img/profile-photos/4147d48915e114579e79df82296104f2.jpg" className="profile-photo" alt="User Image" />
										</div>
									{/* hidden-xs hides the username on small devices so only the image appears. */}
										<span className="hidden-xs">Abe APAO</span>
									</a>
									<ul className="dropdown-menu boxshadow-light-dark">
									{/* The user image in the menu */}
										<li className="user-header">
											<div className="user-image">
												<a href="https://myiit.msuiit.edu.ph/my/v2/profile.php" title="View Profile">
													<img src="https://myiit.msuiit.edu.ph/my/v2/assets/img/profile-photos/4147d48915e114579e79df82296104f2.jpg" alt="User Image" />
												</a>
											</div>
											<p>
												Abe APAO <br />
												<small>4th year BSIT</small>
											</p>
										</li>
									
									{/* Menu Footer */}
										<li className="user-footer">
											<p>
												<a className="btn btn-default btn-block break-me" target="_blank" href="https://myiit.msuiit.edu.ph/my/v2/redirect.php?id=mail&amp;ref=navbar" title="abe.apao@g.msuiit.edu.ph">
													<img width="16" height="16" src="https://myiit.msuiit.edu.ph/my/v2/assets/img/google-apps/gmail-16.png" />
													&nbsp;&nbsp;abe.apao@g.msuiit.edu.ph
												</a>
											</p>
											<div className="btn-group" role="group" aria-label="...">
												<a href="https://myiit.msuiit.edu.ph/my/v2/profile.php?ref=navbar" className="btn btn-default btn-flat">Profile</a>
												<a href="https://myiit.msuiit.edu.ph/my/v2/settings.php?ref=navbar" className="btn btn-default btn-flat">Settings</a>
											</div>

											<div className="pull-right">
												<a href="https://myiit.msuiit.edu.ph/my/v2/logout.php?ref=navbar" className="btn btn-default btn-flat">Logout</a>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
				</header>
			</UserProvider>
		</>
	);
};

if (document.getElementById('navbar')) {
	const navbarDOM = ReactDOM.createRoot(document.getElementById("navbar"));
	navbarDOM.render(<Navbar />);
}