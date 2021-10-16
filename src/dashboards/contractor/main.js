import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutC from '../commons/components/layout/layout';
import SpareParts from './pages/spare-parts';
import Team from './pages/team';

const ContractorMain = () => {
	return (
		<div>
			<Switch>
				<Route
					path="/contractor/team"
					component={() => <LayoutC content={Team} />}
				/>
				<Route
					path="/contractor/spare"
					component={() => <LayoutC content={SpareParts} />}
				/>
			</Switch>
		</div>
	);
};

export default ContractorMain;
