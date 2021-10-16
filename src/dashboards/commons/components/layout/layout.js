import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar/navbar';
import Content from './content/content';
import Footer from './footer/footer';
import './styles/layout.css';

const LayoutC = ({ content, subs }) => {
	return (
		<Layout>
			{/* Navbar */}
			<Navbar />
			{/* Navbar */}
			{/* Content */}
			<Content Con={content} subs={subs} />
			{/* Content */}
			{/* Footer */}
			<Footer />
			{/* Footer */}
		</Layout>
	);
};

export default LayoutC;
