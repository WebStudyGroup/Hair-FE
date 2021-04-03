import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routers() {
	return(
		<BrowserRouter>
			<Switch>
				<AppLayout exact path="/" />
				<AppLayout />
			</Switch>
		</BrowserRouter>
	)
}
/* 다이나믹 레이아웃 */
const AppLayout = ({ component: Component, layout: Layout, ...rest })=> {
	<Route {...rest} render={props => (
		<Layout>
			<Component {...props} />
		</Layout>
	)} />
}
export default Routers;