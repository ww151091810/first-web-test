$(document).ready(function(){
	var billData = {
	  "success" : true,
	  "backMsg" : null,
	  "backData" : {
	    "id" : "8a83898a58f8d3fa0158fafe1b4f0000",
	    "creationtime" : 1481679707000,
	    "modifiedtime" : null,
	    "dr" : 0,
	    "ts" : 1481679707000,
	    "creator" : "a375fbcf-db63-4dcf-a69b-4e644ace786b",
	    "creatorName" : "liushebei",
	    "modifier" : null,
	    "modifierName" : null,
	    "orgId" : "8a83898e5742d0560157467a572e0151",
	    "orgName" : "���ݽ�ɳӡ���",
	    "tenantid" : "ppo2wx9x",
	    "billCode" : "OCLV1612140003",
	    "billType" : "OC002",
	    "billState" : 1,
	    "billDate" : null,
	    "bpmid" : "79e8c4c1-c19e-11e6-928b-0242ac110003",
	    "billSourceId" : null,
	    "sourceBillType" : null,
	    "reviewerid" : null,
	    "reviewer" : null,
	    "reviewtime" : "2016-12-14 09:41:48",
	    "leaveOffType" : 1,
	    "parentLeaveId" : null,
	    "leaveImg" : null,
	    "period" : "2016",
	    "leaveNote" : "吃饭",
	    "leaveSumHour" : 34.50,
	    "leaveType" : 3,
	    "remark" : null,
	    "attaches" : null,
	    "applierUserCode" : "zhangshebei01",
	    "applier" : "8a83898e58ddb8530158de9ce2b70002",
	    "applierName" : "�����豸",
	    "applyDate" : "2016-12-14",
	    "applyDeptid" : "1",
	    "applyDeptname" : "1",
	    "leaveItems" : [ {
	      "id" : "8a83898a58f8d3fa0158fafe1b5d0001",
	      "creationtime" : null,
	      "modifiedtime" : null,
	      "dr" : 0,
	      "ts" : 1481679707000,
	      "creator" : null,
	      "creatorName" : null,
	      "modifier" : null,
	      "modifierName" : null,
	      "orgId" : null,
	      "orgName" : null,
	      "tenantid" : null,
	      "leaveParent" : null,
	      "leaveBeginTime" : 1481675400000,
	      "leaveEndTime" : 1481707800000,
	      "leaveSumHour" : 8.00
	    }, {
	      "id" : "8a83898a58f8d3fa0158fafe1b5d0002",
	      "creationtime" : null,
	      "modifiedtime" : null,
	      "dr" : 0,
	      "ts" : 1481679707000,
	      "creator" : null,
	      "creatorName" : null,
	      "modifier" : null,
	      "modifierName" : null,
	      "orgId" : null,
	      "orgName" : null,
	      "tenantid" : null,
	      "leaveParent" : null,
	      "leaveBeginTime" : 1481765400000,
	      "leaveEndTime" : 1481787000000,
	      "leaveSumHour" : 5.00
	    }, {
	      "id" : "8a83898a58f8d3fa0158fafe1b5d0003",
	      "creationtime" : null,
	      "modifiedtime" : null,
	      "dr" : 0,
	      "ts" : 1481679707000,
	      "creator" : null,
	      "creatorName" : null,
	      "modifier" : null,
	      "modifierName" : null,
	      "orgId" : null,
	      "orgName" : null,
	      "tenantid" : null,
	      "leaveParent" : null,
	      "leaveBeginTime" : 1481853600000,
	      "leaveEndTime" : 1482049800000,
	      "leaveSumHour" : 21.50
	    } ],
	    "offLeaveParent" : null
	  }
	};
	
	var leaveOffType = [
		{"type":"年假"},
		{"type":"事假"},
		{"type":"病假"},
		{"type":"婚假"},
		{"type":"产假"},
		{"type":"其他"}
	]
	
	var  billState = [
		{"state":"自由态"},
		{"state":"已提交"},
		{"state":"审批中"},
		{"state":"审批通过"},
		{"state":"审批不通过"}
	]
	
	var curBillState = billData.backData.billState;
	switch(curBillState){
		case 0:
			$(".bill-state").text(billState[0].state);break;
		case 1:
			$(".bill-state").text(billState[1].state);break;
		case 2:
			$(".bill-state").text(billState[2].state);break;
		case 3:
			$(".bill-state").text(billState[3].state);break;
		case 4:
			$(".bill-state").text(billState[4].state);break;
		case 5:
			$(".bill-state").text(billState[5].state);break;
	}
	
	var curLeaveOffType = billData.backData.leaveOffType;
	switch(curLeaveOffType){
		case 0:
			$(".holiday-type-text").text(leaveOffType[0].type);break;
		case 1:
			$(".holiday-type-text").text(leaveOffType[1].type);break;
		case 2:
			$(".holiday-type-text").text(leaveOffType[2].type);break;
		case 3:
			$(".holiday-type-text").text(leaveOffType[3].type);break;
		case 4:
			$(".holiday-type-text").text(leaveOffType[4].type);break;
		case 5:
			$(".holiday-type-text").text(leaveOffType[5].type);break;
	}
				
	for(var i=0;i<billData.backData.leaveItems.length;i++) {
		var leaveBeginTime = billData.backData.leaveItems[i].leaveBeginTime;
		var leaveEndTime = billData.backData.leaveItems[i].leaveEndTime;
		var leaveSumHour = billData.backData.leaveItems[i].leaveSumHour;
		if (leaveSumHour<8) {
			$(".holiday-time-text").append("<p class='holiday-level-time'>"+getMyDate(leaveBeginTime)
			+" 至 "+getMyDate(leaveEndTime)+"("+leaveSumHour+"小时)"+"</p>");
		}
		else if (leaveSumHour==8) {
			$(".holiday-time-text").append("<p class='holiday-level-time'>"+getMyDate(leaveBeginTime)
			+" 至 "+getMyDate(leaveEndTime)+"("+getLeaveDay(leaveSumHour)[0]+"天)"+"</p>");
		}
		else {
			$(".holiday-time-text").append("<p class='holiday-level-time'>"+getMyDate(leaveBeginTime)
			+" 至 "+getMyDate(leaveEndTime)+"("+getLeaveDay(leaveSumHour)[0]+"天"
			+getLeaveDay(leaveSumHour)[1]+"小时)"+"</p>");
		}
	}
	
//	格式转换
	 function getMyDate(str){  
            var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
            return oTime;  
        };  
        
    //补0操作  
    function getzf(num){  
        if(parseInt(num) < 10){  
            num = '0'+num;  
        }  
        return num;  
    }  
     
	//计算请假时间天数
	function getLeaveDay(sumHour) {
			var day = [];
			var sumDay = parseInt(sumHour/8);
			var sumHour = sumHour-sumDay*8;
			day.push(sumDay);
			day.push(sumHour);
			return day;
	}
        

	$(".holiday-reason-text").text(billData.backData.leaveNote);
})
