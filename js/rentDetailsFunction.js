
//获取日期
function getDate (datestr) {
    var temp = datestr.split("-");
    if (temp[1] === '01') {
        temp[0] = parseInt(temp[0],10) - 1;
        temp[1] = '12';
    } else {
        temp[1] = parseInt(temp[1],10) - 1;
    }
    //new Date()的月份入参实际都是当前值-1
    var date = new Date(temp[0], temp[1], temp[2]);
    return date;
}
//删除数组中的指定元素
Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
	if (this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
	this.splice(index, 1);
	}
};
//向数组指定位置添加元素
Array.prototype.insert = function (index, item) {  
  this.splice(index, 0, item);  
};  
//数组去重
Array.prototype.unique3 = function(){
	 var res = [];
	 var json = {};
	 for(var i = 0; i < this.length; i++){
	  if(!json[this[i]]){
	   res.push(this[i]);
	   json[this[i]] = 1;
	  }
	 }
	 return res;
}
//计算天数差
function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式  
   var  aDate,  oDate1,  oDate2,  iDays  
   aDate  =  sDate1.split("-")  
   oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为12-18-2006格式  
   aDate  =  sDate2.split("-")  
   oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
   iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
   return  iDays  
}   
//加月份
function DateAdd(number, date) {
	var date=new Date(date); 
	date.setMonth(date.getMonth() + number);
    return date;
}
//加日期
function addDate(date,days){ 
    var d=new Date(date); 
    d.setDate(d.getDate()+days); 
    var m=d.getMonth()+1; 
    return d.getFullYear()+'-'+m+'-'+d.getDate(); 
}
//减日期
function minusDate1(date,days){ 
   var d=new Date(date); 
    d.setDate(d.getDate()-days); 
    var m=d.getMonth()+1; 
    return d.getFullYear()+'-'+m+'-'+d.getDate(); 
}
//时间大小比较
function compareTime(time1,time2){ 
	time1=new Date(time1).format("yyyy-MM-dd");
	time2=new Date(time2).format("yyyy-MM-dd");
	var date1 = new Date(time1); 
	var date2 = new Date(time2);	
	if(date1>date2) return true;
	return false;	
}

//方式一周期区间计算
function wayOneSection(paymentmode,wayoneStartTime,wayoneCompactEndTime){
    var periodicInterval=[];//周期区间
    for(var i=0;wayoneStartTime<=wayoneCompactEndTime;i++){
        //计算区间结束时间
        var newDate = DateAdd(paymentmode, wayoneStartTime);
        endTime=minusDate1(newDate.toLocaleDateString(),1);
        endTime=new Date(endTime).format("yyyy-MM-dd");
        //30,31号做特殊判断
        var month5=new Date(endTime).getMonth()+1;
        var year5=new Date(endTime).getFullYear();
        var lastDay5=getLastDay(year5,month5);
        if(new Date(wayoneStartTime).getDate()==29){
            endTime=year5+"-"+month5+"-"+"28";
            endTime=new Date(endTime).format("yyyy-MM-dd");
        }
        if(new Date(wayoneStartTime).getDate()==30){
            if(endTime==year5+"-"+"03"+"-"+"01"){
                var lastDay6=getLastDay(year5,2);
                endTime=year5+"-"+"02"+"-"+lastDay6;
                endTime=new Date(endTime).format("yyyy-MM-dd");
            }else{
                endTime=year5+"-"+month5+"-"+"29";
                endTime=new Date(endTime).format("yyyy-MM-dd");
            }
        }
        if(new Date(wayoneStartTime).getDate()==31){
            if(endTime==year5+"-"+"03"+"-"+"02"||endTime==year5+"-"+"02"+"-"+"28"||endTime==year5+"-"+"02"+"-"+"29"){
                var lastDay6=getLastDay(year5,2);
                endTime=year5+"-"+"02"+"-"+lastDay6;
                endTime=new Date(endTime).format("yyyy-MM-dd");
            }else{
                endTime=year5+"-"+month5+"-"+"30";
                endTime=new Date(endTime).format("yyyy-MM-dd");
            }
        }
        if(endTime>wayoneCompactEndTime){
            endTime=wayoneCompactEndTime;
        }
        //向区间数组放入区间
        periodicInterval.push(wayoneStartTime+"~"+endTime);
        //计算下次区间开始时间
        wayoneStartTime=addDate(endTime,1);
        wayoneStartTime=new Date(wayoneStartTime).format("yyyy-MM-dd");
    }
    return periodicInterval;
}
//方式二周期区间计算
function waytwoSection(paymentmode,waytwoStartTime,waytwoCompactEndTime,periodConversionTime){
    var periodicInterval=[];//周期区间
    var iEndTime=minusDate1(periodConversionTime,1);
    iEndTime=new Date(iEndTime).format("yyyy-MM-dd");
	var iStartTime = waytwoStartTime+ "~" +iEndTime;
        for (var i = 0; periodConversionTime <= waytwoCompactEndTime; i++) {
            //计算区间结束时间
            var modetwoNewDate = DateAdd(Number(paymentmode), periodConversionTime);
            modetwoEndTime = minusDate1(modetwoNewDate.toLocaleDateString(), 1);
            modetwoEndTime = new Date(modetwoEndTime).format("yyyy-MM-dd");
            var month10 = new Date(modetwoEndTime).getMonth() + 1;
            var year10 = new Date(modetwoEndTime).getFullYear();
            var lastDay10 = getLastDay(year10, month10);
            var endTime10 = year10 + "-" + month10 + "-" + lastDay10;
            endTime10 = new Date(endTime10).format("yyyy-MM-dd");
            if (modetwoEndTime != endTime10) {
                modetwoEndTime = endTime10;
            }
            if (modetwoEndTime > waytwoCompactEndTime) {
                modetwoEndTime = waytwoCompactEndTime;
            }
            //向区间数组放入区间
            periodicInterval.push(periodConversionTime + "~" + modetwoEndTime);
            //计算下次区间开始时间
            periodConversionTime = addDate(modetwoEndTime, 1);
            periodConversionTime = new Date(periodConversionTime).format("yyyy-MM-dd");
        }
        periodicInterval.unshift(iStartTime);
        return periodicInterval;
}
//根据递增率算区间
function inRateDurationTime(increaseRateArray,durationTimeArray) {
	if(increaseRateArray.length>0){
		//添加递增率后的时间段展示开始
		for(var i=0;i<increaseRateArray.length;i++){
			var rateTime1=increaseRateArray[i].split("/")[0];//时间点
			for(var j=0;j<durationTimeArray.length;j++){
				var timeStart0=durationTimeArray[j].split("~")[0];//区间开始时间
				var timeEnd0=durationTimeArray[j].split("~")[1];//区间结束时间
				//递增点在区间中间的
				if(compareTime(rateTime1,timeStart0)&&compareTime(timeEnd0,rateTime1)){
					//区间
					var increaseEndTimeOne=minusDate1(rateTime1,1);
					increaseEndTimeOne=new Date(increaseEndTimeOne).format("yyyy-MM-dd");
					durationTimeArray.splice(j,1,timeStart0+"~"+increaseEndTimeOne,rateTime1+"~"+timeEnd0);
					break;
				}
			}
		}
	}
}
//根据单价折扣计算区间
function discountDurationTime(discountEndTime,durationTimeArray) {
		//添加递增率后的时间段展示开始
		var rateTime1= discountEndTime;
		var durationTimeArrayOne=[].concat(durationTimeArray);
		for(var j=0;j<durationTimeArrayOne.length;j++){
			var timeStart0=durationTimeArrayOne[j].split("~")[0];//区间开始时间
			var timeEnd0=durationTimeArrayOne[j].split("~")[1];//区间结束时间
			//递增点在区间中间的
			if(compareTime(rateTime1,timeStart0)&&compareTime(timeEnd0,rateTime1)){
				//区间
				var discountEndTimeOne=addDate(rateTime1,1);
				discountEndTimeOne=new Date(discountEndTimeOne).format("yyyy-MM-dd");
				durationTimeArrayOne.splice(j,1,timeStart0+"~"+rateTime1,discountEndTimeOne+"~"+timeEnd0);
				break;
			}
		}		
	return durationTimeArrayOne;
}
//付款日函数
function payDate(durationTime,rentDate,compact_signing_time) {
	    var payDay=[];
		for(var i=0;i<durationTime.length;i++){
			var timeStart0=durationTime[i].split("~")[0];//区间开始时间
		var newDate3 = timeStart0;
		var startTimeFormat=new Date(newDate3);
		var month=startTimeFormat.getMonth()+1;
		var year=startTimeFormat.getFullYear();
		var lastDay=getLastDay(year,month);
		var feblastDay=getLastDay(year,2);
		if(rent_way_typeFlag=="1"){
			if(new Date(timeStart0).getDate()>=rentDate){
				if(rentDate==31){
					var lastDay=year+"-"+month+"-"+lastDay;
					lastDay=new Date(lastDay).format("yyyy-MM-dd");
					payDay.push(lastDay);
				}else if((rentDate==30||rentDate==29)&&month==2){
					var feblastDay=year+"-"+month+"-"+feblastDay;
					feblastDay=new Date(feblastDay).format("yyyy-MM-dd");
					payDay.push(feblastDay);
				}else{
					var rentTime=year+"-"+month+"-"+rentDate;
					rentTime=new Date(rentTime).format("yyyy-MM-dd");
					payDay.push(rentTime);
				}
			}else{
				if(month==1){
					month=13;
				}
				if(rentDate==31){
					var lastDay1=getLastDay(year,month-1);
					var lastDay=year+"-"+(month-1)+"-"+lastDay1;
					lastDay=new Date(lastDay).format("yyyy-MM-dd");
					payDay.push(lastDay);
				}else if((rentDate==30||rentDate==29)&&(month-1)==2){
					var feblastDay=year+"-"+(month-1)+"-"+feblastDay;
					feblastDay=new Date(feblastDay).format("yyyy-MM-dd");
					payDay.push(feblastDay);
				}else{
					var rentTime=year+"-"+(month-1)+"-"+rentDate;
					rentTime=new Date(rentTime).format("yyyy-MM-dd");
					payDay.push(rentTime);
				}
			}
		}else if(rent_way_typeFlag=="2"){
			var rentOneTime=minusDate1(newDate3,rentDate);
			rentOneTime=new Date(rentOneTime).format("yyyy-MM-dd");
			payDay.push(rentOneTime);
		}
	}
	//将第一个付款日替换成合同签订时间;
	payDay.splice(0,1,new Date(compact_signing_time).format("yyyy-MM-dd"));
	return payDay;
}
//单价计算函数
function countPrice(priceArry,durationTime,increaseRate) {
	//6.单价计算
	var lastPrice =[];
	var arryNum=0//递增的最后一个数组下标
	var arryNumPrice=0//递增的最后一个数组中的单价
    var bigLastPrice=[];//单价大数组
	var originalPrice = [];//原始单价数组
	for(var z=0;z<priceArry.length;z++){
		bigLastPrice[z]=[];//二维数组的行
        originalPrice[z] = [];
		lastPrice=bigLastPrice[z];//二维数组的列
		for(var i=0;i<durationTime.length;i++){
			var timeStart0=durationTime[i].split("~")[0];//区间开始时间
			var timeEnd0=durationTime[i].split("~")[1];//区间结束时间
			if(i==0){
				var moneyOne=priceArry[z];//经过递增以后的单价
			}else{
				var moneyOne=bigLastPrice[z][i-1];
			}
			bigLastPrice[z][i]=moneyOne;//每个区间所对应的几种单价
            originalPrice[z][i]= priceArry[z];
			var oldPerPirce0=bigLastPrice[z][i];
			//如果有递增率情况
			if(increaseRate.length>0){
				for(var j=0;j<increaseRate.length;j++){
					var rateTime1=increaseRate[j].split("/")[0];//时间点
					var rateTime2=increaseRate[j].split("/")[1].split("#")[0];//递增率
					var dateType=increaseRate[j].split("/")[1].split("#")[1];//递增类型
					//递增率小于结束时间大于等于开始时间
					if(compareTime1(rateTime1,timeStart0)&&compareTime1(timeEnd0,rateTime1)){
						//此处要判断是%还是元
						if(dateType=="%"){
							//%递增
							lastPrice.splice(i,1,(Number(1+rateTime2/100)*Number(oldPerPirce0)).toFixed(2));
							arryNum=j;
							arryNumPrice=(Number(1+rateTime2/100)*Number(oldPerPirce0)).toFixed(2);
							console.log("6666666666")
							console.log(arryNumPrice)
							console.log("6666666666")
							break;
						}else{
							//元递增
							lastPrice.splice(i,1,(Number(rateTime2)+Number(oldPerPirce0)).toFixed(2));
							arryNum=j;
							arryNumPrice=(Number(rateTime2)+Number(oldPerPirce0)).toFixed(2);
							console.log("88888888888888")
							console.log(arryNumPrice)
							console.log("88888888888888")
							break;
						}
					}
				}
			}
		}
	}
	var obj = new Object();
    obj.bigLastPrice = bigLastPrice;
    obj.originalPrice = originalPrice;
	return obj;
}
//折扣单价计算函数
function discountPrice(priceArryOne,durationTimeOne,durationTime,discountRate,discountEndTime,discountStartTime) {
	//6.单价计算
	var arrayIndex=0//添加递增率后的数组索引
	var arrayStartIndex=0;//折扣开始时间周期索引
	var rateTime1= discountEndTime;
	var rateTime2= discountStartTime;
	// var durationTimeTwo = [].concat(durationTimeOne);
	var durationTimeThree = [].concat(durationTime);
	var priceArryTwo=[].concat(priceArryOne);
    for(var j=0;j<durationTimeThree.length;j++){
        var timeStart0=durationTimeThree[j].split("~")[0];//区间开始时间
        var timeEnd0=durationTimeThree[j].split("~")[1];//区间结束时间
        //递增点在区间中间的
        if(compareTime1(rateTime1,timeStart0)&&compareTime1(timeEnd0,rateTime1)){
            //区间
        	arrayIndex=j;
            break;
        }
    }
    for(var i=0;i<durationTimeThree.length;i++){
        var timeStart0=durationTimeThree[i].split("~")[0];//区间开始时间
        var timeEnd0=durationTimeThree[i].split("~")[1];//区间结束时间
        //递增点在区间中间的
        if(compareTime1(rateTime2,timeStart0)&&compareTime1(timeEnd0,rateTime2)){
            //区间
            arrayStartIndex=i;
            break;
        }
    }
    for(var i=0;i<priceArryTwo.length;i++){
    	var priceColum=priceArryTwo[i];
    	for(var j=0;j<priceArryTwo[0].length;j++){
    		if(j==arrayIndex){
    			priceColum.splice(j,1,priceArryTwo[i][j],priceArryTwo[i][j]);
    		}
    	}
    	for(var j=arrayStartIndex;j<=arrayIndex;j++){
    		priceArryTwo[i][j]=(Number(priceArryTwo[i][j])*Number(discountRate/10)).toFixed(2);
    	}
    }
	return priceArryTwo;
}
//金额计算函数

function CalMoney(bigLastPrice,durationTime,arearArry,flag,priceFlagOne) {
	//金额计算
	//每个区间传入开始时间，结束时间，计算金额
	//天数差计算函数
	var biglastMoney=[];//金额大数组
	var totalBigMoney=[];//总金额大数组
	for(var z=0;z<bigLastPrice.length;z++){
		biglastMoney[z]=[];
		lastMoney=biglastMoney[z];
		for(var i=0;i<durationTime.length;i++){
			var dateStart=durationTime[i].split("~")[0];//区间开始时间
			var dateEnd=durationTime[i].split("~")[1];//区间结束时间
            var month3=new Date(dateEnd).getMonth()+1;
            var year3=new Date(dateEnd).getFullYear();
            var lastDay3=getLastDay(year3,month3);
			//调用函数
			if(flag==1){
                //方式一
				var monthDiff=countMoney(dateStart,dateEnd).split("&")[0];//两日期相差几个月
				var dateDiff=countMoney(dateStart,dateEnd).split("&")[1]//两日期相差不满月的天数
                if(priceFlagOne==1){
                    var countMoney9=(Number(monthDiff)+1)*Number(bigLastPrice[z][i])*Number(arearArry[z])+dateDiff*((Number(bigLastPrice[z][i])*12/365))*Number(arearArry[z]);
                    lastMoney.push(countMoney9.toFixed(2));
                }else{
                    //按元/m²·天
                    var countMoney9=(Number(monthDiff)+1)*((Number(bigLastPrice[z][i])*365/12))*Number(arearArry[z])+dateDiff*Number(bigLastPrice[z][i])*Number(arearArry[z]);
                    lastMoney.push(countMoney9.toFixed(2));
                }

			}else if(flag==2){
                //方式二		
				if(i==0){
					var monthDiff=countMoney(dateStart,dateEnd).split("&")[0];//两日期相差几个月
					var dateDiff=countMoney(dateStart,dateEnd).split("&")[1]//两日期相差不满月的天数
	                if(priceFlagOne==1){          
	                    var countMoney9=(Number(monthDiff)+1)*Number(bigLastPrice[z][i])*Number(arearArry[z])+dateDiff*((Number(bigLastPrice[z][i])/Number(lastDay3)))*Number(arearArry[z]);
	                    lastMoney.push(Number(countMoney9.toFixed(2)));
	                }else{
	                    //按元/m²·天
	                    var countMoney9=(Number(monthDiff)+1)*((Number(bigLastPrice[z][i])*12/365))*Number(arearArry[z])+dateDiff*Number(bigLastPrice[z][i])*Number(arearArry[z]);
	                    lastMoney.push(countMoney9.toFixed(2));
	                }					
				}else{
					var monthDiff=countDateDiff(dateStart,dateEnd).split("&")[0];//两日期相差几个月
					var dateDiff=countDateDiff(dateStart,dateEnd).split("&")[1]//两日期相差不满月的天数
	                if(priceFlagOne==1){          
	                    var countMoney9=(Number(monthDiff)+1)*Number(bigLastPrice[z][i])*Number(arearArry[z])+dateDiff*((Number(bigLastPrice[z][i])/Number(lastDay3)))*Number(arearArry[z]);
	                    lastMoney.push(Number(countMoney9.toFixed(2)));
	                }else{
	                    //按元/m²·天
	                    var countMoney9=(Number(monthDiff)+1)*((Number(bigLastPrice[z][i])*12/365))*Number(arearArry[z])+dateDiff*Number(bigLastPrice[z][i])*Number(arearArry[z]);
	                    lastMoney.push(countMoney9.toFixed(2));
	                }
	    		}
			}
		}
	}
	//求每个区间的金额总和
	for(var i=0;i<durationTime.length;i++){
		var sum=0;
		for(var z=0;z<biglastMoney.length;z++){
			sum+=Number(biglastMoney[z][i]);
		}
		totalBigMoney.push(sum);
	}
    var names=new Array(totalBigMoney,biglastMoney);
    return names;
}
//方式一天数差计算函数
function countMoney(dateStart,dateEnd){
	var minusDayRemainder=0;//天数差
	var startTime2=dateStart;
	var endTime8=dateEnd;
	var endTime2="";
	var newDate5= DateAdd(1,startTime2);
	var endTime3=minusDate1(newDate5.toLocaleDateString(),1);
	endTime3=new Date(endTime3).format("yyyy-MM-dd");
	var month3=new Date(endTime3).getMonth()+1;
	var year3=new Date(endTime3).getFullYear();
	var lastDay3=getLastDay(year3,month3);
	if(new Date($("#compact_start_time").val()).getDate()==29){
		endTime3=year3+"-"+month3+"-"+"28";
		endTime3=new Date(endTime3).format("yyyy-MM-dd");
	}
	if(new Date($("#compact_start_time").val()).getDate()==30){
		if(endTime3==year3+"-"+"03"+"-"+"01"){
			var lastDay3=getLastDay(year3,2);
			endTime3=year3+"-"+"02"+"-"+lastDay3;
			endTime3=new Date(endTime3).format("yyyy-MM-dd");
		}else{
			endTime3=year3+"-"+month3+"-"+"29";
			endTime3=new Date(endTime3).format("yyyy-MM-dd");
		}
	}
	if(new Date($("#compact_start_time").val()).getDate()==31){
		if(endTime3==year3+"-"+"03"+"-"+"02"||endTime3==year3+"-"+"02"+"-"+"28"||endTime3==year3+"-"+"02"+"-"+"29"){
			var lastDay3=getLastDay(year3,2);
			endTime3=year3+"-"+"02"+"-"+lastDay3;
			endTime3=new Date(endTime3).format("yyyy-MM-dd");
		}else{
			endTime3=year3+"-"+month3+"-"+"30";
			endTime3=new Date(endTime3).format("yyyy-MM-dd");
		}
	}
	var number=0;
	if(startTime2==endTime8){
		//开始和结束相等
		minusDayRemainder=1;
		number=-1;
	}else{
		if(endTime3>endTime8){
			//开始与结束不足一个月
			number=-1;
			minusDayRemainder=DateDiff(endTime8,startTime2)+1;//天数差余数
		}else{
			//大于一个月
			for(var i=0;endTime3<endTime8;i++){
				endTime3=endTime2;
				var newDate4= DateAdd(1,startTime2);
				endTime2=minusDate1(newDate4.toLocaleDateString(),1);
				endTime2=new Date(endTime2).format("yyyy-MM-dd");
				var month2=new Date(endTime2).getMonth()+1;
				var year2=new Date(endTime2).getFullYear();
				var lastDay2=getLastDay(year2,month2);
				if(new Date($("#compact_start_time").val()).getDate()==29){
					endTime2=year2+"-"+month2+"-"+"28";
					endTime2=new Date(endTime2).format("yyyy-MM-dd");
				}
				if(new Date($("#compact_start_time").val()).getDate()==30){
					if(endTime2==year2+"-"+"03"+"-"+"01"){
						var lastDay2=getLastDay(year2,2);
						endTime2=year2+"-"+"02"+"-"+lastDay2;
						endTime2=new Date(endTime2).format("yyyy-MM-dd");
					}else{
						endTime2=year2+"-"+month2+"-"+"29";
						endTime2=new Date(endTime2).format("yyyy-MM-dd");
					}
				}
				if(new Date($("#compact_start_time").val()).getDate()==31){
					if(endTime2==year2+"-"+"03"+"-"+"02"||endTime2==year2+"-"+"02"+"-"+"28"||endTime2==year2+"-"+"02"+"-"+"29"){
						var lastDay2=getLastDay(year2,2);
						endTime2=year2+"-"+"02"+"-"+lastDay2;
						endTime2=new Date(endTime2).format("yyyy-MM-dd");
					}else{
						endTime2=year2+"-"+month2+"-"+"30";
						endTime2=new Date(endTime2).format("yyyy-MM-dd");
					}
				}
				if(endTime2>endTime8){
					break;
				}
				startTime2=addDate(endTime2,1);
				startTime2=new Date(startTime2).format("yyyy-MM-dd");
				number=i;
			}
			minusDayRemainder=DateDiff(dateEnd,endTime3);//天数差余数
			//console.log(minusDayRemainder+"%%%%%"+Number(number+1))
		}
	}
	return number+"&"+minusDayRemainder;
}
//方式二天数差计算函数
function countDateDiff(dateStart,dateEnd){
	var minusDayRemainder=0;//天数差
	var startTime2=dateStart;
	var endTime8=dateEnd;
	var endTime2="";
	var newDate5= DateAdd(1,startTime2);
	var endTime3=minusDate1(newDate5.toLocaleDateString(),1);
	endTime3=new Date(endTime3).format("yyyy-MM-dd");
	var number=0;
	if(startTime2==endTime8){
		//开始和结束相等
		minusDayRemainder=1;
		number=-1;
	}else{
		if(endTime3>endTime8){
			//开始与结束不足一个月
			number=-1;
			minusDayRemainder=DateDiff(endTime8,startTime2)+1;//天数差余数
		}else{
			//大于一个月
			for(var i=0;endTime3<endTime8;i++){
				endTime3=endTime2;			
				endTime2=getNextMonth(startTime2,1);
				endTime2=new Date(endTime2).format("yyyy-MM-dd");
				if(endTime2>endTime8){
					break;
				}
				startTime2=addDate(endTime2,1);
				startTime2=new Date(startTime2).format("yyyy-MM-dd");
				number=i;
			}
			minusDayRemainder=DateDiff(dateEnd,endTime3);//天数差余数
		}
	}
	return number+"&"+minusDayRemainder;
}
//时间大小比较2
function compareTime1(time1,time2){ 
	time1=new Date(time1).format("yyyy-MM-dd");
	time2=new Date(time2).format("yyyy-MM-dd");
	var date1 = new Date(time1); 
	var date2 = new Date(time2);
	if(date1>=date2) return true;
	return false;	
}
//格式转化
Date.prototype.format =function(format){
	var o = {
	"M+" : this.getMonth()+1, //month
	"d+" : this.getDate(), //day
	"h+" : this.getHours(), //hour
	"m+" : this.getMinutes(), //minute
	"s+" : this.getSeconds(), //second
	"q+" : Math.floor((this.getMonth()+3)/3), //quarter
	"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
	(this.getFullYear()+"").substr(4- RegExp.$1.length));
	for(var k in o)if(new RegExp("("+ k +")").test(format))
	format = format.replace(RegExp.$1,
	RegExp.$1.length==1? o[k] :
	("00"+ o[k]).substr((""+ o[k]).length));
	return format;
}
//获取当月最后一天
function getLastDay(year,month) {         
     var new_year = year;    //取当前的年份          
     var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）          
     if(month>12) {         
      new_month -=12;        //月份减          
      new_year++;            //年份增          
     }         
     var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天          
     return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期          
}
//当前日期加几个月
function getNextMonth(date,number) {  
    var arr = date.split('-');  
    var year = arr[0]; //获取当前日期的年份  
    var month = arr[1]; //获取当前日期的月份  
    var day = arr[2]; //获取当前日期的日  
    var days = new Date(year, month, 0);  
    days = days.getDate(); //获取当前日期中的月的天数  
    var year2 = year;  
    var month2 = parseInt(month) + number;  
    if (month2 == 13) {  
        year2 = parseInt(year2) + 1;  
        month2 = 1;  
    }  
    while (month2 > 12) {
    	year2++;
        month2 -= 12;
    }
    var day2 = day;  
    var days2 = new Date(year2, month2, 0); 
    days2 = days2.getDate();
    if (day2 > days2) {  
        day2 = days2;  
    }  
    if (month2 < 10) {  
        month2 = '0' + month2;  
    }  
    var t2 = year2 + '-' + month2 + '-' + day2; 
    if((month2==02&&day>=29&&days2!=29)||((month2==04||month2==06||month2==09||month2==11)&&day==31)){
    }else if(month2==02&&days2==29){
    	t2=minusDate1(t2,1)
    }else{
    	t2=minusDate1(t2,1)
    }
    return t2;  
}    
