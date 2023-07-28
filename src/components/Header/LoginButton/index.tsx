import React from 'react';
import CustomButton from '../../CustomButton';

type Props = {
	handleLogin: () => void;
};

export default function LoginButton(props: Props) {
	const {handleLogin} = props;

	return (
		<>
			<div className='largeButton desktop'>
				<CustomButton
					onClick={handleLogin}
				>
				Login
				</CustomButton>
			</div>
			<div className='mediumButton desktop'>
				<CustomButton
					onClick={handleLogin}
					fontSize='20px'
				>
				Login
				</CustomButton>
			</div>
			<div className='smallButton'>
				<CustomButton
					onClick={handleLogin}
					fontSize='20px'
					padding='0.3em 1.5em'
				>
				Login
				</CustomButton>
			</div>
		</>
	);
}
