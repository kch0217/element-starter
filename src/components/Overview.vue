<template>
  <div>
   <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="c
    ard-panel-col">
    <div class="card-panel edx-panel" @mouseover="chosen='edX'" @mouseout="chosen='None'">
      <div class="card-panel-icon-wrapper icon-people">
        <img class="img-responsive-edx" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/1200px-EdX.svg.png" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">
          Total logs received
        </div>
        <div class="card-panel-num">2036541</div>
      </div>
    </div>
  </el-col>
  <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
    <div class="card-panel moodle-panel" @mouseover="chosen='Moodle'" @mouseout="chosen='None'">
      <div class="card-panel-icon-wrapper icon-message">
        <img class="img-responsive-moodle" src="https://www.changedhost.com/wp-content/uploads/2013/01/BlueHost-Moodle.png" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">
          Total logs received
        </div>
        <div class="card-panel-num">368595</div>
      </div>
    </div>
  </el-col>
  <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
    <div class="card-panel trumptech-panel" @mouseover="chosen='Trumptech'" @mouseout="chosen='None'">
      <div class="card-panel-icon-wrapper icon-money">
        <img class="img-responsive-trumptech" src="http://www.thelearningpartnership.com/media/1206/trumptech.png" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">
          Total logs received
        </div>
        <div class="card-panel-num">145682</div>
      </div>
    </div>
  </el-col>
</el-row>

<el-row :gutter="40">
  <el-col  :xs="12" :sm="12" :lg="16">
    <summarychart :chosen="chosen"/>
  </el-col>
  <el-col  :xs="12" :sm="12" :lg="8">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 v-if="chosen!='None'" class="lms-info-title">{{chosen}}</h1>
        <h1 v-if="chosen=='None'" class="lms-info-title">-</h1>

      </div>

      <div>
        <div class="text item">Total xAPI logs received: {{lmsData[chosen]["totallog"]}}</div>
        <div class="text item">Daily xAPI logs received: {{lmsData[chosen]["dailylog"]}}</div>
        <div class="text item">Average xAPI logs received: {{lmsData[chosen]["averagelog"]}}</div>
        <div class="text item">Last update: {{lmsData[chosen]["lastupdate"]}}</div>
        <div class="text item">Update frequency: {{lmsData[chosen]["updatefrequency"]}}</div>
      </div>
    </el-card>


  </el-col>

</el-row>
<el-row :gutter="40" justify="space-around" type="flex">

  <el-col :xs="12" :sm="12" :lg="8">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <h1  class="lms-info-title">Learning Record Store</h1>


      </div>

      <div>
        <div class="text item">Type: Learning Locker</div>
        <div class="text item">URL: http://localhost:12345</div>
        <div class="text item">Total logs received: 4687322</div>
        <div class="text item">Login Details: 
          <el-popover
          placement="right"
          width="400"
          trigger="click">
          <div>Username: chkwokad@connect.ust.hk</div>
          <div>Password: 123456</div>
          <el-button slot="reference">Click to check</el-button>
        </el-popover>

      </div>
      <div class="text item">MongoDB URL: mongodb://localhost:27017</div>
    </div>
  </el-card>


</el-col>



<el-col  :xs="12" :sm="12" :lg="8">
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <h1 class="lms-info-title">Available Tools</h1>

    </div>

    <div>
      <div class="text item">Learning Performance Prediction</div>
      <div class="text item">Visualization</div>
    </div>
  </el-card>


</el-col>

</el-row>

</div>



</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Summarychart from './SummaryLineChart'

  export default{
    components:{
      Summarychart
    },
    data(){
      return{
        chosen:"None",
        lmsData: 
        {"None": 
        {
         "totallog": 0,
         "dailylog":0,
         'averagelog': 0,
         "lastupdate": '-',
         'updatefrequency': '-'
       },
       "edX":{
        "totallog": 2036541,
        "dailylog":15413,
        'averagelog': 15315,
        "lastupdate": '15/04/2019',
        'updatefrequency': 'Daily'
      },
      "Moodle":{
        "totallog": 368595,
        "dailylog":8413,
        'averagelog': 7615,
        "lastupdate": '15/04/2019',
        'updatefrequency': 'Daily'
      },
      'Trumptech':{
        "totallog": 145682,
        "dailylog":1313,
        'averagelog': 1115,
        "lastupdate": '15/04/2019',
        'updatefrequency': 'Daily'
      }
    },
  }
},
methods:{
  mouseover(){

    return
  }
}

}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    border-radius: 6px;

    .edx-panel {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 0px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }

  .card-panel-icon-wrapper{
    width: 40%;
    height: auto;

  }
  .img-responsive-edx {
    width: 50%;
    height: auto;

  }

  .img-responsive-moodle {
    width: 60%;
    height: auto;

  }

  .img-responsive-trumptech {
    width: 100%;
    height: auto;

  }

  .edx-panel:hover{
    background: #40c9c6;
    transition: all 0.38s ease-out;
  }

  .moodle-panel:hover{
    background: #36a3f7;
    transition: all 0.38s ease-out;
  }

  .trumptech-panel:hover{
    background: #f4516c;
    transition: all 0.38s ease-out;
  }
}

.lms-info-panel{
 height: 450px;
 cursor: pointer;
 font-size: 12px;
 position: relative;
 overflow: hidden;
 color: #666;
 background: #fff;
 box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
 border-color: rgba(0, 0, 0, .05);
 border-radius: 6px;
 text-align: center;

 .lms-info-title{

  font-size: 52px;
}
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card{
  height: 100%;
}

</style>