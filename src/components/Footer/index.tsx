import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.footer`
	width: 100%;
	background-color: var(--gray-bg);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FooterContainer = styled.div`
    padding: 5em 0;
    color: var(--gray);
    display: flex;
    justify-content: center;
    align-items: center;
	width: 70vw;
	max-width: 1400px;

    p, li, a {
        font-size: 12px;
		color: var(--gray);
    }

    p {
        width: 50%;
        text-align: justify;
    }

    ul {
        list-style-position: inside;
		padding: 0;
    }

	a:hover {
		filter: brightness(115%);
	}

	a:active {
		filter: brightness(85%);
	}

    .center {
        text-align: center;
    }

    h2 {
        color: white;
        padding-bottom: 0.5;
    }

    @media (max-width: 760px) {
        flex-direction: column;
        padding: 3em 5%;

        p {
            width: 100%;
        }

        h2 {
            margin-top: 2em;
        }
    }
`;

const Navigation = styled.nav`
    display: flex;
    gap: 3em;
    
    @media (max-width: 760px) {
        width: 100%;
        justify-content: space-between;
    }

    @media (max-width: 285px) {
        justify-content: center;

        img {
            display: none;
        }
    }
`;

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Container>
			<FooterContainer>
				<div>
					<p>O banco pode estar afundando, mas pelo menos a fronteira de Monster Hunter Frontier ainda está em pé e pronta para caçar alguns monstros!</p>
					<p className='center'>~ Kushi</p>
				</div>
				<Navigation>
					<div>
						<h2>Navigation</h2>
						<ul>
							<li><Link to={'/home'} onClick={scrollToTop}>Home</Link></li>
							<li><Link to={'/download'} onClick={scrollToTop}>Download</Link></li>
							<li><Link to={'/rankings'} onClick={scrollToTop}>Rankings</Link></li>
							<li><Link to={'/news'} onClick={scrollToTop}>News</Link></li>
							<li><Link to={'/faq'} onClick={scrollToTop}>FAQ</Link></li>
							<li><Link to={'/team'} onClick={scrollToTop}>Team</Link></li>
						</ul>
					</div>
					<img src='/arca-colorful-logo.svg' width='72px' />
				</Navigation>
			</FooterContainer>
		</Container>
	);
}
