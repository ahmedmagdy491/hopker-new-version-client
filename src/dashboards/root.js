import React from 'react';
import ContractorMain from './contractor/main';
import OwnerMain from './owner/main';
const Root = () => {
	/* Authorization based on role */
	const authorize = (role) =>
		role === 'owner' ? (
			<OwnerMain />
		) : role === 'contractor' ? (
			<ContractorMain />
		) : (
			'another route'
		);

	/* determine the role */
	const role = 'owner';

	return (
		<div>
			{/* Invoke the Authorization function */}
			{authorize(role)}
		</div>
	);
};

export default Root;
