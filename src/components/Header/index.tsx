import React, {useState} from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';
import {GiHamburgerMenu} from 'react-icons/gi';

const HeaderContainer = styled.header`
    padding: 0 3em;
    background-color: var(--orange);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    color: #FFF;
    font-size: 24px;
    font-weight: 600;

    .hamburger {
        font-size: 2em;
        display: none;
    }

    nav {
        height: 100%;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 3em;
    }

    .hoverBox {
        height: 100px;
        display: flex;
        align-items: center;
    }

    .hoverBox:hover {
        cursor: pointer;
        transition: 50ms;
        transform: scale(1.1);
    }

    li:active .hoverBox {
        color: #e3dede;
    }

    .mediumButton {
        display: none;
    }

	.smallButton {
		display: none;
	}

	@media (max-width: 1200px) {
        padding: 0 1.5em;
        font-size: 20px;

        .largeButton {
            display: none;
        }

        .mediumButton {
            display: block;
        }
    }

    @media (max-width: 950px) {
        ul {
            gap: 1.5em;
        }
    }

    @media (max-width: 850px) {
        .hamburger {
            display: block;
			cursor: pointer;
        }

		.hamburger:hover {
			filter: brightness(85%);
		}

        .desktop {
            display: none;
        }

		.smallButton {
			display: block;
		}
    }
`;

const SideBar = styled.div`
	display: flex;
	background-color: var(--black-bg);
	color: #fff;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 32px 0 32px;
	}

	h2 {
		font-size: 26px;
		text-align: center;
		margin: 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		font-size: 18px;
	}

	li:hover {
		cursor: pointer;
		filter: brightness(85%);
	}

	li:active {
		filter: brightness(100%);
	}
`;

export default function Header() {
	const navMenu = [
		{
			name: 'news',
		},
		{
			name: 'rankings',
		},
		{
			name: 'download',
		},
		{
			name: 'faq',
		},
		{
			name: 'team',
		},
	];

	return (
		<HeaderContainer>
			<GiHamburgerMenu className='hamburger' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions'/>
			<SideBar className='offcanvas offcanvas-start sideBar' data-bs-scroll='true' tabIndex={-1} id='offcanvasWithBothOptions' aria-labelledby='offcanvasWithBothOptionsLabel'>
				<div>
					<h2>Arca</h2>
					<img src='/arca-colorful-logo.svg' alt='arca logo'/>
				</div>
				<hr />
				<ul className='mobile'>
					{navMenu.map(item => (
						<li key={`mobile-${item.name}`} className='mobile'>
							{item.name}
						</li>
					))}
				</ul>
			</SideBar>
			<img src='/arca-colorful-logo.svg' alt='arca logo' className='desktop'/>
			<nav className='desktop'>
				<ul className='desktop'>
					{navMenu.map(item => (
						<li key={`desktop-${item.name}`} className='desktop'>
							<div className='hoverBox'>{item.name}</div>
						</li>
					))}
				</ul>
			</nav>
			<div className='largeButton desktop'>
				<CustomButton>Login</CustomButton>
			</div>
			<div className='mediumButton desktop'>
				<CustomButton fontSize='20px'>Login</CustomButton>
			</div>
			<div className='smallButton'>
				<CustomButton fontSize='20px' padding='0.3em 1.5em'>Login</CustomButton>
			</div>
		</HeaderContainer>
	);
}
