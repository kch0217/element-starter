<template>
	<div>
	<el-row :gutter="10" class="">
		<el-col :xs="12" :sm="12" :lg="12" class="c
    ard-panel-col">

	The following types of events are captured for processing:
	
	<el-button type="primary" @click="change_event" plain>Video</el-button>
<el-button type="success" @click="change_event" plain>Navigation</el-button>
<el-button type="info" @click="change_event" plain>Problem</el-button>
 <el-table
      :data="target_data"
      style="width: 100%">
      <el-table-column
        prop="type"
        label="Event Type"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Event Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="Description">
      </el-table-column>
    </el-table>

</el-col>
<el-col :xs="12" :sm="12" :lg="12" class="c
    ard-panel-col">
	<div id="event-chart-container"></div>
</el-col>
</el-row>
</div>

</template>

<script>
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'

	export default {
		data(){
			return{
				video_event_data:[
					{
						type:"Video",
						name:"play_video",
						desc:"None"
					},{
						type:"Video",
						name:"pause_video",
						desc:"None"
					},{
						type:"Video",
						name:"pause_video",
						desc:"None"
					},{
						type: "Video",
						name: "load_video",
						desc: "None"
					}, {
						type:"Video",
						name:"seek_video",
						desc:"None"
					},{
						type: "Video",
						name: "speed_change_video",
						desc: "None"
					}, {
						type:"Video",
						name:"show_transcript",
						desc:"None"
					},{
						type: "Video",
						name: "hide_transcript",
						desc: "None"
					}, 




				],
				navigation_event_data:[
					{
						type:"Navigation",
						name:"seq_next",
						desc:"None"
					},{
						type:"Navigation",
						name:"seq_goto",
						desc:"None"
					},{
						type:"Navigation",
						name:"seq_prev",
						desc:"None"
					}
				],
				problem_event_data:[
					{
						type:"Problem",
						name:"problem_check",
						desc:"None"
					}
				],
				target_data: this.video_event_data,
			}
		},
		mounted:function(){
			drilldown(Highcharts)
			Highcharts.chart('event-chart-container', {
				chart: {
		          type: 'pie'
		        },
		        title: {
		          text: 'Features captured based on event types'
		        },
		        subtitle: {
		          text: 'Click the slices to view the details.'
		        },
		        plotOptions: {
		          series: {
		            dataLabels: {
		              enabled: true,
		              format: '{point.name}: {point.y:.1f}%'
		            }
		          }
		        },
		        credits:{
		        	enabled: false
		        },

		        tooltip: {
		          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		        },
		        series: [{
		        	name:"Event types",
		        	colorByPoint:true,
		        	data:[{
		        		name:'Video',
		        		y: 50.3,
		        		drilldown: 'Video'
		        	}, {
		        		name: 'Problem',
		        		y: 20.6,
		        		drilldown: 'Problem'
		        	},{
		        		name: 'Navigation',
		        		y: 29.1,
		        		drilldown: 'Navigation'
		        	}]		        	
		        }],
		        drilldown: {
		        	series: [{
		        		name: "Video",
		        		id: "Video",
		        		data:[
		        			['play_video', 11.1],
		        			['pause_video', 10.1],
		        			['stop_video', 10.1],
		        			['load_video', 5],
		        			['seek_video', 7],
		        			["speed_change_video", 3],
		        			['hide_transcript', 2],
		        			['show_transcript', 2]
		        		]
		        	},{
		        		name: "Problem",
		        		id: 'Problem',
		        		data:[
		        			["problem_check", 20.6]
		        		]
		        	},{
		        		name: "Navigation",
		        		id: "Navigation",
		        		data:[
		        			['seq_goto', 10.1],
		        			['seq_next', 10.0],
		        			['seq_prev', 9.0]
		        		]
		        	}
		        	]
		        }

			});
		},
		methods:{
			change_event(event){
				if (event.target.outerText == "Video")
					this.target_data = this.video_event_data
				else if (event.target.outerText == "Navigation")
					this.target_data = this.navigation_event_data
				else
					this.target_data = this.problem_event_data
					
				
			}
		}
	}

</script>


<style></style>