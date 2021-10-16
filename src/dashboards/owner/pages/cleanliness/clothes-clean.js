import React from 'react';
import TableComponent from '../../common components/table';
import { data, fields } from '../../tools/data';

const ClothesClean = () => {
	return (
		<div>
			<TableComponent fields={fields} data={data} />
		</div>
	);
};

export default ClothesClean;
