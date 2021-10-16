import React from 'react';
import TableComponent from '../../common components/table';
import { data } from '../../tools/data';

const fields = ['Name', 'Age', 'Address', 'Tags'];
const Invoices = () => {
	return (
		<div>
			<TableComponent fields={fields} data={data} />
		</div>
	);
};

export default Invoices;
