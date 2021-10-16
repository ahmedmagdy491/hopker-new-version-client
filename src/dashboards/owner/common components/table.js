import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Column } = Table;

const TableComponent = ({ fields, data }) => {
	return (
		<div>
			<Table dataSource={data}>
				{fields &&
					fields.map((f) => (
						<Column
							title={f}
							dataIndex={f.toLowerCase()}
							key={f.toLowerCase()}
						/>
					))}
			</Table>
		</div>
	);
};

export default TableComponent;
