import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Footer() {
	return (
		<>
			<p className="pull-right visible-lg">
				<a href="/my/v2/#feedbackModal" title="Feedback" data-toggle="modal" data-target="#feedbackModal">
					<i className="fa fa-send"></i> 
					Give Feedback
				</a>
			</p>

			<p>Copyright © 2015 <a href="http://www.msuiit.edu.ph">MSU-Iligan Institute of Technology</a>. <small>PHP exec. time: (time)</small></p>
		</>
	);
}


if (document.getElementById('footer')) {
	const footerDOM = ReactDOM.createRoot(document.getElementById("footer"));
	footerDOM.render(<Footer />);
} //NOTE: No element with id 'footer'