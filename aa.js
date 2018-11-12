var addFlag=false;
			var floorId=[];
			$("#floorStartId").children("option").each(function(index){
				floorId.push($("#floorStartId option").eq(index).attr("floorStartId"));
			})
			$(".addHouseNum1").click(function(){
				//填写信息的验证
				//开始楼层
				var floorId1 = $("#floorStartId").val();
				if(floorId1 =='0'){
					warningDialog("请选择开始楼层!");
					return false;
				} 
				//结束楼层
				var floorId2 = $("#floorEndId").val();
				if(floorId2 =='0'){
					warningDialog("请选择结束楼层!");
					return false;
				}
				var floorStart = $("#floorStartId").val();
			    $("#floorStartId").change(function(){
			        floorStart=$(this).val();
			        console.log($(this));
			        
			    });
			    var floorEnd = $("#floorEndId").val();
			    $("#floorEndId").change(function(){
			        floorEnd=$(this).val();
			    });
				if(Number(floorId2)<Number(floorId1)){
					warningDialog("结束层需大于开始层!");
					return false;
				}
				addFlag=true;
				//每层房间个数
				var houseNum=$("#houseNum").val();
				if(houseNum ==""||houseNum ==null){
					warningDialog("请填写每层房间个数!");
					return false;
				} 
				//每间面积
				var hoseArea=$("#hoseArea").val();
				if(hoseArea ==""||hoseArea ==null){
					warningDialog("请填写每间面积!");
					return false;
				} 
				hoseArea=Number(hoseArea);
				//房号编号规则
				var numberRules1 = $("#numberRules").val();
				if(numberRules1 =='0'){
					warningDialog("请选择房号编号规则!");
					return false;
				} 
				//添加房间面积要小于楼栋面积
				var floorNum=floorEnd-floorStart+1//楼层个数
				$(".houseDetailBox1").html("");
				$(".houseDetailBox1").show();
				//批量生成房间
				var numberRules = $("#numberRules").val();//房号编号规则
			    $("#numberRules").change(function(){
			        numberRules=$(this).val();
			    });
			   // var floorIndexOne=floorStart-1;
				var floorIndexOne=$("#floorStartId option:selected").attr("floorStartIndex");
			    for(var i=floorStart;i<=Number(floorEnd);i++){
			    	floorIndexOne++;
			    	if(i==0){
			    		i=i+1;
			    	}
			    	for(var j=1;j<=houseNum;j++){
			    		if(numberRules==1){
			    			j=String(j);
			    			if(j.length==1){
			    				j="0"+String(j);
			    			}
			    			var num=String(i)+j;
			    			var _div=$('<div class="houseDetail"><strong><span>楼层</span><input type="text" name="floor_id"  value="'+i+'" thisFloorId="'+floorId[floorIndexOne]+'"  readonly="readonly"/><input type="hidden" name="thisFloorId"  value="'+floorId[floorIndexOne]+'" thisFloorId="'+floorId[floorIndexOne]+'"  readonly="readonly"/></strong><strong><span>房间号</span><input type="text" name="house_num"  value="'+num+'" placeholder="请输入房间号" onkeyup="value=value.replace(\/[\^\\a-\\z\\A-\\Z0-9\\-\\、\\()\\,]\/g,\'\')"/></strong><strong><span>面积(m²)</span><input type="text" name="house_area" value="'+hoseArea+'" placeholder="请输入面积" onkeyup="value=value.replace(\/[\^\\d.]\/g,\'\')"/></strong><strong class="delete"><img src="http://www.bdlgz.com:80//static/louyu/img/delete.png"/></strong></div>')
			    		}else if(numberRules==2){
			    			//字母编号
			    			var num1=String.fromCharCode((64+j));
			    			var _div=$('<div class="houseDetail"><strong><span>楼层</span><input type="text" name="floor_id"  value="'+i+'" thisFloorId="'+floorId[floorIndexOne]+'"  readonly="readonly"/><input type="hidden" name="thisFloorId"  value="'+floorId[floorIndexOne]+'" thisFloorId="'+floorId[floorIndexOne]+'"  readonly="readonly"/></strong><strong><span>房间号</span><input type="text" name="house_num"  value="'+num1+'" placeholder="请输入房间号" onkeyup="value=value.replace(\/[\^\\a-\\z\\A-\\Z0-9\\-\\、\\()\\,]\/g,\'\')"/></strong><strong><span>面积(m²)</span><input type="text" name="house_area"  value="'+hoseArea+'" placeholder="请输入面积" onkeyup="value=value.replace(\/[\^\\d.]\/g,\'\')"/></strong><strong class="delete"><img src="http://www.bdlgz.com:80//static/louyu/img/delete.png"/></strong></div>')
			    		}
			    		$(".houseDetailBox").append(_div);
			    	}
                }
                



                
				/* $(".delete").each(function(){
					$(this).click(function(){
						$(this).parent(".houseDetail").remove();
					});
				}); */
			})
			/* 	
			$("#submit1").click(function(){
				if(addFlag==false){
					warningDialog("请填写信息并点击'批量生成'");
					return;
				}
				 var boxes = document.getElementsByName("house_num");//房号
				 var thisFloorId = document.getElementsByName("thisFloorId");//楼层id
				 var index = layer.load(0, {
					  shade: [0.1,'#fff'] //0.1透明度的白色背景
					});
				$.ajax({
				 type:"POST",
				 dataType:"json",
				 cache:false,
				 url:"http://www.bdlgz.com:80//Office/House/PiLiansave",
				 data:$("#houseForm").serialize(),
				 success:function(res){
					 if(res.result == "success") {
					 	successDialog("保存成功！");
					 	setTimeout(function(){
	                		var index = parent.layer.getFrameIndex(window.name); 
					 		parent.layer.close(index);
						},600)
						//何振坤让我提交的
					 }
				 }
			 })
			});
 */