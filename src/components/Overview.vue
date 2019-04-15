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
          <div class="card-panel-num">345682</div>
        </div>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="0">
    <el-col  :xs="12" :sm="12" :lg="8">
      TST
    </el-col>
    <el-col  :xs="12" :sm="12" :lg="16">
      <summarychart :chosen="chosen"/>
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
        chosen:"None"
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
</style>