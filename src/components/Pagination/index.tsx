import React from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';

type Props = {
	rowsPerPage: number;
	totalItems: number;
	actualPage: number;
	onPageChange: (pageNumber: number) => void;
};

const PaginationContainer = styled.div`
	display: flex;
	gap: 0.3em;
	margin-bottom: 2em;
`;

export default function Pagination(props: Props) {
	const {rowsPerPage, totalItems, actualPage, onPageChange} = props;

	const handlePageChange = (actualPage: number) => {
		onPageChange(actualPage);
	};

	const generatePageNumbers = () => {
		const totalPages = Math.ceil(totalItems / rowsPerPage);
		return Array.from({length: totalPages}, (_, index) => index + 1);
	};

	return (
		<PaginationContainer>
			{generatePageNumbers().map(pageNumber => (
				<CustomButton
					key={pageNumber}
					width='40px'
					height='40px'
					fontSize={'16px'}
					padding={'0'}
					onClick={() => {
						handlePageChange(pageNumber);
					}}
					disabled={actualPage === pageNumber}
				>
					{`${pageNumber}`}
				</CustomButton>
			))}
		</PaginationContainer>
	);
}
