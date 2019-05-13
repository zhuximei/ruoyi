<template>
<div>
    <div class="layui-layout layui-layout-admin">
    <div class="layui-header layui-headere ">
        <div class="layui-logo layui-logos">RUOYi</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-spread-left"></i></a></li> 
        </ul>
        <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-video">&nbsp;&nbsp;视频教程</i></a></li>
            <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-help">&nbsp;&nbsp;开发文档</i></a></li>
            <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-tabs">&nbsp;&nbsp;全屏显示</i></a></li>
        <li class="layui-nav-item">
            <a  class="xiaoming" href="javascript:;">
            <img src="../assets/img/profile.jpg" class="layui-nav-img">
            小明
            </a>
            <dl class="layui-nav-child">
            <dd><a href=""><i class="layui-icon layui-icon-friends">&nbsp;&nbsp;个人中心</i></a></dd>
            <dd><a href=""><i class="layui-icon layui-icon-edit">&nbsp;&nbsp;修改密码</i></a></dd>
            <dd><a href=""><i class="layui-icon layui-icon-close">&nbsp;&nbsp;退出登录</i></a></dd>
            </dl>
        </li>
        </ul>
    </div>
    
    <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree layui-navFont" lay-filter="test">
            <li class="admin">
                <div class="admin_left">
                    <img src="../assets/img/profile.jpg"/>
                </div>
                <div class="admin_right">
                    <div class="admin_top"><h3>admin</h3></div>
                    <div class="admin_bottom">
                       <a href=""><i class="layui-icon layui-icon-circle-dot">&nbsp;<span>在线</span></i></a>
                       <a class="logout" href=""><i class="layui-icon layui-icon-spread-left">&nbsp;<span>注销</span></i></a>
                    </div>
                </div>
            </li>
            <li class="layui-nav-item layui-nav-itemed">
            <a class="index" href="javascript:;"><i class="layui-icon layui-icon-home">&nbsp;&nbsp;主页</i></a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">了解若依</a></dd>
            </dl>
            </li>
            <li class="layui-nav-item">
            <a href="javascript:;"><i class="layui-icon layui-icon-set-sm">&nbsp;&nbsp;系统管理</i></a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">用户管理</a></dd>
                <dd><a href="javascript:;">角色管理</a></dd>
                <dd><a href="">菜单管理</a></dd>
                <dd><a href="javascript:;">部门管理</a></dd>
                <dd><router-link to="/RyPostAdminContentSearch">岗位管理</router-link></dd>
                <dd><router-link to="/RyDeAdminContentSearch">字典管理</router-link></dd>
                <dd><a href="javascript:;">参数设置</a></dd>
                <dd><a href="javascript:;">通知公告</a></dd>
                <dd><a href="">日志管理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</a></dd>
            </dl>
            </li>
            <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon layui-icon-video">&nbsp;&nbsp;系统监控</i></a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">在线任务</a></dd>
                <dd><a href="javascript:;">定时任务</a></dd>
                <dd><a href="javascript:;">数据监控</a></dd>
                <dd><a href="javascript:;">服务监控</a></dd>
            </dl>
            </li>
            <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon layui-icon-util">&nbsp;&nbsp;系统工具</i></a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">表单构建</a></dd>
                <dd><a href="javascript:;">代码生成</a></dd>
                <dd><a href="javascript:;">系统接口</a></dd>
            </dl>
            </li>
        </ul>
        </div>
    </div>
    
    <div class="layui-body">
        <!-- 内容主体区域 -->
        <div>
            <RyPostAdminContentHeader/>
            <!-- <AdminContent/> -->
            <router-view>

            </router-view>
        </div>
    </div>
    
    <div class="layui-footer">
        <!-- 底部固定区域 -->
        © layui.com - 底部固定区域
    </div>
    </div>
</div>
</template>
<script>
import RyPostAdminContentHeader from "../components/ry-postAdmin/ry-postAdmin-content-header"
// import AdminContent from "../components/ry-postAdmin/AdminContent"
import RyPostAdminContentSearch from "../components/ry-postAdmin/ry-postAdmin-content-search"
import RyDeAdminContentSearch from "../components/ry-postAdmin/ry-deAdmin-content-search"

 export default{
     name:"RyPostAdmin",
     data(){
         return{
          
         }
     },
     mounted(){
		layui.use('element', function(){
		  var element = layui.element
		})
    },
    components:{
        // AdminContent,
        RyPostAdminContentSearch,
        RyDeAdminContentSearch,
        RyPostAdminContentHeader
    }
 }
</script>
<style scoped>
.layui-logos{
    color: white;
    background: #367fa9;
}
.layui-nav i{
    font-size: 12px;
}
.layui-nav-item .xiaoming{
    font-size: 12px;
}
.layui-headere {
    background: #3c8dbc;
}
.layui-navFont{
    font-size: 12px;
}
.admin{
    width: 100%;
    height:75px;
    background: #2f4050;
    padding-left: 19px;
    padding-top: 18px;
    display: flex;
}
.admin_left{
    width:45px;
    height:45px;
    /* background: yellow; */
    border-radius: 50%;
}
.admin_left img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.admin_right{
    width:110.73px;
    height:43.8px;
    /* background: greenyellow; */
    margin-left: 10px;
}
.admin_right h3{
    font-size:14px;
    color:#deffff;
}
.admin_bottom{
    margin-top: 5px;
}
.admin_bottom .logout{
    margin-left: 5px;
}
.admin_bottom .layui-icon-circle-dot{
    color:#1c84c6;
}
.admin_bottom .layui-icon-spread-left{
    color:#ed535e;
}
.admin_bottom span{
    color: white;
    font-size: 12px;
}
</style>