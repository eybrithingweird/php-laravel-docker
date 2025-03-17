import ReactDOM from 'react-dom'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

// class Sidebar extends Component {
// 	render() {
// 	  return <FontAwesomeIcon icon={faBars} />;
// 	}
//   }

React.render(<FontAwesomeIcon icon={faBars} />, document.getElementById("sidebarIcon"));

// export default function Sidebar() {
// 	return (
// 		<FontAwesomeIcon icon="fa fa-bars" />
// 	);
// }

// if (document.getElementById('sidebar')) {
// 	ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
// }