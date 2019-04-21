<template>
<div>
  <div class="course-title"><h1>Course Code: COMP102x Course Offering: 2T2014</h1></div>
  
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="c
    ard-panel-col">
    <el-card class="card-panel edx-panel">

      <div class="card-panel-description">
        <div class="card-panel-text">
          Total logs received
        </div>
        <div class="card-panel-num">2036541</div>
      </div>
    </el-card>
  </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="c
    ard-panel-col">
    <el-card class="card-panel edx-panel">

      <div class="card-panel-description">
        <div class="card-panel-text">
          Course duration
        </div>
        <div class="card-panel-num">{{course_duration}}</div>
      </div>
    </el-card>
  </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="c
    ard-panel-col">
    <el-card class="card-panel edx-panel">

      <div class="card-panel-description">
        <div class="card-panel-text">
          Update frequency
        </div>
        <div class="card-panel-num">Daily</div>
      </div>
    </el-card>
  </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="c
    ard-panel-col">
    <el-card class="card-panel edx-panel">

      <div class="card-panel-description">
        <div class="card-panel-text">
          Last update
        </div>
        <div class="card-panel-num">22-4-2019</div>
      </div>
    </el-card>
  </el-col>
</el-row>
<br/>
<el-row>
  <highcharts :options="chartOptions"></highcharts>
  </el-row>
  <el-tabs type="border-card">
  <el-tab-pane label="Feature Extraction"><FeatureEx /></el-tab-pane>
  <el-tab-pane label="Model Training">Config</el-tab-pane>
  <el-tab-pane label="Reporting Tools">Role</el-tab-pane>
  <el-tab-pane label="Settings">Settings</el-tab-pane>
</el-tabs>
</div>


</template>

<script>
  import FeatureEx from './FeatureEx'

	export default {
    components:{
      FeatureEx
    },
    data(){
      return{
        course_duration : "17-06-2014 - 06-09-2014",
        chartOptions : {
          // Create multiple x axes, show only one
          xAxis: [{
            type: 'datetime',
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
          }],
          yAxis:{
            min:0,
            max: 300000,
            title: {
              text: 'Number of xAPI logs'
            },
          },
          plotOptions: {
              series: {
                  pointStart: Date.UTC(2019, 0, 1),
                  pointInterval: 3600 * 1000*24
              }
          },
          series: [{
            name: "COMP102x2T2014",
            data: [637, 17719, 15744, 259821, 150381, 106841, 114102, 139301, 175210, 126751, 294475, 243143, 238240, 146771, 137279, 124154, 116599, 233489, 233191, 232460, 118672, 108514, 96998, 115075, 177090, 198718, 203852, 83019, 71334, 68652, 67483, 134321, 128077, 121803, 72543, 69298, 74391, 70825, 126424, 134155, 128722, 66377, 67276, 56175, 53072, 95703, 97488, 91517, 58970, 58972, 62268, 56243, 87758, 89637, 93563, 61913, 51466, 43442, 41928, 82337, 71226, 82056, 38736, 43741, 41043, 35912, 80642, 64452, 58179, 78519, 56996, 48940, 45742, 42923, 52646, 40064, 15154, 14855, 14108, 14951, 14153]
          }],
          credits: {
              enabled: false
          },
          title: {
              text: 'Daily xAPI logs received'
          },
        }
    }
  }   

	}
</script>

<style>
.card-panel-text, .card-panel-num{
  text-align:center;
}

.card-panel-num{
  font-size: 1.5rem;
}

.course-title{
  text-align: center;
}

</style>