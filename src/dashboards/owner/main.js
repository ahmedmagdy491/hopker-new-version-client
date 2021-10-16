import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutC from '../commons/components/layout/layout';

import slider_subs from './tools/slider-items';

import routes from './tools/routes';
const OwnerMain = () => {
	return (
		<div>
			<Switch>
				{routes.map((route) => (
					<Route
						path={route.path}
						component={() => (
							<LayoutC
								content={route.component}
								subs={slider_subs}
							/>
						)}
					/>
				))}
			</Switch>
		</div>
	);
};

export default OwnerMain;
