<template>
 <div>
    <div class="search">
        <div class="coding">
            <span class="post">字典编码:</span><input class="txtPost" type="text"/>
        </div>
        <div class="coding">
            <span class="post">字典名称:</span><input class="txtPost" type="text"/>
        </div>
        <div class="coding">
            <span class="post">字典状态:</span>
            <select class="all">
                <option value="所有">所有</option>
                <option value="正常">正常</option>
                <option value="停用">停用</option>
            </select>
        </div>
        <div class="coding">
             <span class="post">字典名称:</span><input type="text" class="layui-input" id="test1" placeholder="开始时间">    <span>-</span>   <input type="text" class="layui-input" id="test2" placeholder="结束时间">
            
        </div>
        <fieldset class="layui-elem-field site-demo-button">
              <div class="btn">
                    <button class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon layui-icon-search"></i>搜索</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normaler"><i class="layui-icon layui-icon-refresh-1
"></i>重置</button>
              </div>
            </fieldset>
    </div>
    <div class="sheet">
        <div class="btn-panel">
            <div class="btn-left">
                <fieldset class="layui-elem-field site-demo-button">
                <div>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel" @click="Add"><i class="layui-icon layui-icon-add-1"></i> 新增</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalele"><i class="layui-icon layui-icon-edit"></i> 修改</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalels"><i class="layui-icon layui-icon-close"></i> 删除</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalelg" @click="derive"><i class="layui-icon layui-icon-download-circle"></i> 导出</button>
                </div>
                </fieldset>
            </div>
            <div class="btn-right">
                <i class="layui-icon layui-icon-search"></i>
                <i class="layui-icon layui-icon-refresh-1"></i>
                <i class="layui-icon layui-icon-form"></i>
                <i class="layui-icon layui-icon-app"   @click="asd"></i>
            </div>
            <div class="meau" v-show="reveal">
                <ul class="meauBox">
                    <li>
                        <input type="checkbox" checked="checked"/><span>字典主键</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>字典名称</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>字典类型</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>状态</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>备注</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>创建时间</span>
                    </li>
                    <li>
                        <input type="checkbox" checked="checked"/><span>操作</span>
                    </li>
                </ul>
            </div>
        </div>
            <table class="table" cellspacing="0">
                <thead>
                    <tr>
                        <td style="width:36px;text-align:center">
                            <input type="checkbox">
                        </td>
                        <td style="width:128px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">字典主键</span>
                        </td>
                        <td style="width:169.6px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">字典名称</span>
                        </td>
                        <td style="width:170.4px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">字典类型</span>
                        </td>
                        
                        <td style="width:170.4px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">备注</span>
                        </td>
                        <td style="width:94.4px;text-align:center">
                            <span style="font-size:12px;color:#676a6c">状态</span>
                        </td>
                        <td style="width:256px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">创建时间</span>
                        </td>
                        <td style="width:215.2px;text-align:center">
                            <span style="font-size:12px;color:#676a6c">操作</span>
                        </td>
                    </tr>
                </thead>
                <tr>
                    <td style="text-align:center">
                        <input type="checkbox">
                    </td>
                    <td style="text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">1</span>
                    </td>
                    <td style="text-indent:10px">
                       <span style="font-size:12px;color:#676a6c">用户性别</span>
                    </td>
                    <td style="text-indent:10px">
                        <a href="#" style="font-size:12px;color:#337ab7">sys_user_sex</a>
                    </td>
                    <td style="text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">1</span>
                    </td>
                    <td>
                        <div class="normal">正常</div>
                    </td>
                    <td style="text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">2018_03_16  11:33:00</span>
                    </td>
                    <td>
                            <button class="edit">
                                <i class="layui-icon layui-icon-edit"></i>
                                编辑
                            </button>
                             <button class="edit">
                                <i class="layui-icon  layui-icon-form"></i>
                                列表
                            </button>
                            <button class="edit">
                                <i class="layui-icon layui-icon-close "></i>
                                删除
                            </button>
                    </td>
                </tr>
            </table>
    </div>
    <div class="popup" id="popup" style="display:none">
        <div class="popupBox">
            <form class="popup-form">
                <div class="form-item">
                    <span class="form-lable">字典名称  :</span>
                    <input type="text" class="name"/>
                </div>
                <div class="form-item">
                    <span class="form-lable">字典类型  :</span>
                    <input type="text" class="name"/>
                </div>
                <div class="form-item">
                    <span class="form-lable state">状态 :</span>
                    <input type="radio" checked="checked" name="a" style="margin-left:20px"/><span class="stop">正常</span>
                    <input type="radio" name="a" style="margin-left:20px"/><span class="stop">停用</span>
                </div>
                <div class="form-item">
                    <span class="form-lable remark">备注 :</span>
                    <textarea class="area"></textarea>
                </div>
                <div class="confirm">
                    <button class="yes">确定</button>
                    <button class="yes no">关闭</button>
                </div>
            </form>
        </div>
    </div>
    <div class="export"></div>

</div>
</template> 
<script>

export default {
name:"RyPostAdminContentSearch",
    data() {
        return {
             reveal:false
        }
    },
    methods:{
            asd:function(){
                this.reveal=!this.reveal;
            },
            Add(){
                layui.use('layer', function(){
                var layer = layui.layer;
                layer.open({
                type: 1, 
                title:'添加类型',
                fixed:false,
                maxmin:true,
                shadeClose:true,
                shade:0.3,
                anim:0,
                offset:["140px","394px"],
                area:["800px","467.2px"],
                content: document.querySelector(".popup").innerHTML,
              });
            });
            },
             derive(){
                layui.use('layer', function(){
                var layer = layui.layer;
                layer.open({
                type: 1, 
                title:'添加类型',
                fixed:false,
                maxmin:true,
                shadeClose:true,
                shade:0.3,
                anim:0,
                offset:["140px","394px"],
                area:["800px","467.2px"],
                content: document.querySelector(".popup").innerHTML,
              });
            });
            }
        },
        mounted(){
                layui.use('laydate', function(){
                    var laydate = layui.laydate;
                    //执行一个laydate实例
                    laydate.render({
                    elem: '#test1' //指定元素
                    });
                    laydate.render({
                    elem: '#test2' //指定元素
                    });
                });
          } 
}
</script>

<style scoped>
.search{
    width:96%;
    height:97.6px;
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
    line-height:56px;
    float: left;
}
.coding:nth-child(4){
    width:30%;
    display: flex;
}
.layui-input, .layui-textarea{
    padding-left: 0px!important;
    width: 93px!important;
    margin-top:16px;
    margin-left: 3px;
    height:24px;
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
    margin-left: 2%;
    border: 1px solid #e9e9ea;
    border-radius: 8px;
    margin-top: 12px;
}
.btn-panel{
    width:100%;
    height:33.6px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
     position: relative;
}
.btn-left{
    width:277px;
    height:33.6px;
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

.edit:nth-child(2){
      background:#23c6c8;
      border: 1px solid #23c6c8;
}
.edit:nth-child(3){
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
.meau{
    width:118px;
    height:222px;
    background:white;
    position: absolute;
    top:35px;
    right:12px;
}
.meauBox li{
    padding-left: 25px;
    padding-top: 12px;
}
.meauBox li span{
    margin-left:4px;
    font-size:12px;
    color: #676a6c;
}
.form-item{
    margin-top: 26px;
    margin-left:161px;
     display: flex;
    align-items: center;
}
.form-lable{
    font-size:12px;
    color:#686b6d;
}
.name{
    width:476.66px;
    height:26px;
    margin-left:22px;
}
.state, .remark {
    margin-left:26px;
}
.area{
    margin-left:24px;
    width: 476.66px;
    height:54px;
}
.stop{
    font-size:12px;
    color:#686b6d;
}
.confirm{
    height:54px;
    background: #f0f4f7;
    margin-top:134px;
    border: 1px solid #c7c7c7;
    display: flex;
}
.yes{
    width:56px;
    height:31px;
    background:#0071ce;
    color: white;
    font-size: 13px;
    text-align: center;
    line-height: 32px;
    border-radius: 2px;
    border: 1px solid #0165b6;
    cursor: pointer;
    margin-left:642px;
    margin-top: 10px;
}
.no{
    margin-left:5px;
    background: white;
    border: 1px solid #c0c4cd;
    color: #404a58;
}
</style>