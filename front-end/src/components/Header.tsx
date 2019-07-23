import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes'

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {

	return (
		<div className="header">
			<div className="header-content">
				<div className="header__title">To-Do App</div>
				<div className="header__nav">
					<NavLink to=''>Первый роут</NavLink>
					<NavLink to=''>Второй роут</NavLink>
					<NavLink to=''>Третий роут</NavLink>
				</div>
			</div>
		</div>
	)

}

export default Header;
