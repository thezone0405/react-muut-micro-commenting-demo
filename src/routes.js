import App from 'components/app'
import Dashboard from 'containers/pages/dashboard'

const routes = [
    {
        component: App,
        routes:[
            {
                component: Dashboard,
                exact: true,
                path:'/'
            },
            {
				path      : '*',
				component : Dashboard
			}
        ]
    }
]

export default routes