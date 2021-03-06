import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open){
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return(
		<Aux>
			<BackDrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')} >
				<div className={classes.Logo}>
					<Logo></Logo>
				</div>
				<nav>
					<NavItems></NavItems>
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;