import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
import Overview from '../components/Overview'
import Summarychart from '../components/SummaryLineChart'
import Course from '../components/Course'

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
				},
				{
					path: 'course/comp102x',
					name: 'comp102x',
					component: Course,
				}
			]
		}

	]


})

export default router