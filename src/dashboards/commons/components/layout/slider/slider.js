import React from 'react';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import '../styles/layout.css';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Slider = ({ subs }) => {
	const Sub = ({ subs }) => (
		<>
			{subs &&
				subs.map((item, index) => (
					<SubMenu
						key={`sub${index + 1}`}
						style={{ paddingLeft: '1rem' }}
						title={item.sub}
					>
						{item.options.map((o, i) => (
							<Link to={o.route}>
								<Menu.Item key={`${i + 1}`}>{o.name}</Menu.Item>
							</Link>
						))}
					</SubMenu>
				))}
		</>
	);

	return (
		<Sider className="site-layout-background" width={250}>
			<Menu mode="inline" theme="dark" style={{ height: '100%' }}>
				<Sub subs={subs} />
			</Menu>
		</Sider>
	);
};

export default Slider;
