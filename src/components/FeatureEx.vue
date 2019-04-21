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
					}


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