import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
import Overview from '../components/Overview'
import Summarychart from '../components/SummaryLineChart'


Vue.use(Router)

const User = {
  template: '<div>User</div>'
}

const router = new Router({
	routes:[
		{
			path: '/',
			name: 'base',
			component: Layout,
			children: [
				{
					path: '',
					name: 'overview',
					component: Overview,
					children:[


					]
				}
			]
		}

	]


})

export default router