<template>
 <div>
    <div class="search">
        <div class="coding">
            <span class="post">岗位编码:</span><input class="txtPost" type="text"/>
        </div>
        <div class="coding">
            <span class="post">岗位名称:</span><input class="txtPost" type="text"/>
        </div>
        <div class="coding">
            <span class="post">岗位状态:</span>
            <select class="all">
                <option value="所有">所有</option>
                <option value="正常">正常</option>
                <option value="停用">停用</option>
            </select>
        </div>
        <div class="coding">
            <fieldset class="layui-elem-field site-demo-button">
              <div class="btn">
                    <button class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon layui-icon-search"></i>搜索</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normaler"><i class="layui-icon layui-icon-refresh-1
"></i>重置</button>
              </div>
            </fieldset>
            
        </div>
    </div>
    <div class="sheet">
        <div class="btn-panel">
            <div class="btn-left">
                <fieldset class="layui-elem-field site-demo-button">
                <div>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel"><i class="layui-icon layui-icon-add-1"></i> 新增</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalele"><i class="layui-icon layui-icon-edit"></i> 修改</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalels"><i class="layui-icon layui-icon-close"></i> 删除</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalelg"><i class="layui-icon layui-icon-download-circle"></i> 导出</button>
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
                            <span style="font-size:12px;color:#676a6c">岗位编号</span>
                        </td>
                        <td style="width:169.6px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">岗位编码</span>
                        </td>
                        <td style="width:170.4px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">岗位名称</span>
                        </td>
                        <td style="width:170.4px;text-indent:10px">
                            <span style="font-size:12px;color:#676a6c">显示顺序</span>
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
                       <span style="font-size:12px;color:#676a6c">ceo</span>
                    </td>
                    <td style="text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">董事长</span>
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
                                <i class="layui-icon layui-icon-close"></i>
                                删除
                            </button>
                    </td>
                </tr>
            </table>
    </div>
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
            }
    }
}
</script>

<style scoped>
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
</style>