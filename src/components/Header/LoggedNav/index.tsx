import React, {useContext} from 'react';
import styled from 'styled-components';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import {removeToken} from '../../Login/tokenStorage';
import {AuthContext} from '../../../contexts/AuthContext';
import {TbLogout} from 'react-icons/tb';

const Container = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const UserImg = styled.img`
	height: 60%;
	border-radius: 50%;
	cursor: default;
`;

const LogoutContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default function LoggedNav() {
	const navOptions = [
		{
			option: 'Account Info',
			link: '/account',
		},
		{
			option: 'Settings',
			link: 'settings',
		},
	];

	const authContext = useContext(AuthContext);

	const testDisplay = {
		username: 'Kushi',
		img: 'team/kushi.svg',
	};

	return (
		<Container>
			<UserImg
				src={testDisplay.img}
				alt={testDisplay.username}
			/>
			<Navbar variant='dark' expand='lg'>
				<Container>
					<Navbar.Toggle/>
					<Navbar.Collapse>
						<Nav>
							<NavDropdown
								title={testDisplay.username}
								menuVariant='dark'
							>
								{navOptions.map(item => (
									<NavDropdown.Item
										href={item.link}
										key={item.link}
									>
										{item.option}
									</NavDropdown.Item>
								))}
								<NavDropdown.Divider />
								<NavDropdown.Item href='/home'>
									<LogoutContainer
										onClick={() => {
											removeToken();
											authContext.setIsLoggedIn(false);
										}}
									>
										Logout
										<TbLogout />
									</LogoutContainer>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
}
