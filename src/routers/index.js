import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from '@pages'; 
import { Default } from '@layout';

/* 다이나믹 레이아웃 */
const AppLayout = ({ component: Component, layout: Layout, ...rest })=>( 
	<Route {...rest} render={props => (
		<Layout>
			<Component {...props} />
		</Layout>
	)} />
)
// 404 page 띄울 예정
function Routers() {
	return(
		<BrowserRouter>
			<Switch>
				<AppLayout exact path="/" component={Home} layout={Default} />
			</Switch>
		</BrowserRouter>
	)
}
export default Routers;