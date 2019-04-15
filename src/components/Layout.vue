<template>
<el-container>
  <el-aside width="20%">
    <div class="title">
      
      <h1>Learning Analytics Server</h1>
    </div>
    
    <el-col>
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-info"></i>
        <span>Overview</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Courses</span>
        </template>
        <el-menu-item-group title="edX">
          <el-menu-item index="2-1">COMP102x</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Moodle">
          <el-menu-item index="2-2">Vjx</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Trumptech">
          <el-menu-item index="2-3">Learnlex</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>Model</span>
      </el-menu-item>

    </el-menu>
  </el-col>


  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>



</template>

<script>
  import { mapState, mapActions } from 'vuex'
  // import TheHeader from './TheHeader'

  export default{
    methods:{
      handleOpen(){
        return
      },
      handleClose(){
        return
      }
    }

  }

  // export default {
  //   components: {
  //     TheHeader
  //   },
  //   data () {
  //     return {
  //       isCollapsed: false
  //     }
  //   },
  //   computed: {
  //     isStudent () {
  //       return this.user.role === 'student'
  //     },
  //     menuitemClasses () {
  //       return [
  //         'menu-item',
  //         this.isCollapsed ? 'collapsed-menu' : ''
  //       ]
  //     },
  //     activeName () {
  //       const rootName = 'PnR'

  //       function findActiveRouteWithCurrentName (routes, name) {
  //         let result
  //         routes.some(route => {
  //           if (route.name === name) {
  //             result = routes.find(route => ['', '/'].includes(route.path))
  //             if (result.name === rootName) {
  //               result = route
  //             }
  //             return true
  //           } else if (Array.isArray(route.children)) {
  //             result = findActiveRouteWithCurrentName(route.children, name)
  //             return !!result
  //           }
  //           return false
  //         })
  //         return result
  //       }

  //       const activeRoute = findActiveRouteWithCurrentName(this.$router.options.routes, this.$route.name)
  //       return activeRoute ? activeRoute.name : this.$route.name
  //     },
  //     ...mapState('app', ['user'])
  //   },
  //   methods: {
  //     menuSelect (selected) {
  //       this.$router.push({ name: selected })
  //     }
  //   }
  // }
</script>

<style>

.el-aside{
  background: #545c64;
  color: white;
  min-height: 100vh;
}

.title{
  padding: 22px;
  background: #434A50;
}
</style>
