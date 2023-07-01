import React from 'react';
import styled from 'styled-components';

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

    p, li {
        font-size: 12px;
    }

    p {
        width: 50%;
        text-align: justify;
    }

    ul {
        list-style-position: inside;
		padding: 0;
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
							<li>Home</li>
							<li>Download</li>
							<li>Rankings</li>
							<li>News</li>
							<li>FAQ</li>
							<li>Teams</li>
						</ul>
					</div>
					<img src='/arca-colorful-logo.svg' width='72px' />
				</Navigation>
			</FooterContainer>
		</Container>
	);
}
