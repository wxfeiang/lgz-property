# 工作台 workbench.html
*  project-detalis.html  顶部 项目详情
*  project-edit.html          编辑


## 批量导入 bulk-import.html   
## 附件页面  accessory.html  
##  打印   票据打印    print.html
##  押金打印  deposit-print.html
##  车量管理   打印  car-print.html
## 临时性缴费的  打印  temporary-print.html
## 楼宇管理   buding-magent.html
*  buding-add.html     添加楼宇
*  buding-edit.html    编辑楼宇

## 业主管理   owner-magent.html  
* owner-add.html        业主添加  
*   owner-addselt.html   业主添加  选择房间

* owner-edit.html          业主修改
* owner-decion.html       业主详情   

##  房客管理 tenants-margent.html
*   tenants-add.html        添加房客
*   tenants-edit.html       修改房客

*  tenants-dection.html    房客详情 
##  租赁合同  lease-contract.html
*   添加合同    lease-contract-add.html  (信息自动赋值   )  
*    详情       lease-contract-dection.html  
*   批量导出  
*   续租        lease-contract-on.html  (没有写)
*   退租       lease-contract-out.html       (动态生成的 日期调用问题)
*   编辑     
*   作废    和删除一样 ()
*   打印


##  仪表管理    instr-manger.html
### 水表管理    water-msg-manger.html
*    添加水表   water-add.html
*    编辑水表   water-edit.html
*    关联房间    with-room.html
### 电表表管理   ammeter-msg-magert.html
*    添加水表    ammeter-add.html
*    编辑水表    ammeter-edit.html
*    关联房间   with-room.html
### 抄表管理   meter-manger.html
*    抄表      meter-add.html
*    编辑水表  
*    
### 水卡管理    water-card.html
*    添加水卡   water-card-add.html
*    编辑水卡  
*    
### 点卡管理   ammeter-card.html
*    添加电卡   ammeter-card-add.html
*    编辑电卡  

### 充值管理   pay-manger.html
*    充值    pay-manger-add.html 
*    编辑 
*    

##  收付款  (页面很类似)  receiving.html
####  物业账单   wy-bill.htmnl
*     未缴账单  wy-unpaid-bills.html
> 收款   proceeds.html
* 已缴账单 wy-paid-in-bills.html
* 减免记录  wy-record.html
* 缴费记录  wy-payment-records.html
> 点击行详情   wy-records-dection.html 
> 开票
> 打印
*  缴费记录明细  wy-payment-decion.html

####   租金账单 rent-bill.html
*  未缴账单  rent-unpaid-bills.html
>    收款   proceeds.html
*  已缴账单 rent-paid-in-bills.html
*  减免 记录   rent-record.html
*  缴费记录  rent-payment-records.html
>   开票
>   打印
>   点击行详情   rent-records-dection.html 
*  缴费记录明细   




####   押金管理  deposit-manger.html
*     添加押金    deposit-add.html   
*     编辑押金
*     退款     deposit-out.html
####   开票管理  bills-manger.html
*    开票   (暂时没有功能)
*    附件  
*    作废
*    打印   (暂时没有功能)
####    预存管理 (prestore.html 总页面)
*  预存信息       prestore-msg.html
>    添加预存     prestore-add.html   类似    添加押金  
>    充值      prestore-top-up.html 
>    记录      prestore-note.html
>    退款      prestore-outs.html
*  退款记录     prestore-out-msg.html

####    临时缴费管理   temporary-manger.html
*   添加临时缴费     temporary-msg-add.html
*   更正      


### 费项设置   cost-set.html
####  收费科目管理    cost-subject-manger.html  ( 页面逻辑没有写 )
*    添加科目   cost-subject-add.html
*    编辑科目

####  收费标准管理 cost-rates-manger.html
*      添加标准     cost-rates-add.html  
*     编辑   
####  收费标准分配   cost-allot.html
*      批量分配 ( 和删除弹框 一样)




##  停车管理   stop-car-manger.html
####   车位管理     carport-manger.html    
*   添加车位   carport-add.html
*   添加车量     carport-car.html 
*    右侧划出车位   rightPark.html 
*    收费   rightPark-charge.html
*    编辑
*    打印
*    开票  
####  车辆管理    cars-manger.html  
*   编辑  页面 和   添加车量     carport-car.html  
*   
####  car-fare-manger.html  车费管理
*   月租缴费记录      temporary-month.html
>    打印   
>      开票     页面暂时没有写
*   管理费缴费记录      carfare-manger.html
>      打印   
>      开票     页面暂时没有写

>     这两个页面一样

*   临时车费记录      temporary-car.html  
*       添加停车费    temporary-add.html
>      打印   
>      开票     页面暂时没有写


##  物业管理 wy-manger.html
### 报障管理   teports-manger.html
*   报障管理   teport-disab-manger.html
>    新增报修   teport-disab-add.html
>    派工       teport-disab-task.html  (页面逻辑没有写)
>    打印
>    附件
>    详情       teport-disab-dection.html
*    工单管理    workorder-manger.html
>    打印
>    附件
>    处理    workorder-dispose.html   (有问题 在写) 
>     选择材料页面   select-materials.html       
>     详情   workorder-dection.html
*   统计分析     teport-analysis.html  (暂时没有)

### 巡更管理   prompter-manger.html
*  没有
###  公共租赁 (单页面)  public-rental.html
*   新增   public-rental-add.html                

###  物品出入 (单页面) goods-out.html
*   审核  goods-audit.html
###  通知公告  (单页面) notification.html 
*  新增    notification-add.html    (有个富文本框)  [可查看文档](https://www.layui.com/demo/layedit.html) 
   
*  编辑




## 仓库管理  warehouse-manger.html
### 仓位管理  warehouse-location.html
### 物品分类 goods-stotr.html
* 新增分类   goods-store-add.html   (有个选择树形菜单)  [可查看文档](https://fly.layui.com/extend/treeSelect/#doc) 
### 物品管理 goods-manger.html  
*  新增物品   goods-more-add.html
* 点击行  详情  goods-manger-desc.html

### 供应商管理 supplier-manger.html
*  新增供应商   supplier-add.html
### 报修领料管理  
### 入库管理  wear-in-manger.html
*  点击单号 详情   wear-in-decs.html
*  新增入库  wearin-add.html
>  新增  wear-add-select.html
### 出库管理  wear-out-manger.html
### 统计报表  warehouse-forms.html
*  库存明细查询表  inventory-detail.html
*　出入库明细表   access-detail.html 
*  领用出库明细表  receive-detail.html 

##  数据经营统计  data-operation.html




# 房间里的菜单  基本与外层菜单一样  弹框部分 少了一些选择 
## 房子剖面图 页面     house.htnl

###  剖面图    house-cutaway.html   // 住宅和楼宇的剖面图展示  加判断 展示
*   添加房间     house-cutaway-add.html
*  批量添加房间     batch-house.html
*  空置房间  的 编辑按钮   house-cutaway-add.htmll
###   右侧划出房间  rightRoom.html
*      入住页面    house-checkin.html
*       重新计费   billing-again.html

>        点击选择 期初明细    house-checkin-select.html
*      抄表       house-meter-add.html
*     添加业主     rightAddoccupancy.html   
*     添加房客    rightAddtenant.html
*     合并房间    merge-house.html  
*     分拆房间   splitRoom.html 
*     变更记录    change-record.html  
>     变更记录点进详情   change-record-dection.html 
>      历史合同详情     change-record-lease.html
#### 基本信息  basic-msg.html
> 业主信息
*  修改   change-ower-msg.html
*  变更   change-owers-msgmew.html
*  详情    basic-msg-dection.html
>  房客信息
*   修改    change-fangke-msg.html
*   变更   change-fangke.html
*   详情   basic-fangke-dection.html
  合同
*  续租  
*  退租
*  编辑
*  作废
*  打印
*  详情   pact-house-dection.html
####  物业账单 wy-house-bill.html
*  批量收款   batch-pay.html
    收款   batc-pay.html
*  提醒  提示信息框
*  点击行显示 详情  wy-house-dection.html
*  添加期初账单   wy-initial.html

*  预缴  wy-house-prepay.html 
*  充值水电 wy-house-prepay2.html
*  撤销 
* 打印
*  开票
*  点击行显示 详情   wy-house-updec.html 
####  租金账单  price-house-bill.html   
*  批量收款    batch-pay.html
*  提醒
*  收款   batc-pay.html
*  点击行 显示详情   price-house-dection.html  

*  撤销
*  打印
*  开票
*  点击行显示详情    price-house-updec.html
####  收费标准  norm-house-bill.html
*   点击开启单元格编辑    
## 业主管理  house-owner-magent.html
* 添加业主   house-owner-add.html
## 房客管理 house-tenants-margent.html
* 添加房客  house-tenants-add.html
## 租赁合同 
*  添加合同  
* 续租
* 退租
* 详情
* 作废
* 打印  (暂时没有 )

##  仪表管理 
##  收付款

## 经营数据 统计    house-data-operation.html
### 基础数据统计  
### 维修统计
### 车位费用统计
### 收益统计
### 财务统计    financial_statistics.html
* 个人收费统计   house-rerson-data.html
* 收费台账   pay-bills.html
* 项目收费统计
* 楼宇收费统计 
* 房间收费统计   





```
所有的缴费方式
 <div class="layui-form-item">
                    <label class="layui-form-label">
                        <span class="myred-color">*</span>缴费方式</label>
                    <div class="layui-input-block">
                        <select name="interest" lay-filter="aihao">
                            <option value="0">现金</option>
                            <option value="1">支票</option>
                            <option value="2">银行代收</option>
                            <option value="3">POS机刷</option>
                            <option value="4">转账</option>
                            <option value="5">支付宝</option>
                            <option value="6">微信</option>
                            <option value="7">其他</option>
                        </select>
                    </div>
                </div>
```
```
红 绿 蓝 颜色类名
.my189 {
	color: #1890ff;
	cursor: pointer;
}

.myred-color {
	color: red;
}
.my-green {
	color: rgba(51, 204, 0, 0.647058823529412);
}
.my--red{
	color: rgba(255, 51, 0, 0.647058823529412);
}
```




