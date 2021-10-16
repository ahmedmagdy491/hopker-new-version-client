import React from 'react';
import { Breadcrumb, Layout, Row } from 'antd';
import Slider from '../slider/slider';
import '../styles/layout.css';
const { Content } = Layout;
const content = ({ Con, subs }) => {
	return (
		<Content style={{ padding: '0 50px' }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
			<Layout
				className="site-layout-background"
				style={{ padding: '24px 0' }}
			>
				<Row>
					{/* slider */}
					<Slider subs={subs} />
					{/* slider */}
					{/* content */}
					<Content style={{ padding: '0 24px', minHeight: 280 }}>
						<Con />
					</Content>
					{/* content */}
				</Row>
			</Layout>
		</Content>
	);
};

export default content;
