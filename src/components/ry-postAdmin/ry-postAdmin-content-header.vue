<template>
    <div class="layui-tab" lay-allowClose="true">
        <ul class="layui-tab-title">
            <div class="arrow">
               <i class="layui-icon layui-icon-prev"></i> 
            </div> 
            <div class="home_page">
                <h3>首页</h3>
            </div>  
            <li class="layui-this">岗位管理</li>
            <li>字典管理</li>
            <div class="refresh">
                <i class="layui-icon layui-icon-refresh">刷新</i>
            </div>
            <div class="operation"  @click="asd">
                <h4>页签操作</h4><span></span>
            </div>
           
            <div class="right_arrow">
                <i class="layui-icon layui-icon-next"></i>
            </div>
        </ul>
        <div class="close"  v-show="reveal">
                    <a class="current" href="#">关闭当前</a>
                    <a class="current" href="#">关闭其他</a>
                    <a class="current" href="#">全部关闭</a>
                    <a class="current" href="#">全屏显示</a>
        </div>
    </div>
   
</template>
<script>
// import RyPostAdminContentSearch from "./ry-postAdmin-content-search"
export default {
name:"AdminContent",
    data() {
        return {
            reveal:false
        }
    },
    methods:{
            asd:function(){
                this.reveal=!this.reveal;
            }
    }
}
</script>

<style scoped>
.layui-tab-title{
    overflow: visible!important;
}

.layui-tab{
    margin: 0px!important;
}
.arrow{
    width:40px;
    height: 40px;
    /* background: yellow; */
    float: left;
    text-align: center;
    line-height: 40px;
    border: 1px solid #eeeeee;
}
.arrow:hover{
    background:#f2f2f2;
}
.arrow .layui-icon-prev{
   color: #999999;
   font-size: 14px;
}
.home_page{
    width:57px;
    height:40px;
    background:#fafafa;
    float: left;
    line-height: 40px;
    text-align:center;
}
.home_page:hover{
    background: #f2f2f2;
}
.home_page h3{
    font-size:14px;
    color:#999999;
}
.right_arrow{
    width:40px;
    height:40px;
    /* background:tomato; */
    float: right;
    line-height:40px;
    text-align: center;
    border: 1px solid #eeeeee;
}
.right_arrow .layui-icon-next{
    color: #999999;
    font-size: 14px;
}
.right_arrow:hover{
    background: #f2f2f2;
}
.operation{
    width:80px;
    height:40px;
    float: right;
    line-height: 40px;
    text-indent:3px;
    position: relative;
    border: 1px solid #eeeeee;
    cursor: pointer;
}
.operation span{
    width: 0px;
    height: 0px;
    border:5px solid transparent;
    border-top-color: #999999;
    position: absolute;
    top: 18px;
    left:62px;
}
.operation h4{
    font-size:14px;
    color:#999999;
}
.operation:hover{
    background: #f2f2f2;
}
.refresh{
    width:60px;
    height:40px;
    /* background:seagreen; */
    float: right;
    line-height: 40px;
    text-indent:10px;
}
.refresh .layui-icon-refresh{
    font-size:14px;
    color:#999999;
}
.refresh:hover{
    background:#f2f2f2; 
}
.search{
    width:96%;
    height:55px;
    background: #fff;
    margin-left: 2%;
    margin-top: 24px;
    border:1px solid #e9e9ea;
    border-radius: 7px;
    border:1px solid #e9e9ea;
}
.coding{
    width:23%;
    height:56px;
    /* background:salmon; */
    line-height:56px;
    float: left;
}
.post{
    font-size:14px;
    color:#333333;
    margin-left:5%;
}
.txtPost{
    width:67%;
    height:27px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    }
.all{
     width: 67%;
     height: 27px;
     border-radius: 4px;
     border: 1px solid #dddddd;
    }
.layui-btn{
    border-radius: 16px;
}
.layui-btn-normal{
     background: #1ab394!important;
    }
.layui-btn-normaler{
    background: #f8ac59!important;
}
.layui-btn+.layui-btn{
    margin-left: 0px!important;
}
.layui-elem-field{
    border:none!important;
}
.sheet{
    width: 96%;
    height: 320px;
    /* background:thistle; */
    margin-left: 2%;
    border: 1px solid #e9e9ea;
    border-radius: 8px;
    margin-top: 12px;
}
.btn-panel{
    width:100%;
    height:33.6px;
    /* background: sienna; */
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.btn-left{
    width:277px;
    height:33.6px;
    /* background: #1ab394; */
    margin-left: 10px;
}
.btn-left span{
    font-size:14px;
    color:white;
}
.layui-btn-normalel{
    background: #1c84c6!important;
}
.btn-left .layui-btn{
    border-radius:4px;
    height:33.6px;
    line-height: 33.6px;
    font-size: 12px;
}
.layui-icon-add-1{
    font-size: 12px!important;
}
.layui-btn-normalele{
    background: #6dd9c3!important;
}
.layui-btn-normalels{
    background: #f59da6!important;
}
.layui-btn-normalelg{
    background: #f8ac59!important;
}
.btn-right{
    width:168.9px;
    height:32.6px;
    background:white;
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    display:flex;
    margin-right: 12px;
}
.btn-right i{
    width:42.725px;
    height:32.6px;
    background:white;
    display: block;
    text-align: center;
    line-height: 34.59px;
    cursor: pointer;
}
.btn-right i:hover{
    background: #bababa;
    color: white;
}
.btn-right i:nth-child(2){
    border-left: 1px solid #c2c2c2;
    border-right: 1px solid #c2c2c2;
}
.btn-right i:nth-child(3){
    border-right: 1px solid #c2c2c2;
}
.table{
    width:98%;
    height: 40px;
    /* background: #1ab394; */
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 14px;
    border-radius: 3px;
}
thead{
    background:#eff3f8;
}
td{
    height: 40px;
    }
tr{
    height: 40px;
    border-bottom: 1px solid #cccccc;
}
.normal{
    width: 34px;
    height:21px;
    background:#1ab394;
    border-radius:10px;
    margin-left: 31.2px;
    color: white;
    font-size: 12px;
    text-align: center;
    line-height: 21px;
}
.edit{
    width:60px;
    height:27px;
    background:#1c84c6;
    border: 1px solid #1c84c6;
    border-radius: 4px;
    color:white;
    font-size: 12px;
}
.edit:nth-child(1){
    margin-left: 42px;
}
.edit:nth-child(2){
      background:#ed5565;
      border: 1px solid #ed5565;
}
.layui-icon-edit{
    font-size: 12px;
}
.close{
    width:123px;
    height:180px;
    background:white;
    position: absolute;
    top: 42px;
    right:60px;
    z-index:3;
}
.current{
    width:116px;
    height:39px;
    display:block;
    font-size:12px;
    color:#333333;
    text-align: center;
    line-height: 39px;
    border-radius: 4px;
    margin-left:3%;
    margin-bottom: 3%;
    margin-top: 3%;
}
.current:hover{
    background:#cccccc; 
}
</style>