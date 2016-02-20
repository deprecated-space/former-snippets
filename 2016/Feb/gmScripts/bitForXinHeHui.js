// ==UserScript==
// @name        useForXinhehui
// @namespace   http://www.cnblogs.com/zichi/
// @description 鑫合汇自动发标脚本
// @include     http://bc-api-test.xinhehui.com/index.php/Financing/Product/add
// @include     http://test.xinhehui.com/Financing/Product/add
// @include     https://ywuat.xinhehui.com/Financing/Product/add
// @version     1.0
// @grant       none
// @author      zichi
// ==/UserScript==
 
 
// --------------- 用户界面start --------------- //
var createContent = function() {
  // 获取mainDiv
  var mainDiv = document.getElementsByClassName("info_fill_step")[0];
  // 标名
  var prjNameSpan = document.createElement("span");
  prjNameSpan.innerHTML = '<input type="text" id="txt1" />';
  mainDiv.appendChild(prjNameSpan);
  document.getElementById("txt1").value = "发标测试0912";
 
  // start-time
  var startTimeSpan = document.createElement("span");
  startTimeSpan.innerHTML = '<input type="text" id="txt2" />';
  mainDiv.appendChild(startTimeSpan);
  document.getElementById("txt2").value = getCurrentTime();
  // document.getElementById("txt2").value = "2015-09-13 14:20:00";
  // document.getElementById("txt2").setAttribute("style", "position:'left:20px'");
  document.getElementById("txt2").setAttribute("style", "width:135px");
 
  // end-time
  var endTimeSpan = document.createElement("span");
  endTimeSpan.innerHTML = '<input type="text" id="txt3"/>';
  mainDiv.appendChild(endTimeSpan);
  document.getElementById("txt3").value = getCurrentTime();
  // document.getElementById("txt3").value = "2016-09-03 19:00:00";
 
  // 三种标的选择框
  var BidTypeSpan = document.createElement("span");
  BidTypeSpan.innerHTML = "<select id='rpSet' style='width:60px'>\
                             <option>日益升</option>\
                             <option>企益融</option>\
                             <option>聚优宝</option>\
                           </select>";
  mainDiv.appendChild(BidTypeSpan);
 
  // 是否新客
  var NewGuestSpan = document.createElement("span");
  NewGuestSpan.innerHTML = "<select id='rpSet2' style='width:40px'>\
                              <option>否</option>\
                              <option>是</option>\
                            </select>";
  mainDiv.appendChild(NewGuestSpan);
 
  // 发标按钮
  var submitBtnSpan = document.createElement("span");
  submitBtnSpan.innerHTML = "<input type='button' id='btn' />";
  mainDiv.appendChild(submitBtnSpan);
  document.getElementById("btn").value = "发布";
 
  // button触发go方法
  document.getElementById("btn").addEventListener("click", go);
};
// --------------- 用户界面end --------------- //
 
// 日期格式 2014-09-02 19:00:00
var getCurrentTime = function() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;  // 真实的月份要加1
  month < 10? month = '0' + month: month;
  var date = now.getDate();
  date < 10? date = '0' + date: date;
  var hour = now.getHours();
  hour < 10? hour = '0' + hour: hour;
  var minute = now.getMinutes();
  minute < 10? minute = '0' + minute: minute;
  var second = now.getSeconds();
  second < 10? second = '0' + second: second;
  var str = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  return str;
};
 
// firstPage填写
var firstPage = function() {
  // 融资规模
  document.getElementsByName('demand_amount')[0].value = '1';
   
  // 期限
  document.getElementsByName('time_limit')[0].value = '7';
   
  // 期限(天、月)
  var val = document.getElementById("rpSet").value;
  if(val === '企益融' || val === '聚优宝')
    document.getElementById("ui-multiselect-0-option-1").click();
 
  // 预期利率(日、月、年)
  document.getElementById("ui-multiselect-1-option-2").click();
 
  // 预期利率
  document.getElementsByName("rate")[0].value = "10";
   
  // 保障性质
  // 还款方式
 
  // 融资开标时间
  document.getElementById("start_bid_time").value = document.getElementById("txt2").value;
   
  // 融资截止时间
  document.getElementById("end_bid_time").value = document.getElementById("txt3").value;
   
  // 产品类型
  var type = document.getElementById("rpSet").value;
  if(type === '日益升')
    document.getElementById("ui-multiselect-3-option-0").click();
  else if(type === '企益融')
    document.getElementById("ui-multiselect-3-option-1").click();
  else document.getElementById("ui-multiselect-3-option-2").click();
   
  // 投资起始金额
  // 最大投资金额
  // 投资递增金额
  // 支付方式
  // 借款人类型
 
  // 借款人
  document.getElementById("borrower").value = "杭州日月礼盒包装有限公司";
 
  // 下一步按钮
  document.getElementsByClassName("btn_text step_next")[0].click();
};
 
// 日益升第二页填写
var rys_nextPage = function() {
  setTimeout(function() {
    var res = document.getElementsByName("trade")[0].getAttribute("valid");
    if(res) {
      // 产品名称
      document.getElementsByName("prj_name")[0].value = document.getElementById("txt1").value;
 
      // 起息日
       
      // 是否可能提前到期
      document.getElementById("dq1").checked = true;
 
      // 是否允许线下登记
       
      //资金用途
      document.getElementsByName("money_using")[0].value = '融资方为杭州日月礼盒包装有限公司,为1，需融资1万元，使用期限为7天。';
       
      // 还款来源
      document.getElementsByName("repay_origin")[0].value = "test";
       
      // 保障措施
       
      // 担保人
      document.getElementById("ui-multiselect-10-option-1").click();
 
      // 保障措施说明
      document.getElementsByName("addcredit_desc")[0].value = "其他：[111]";
 
      // 是否新客项目
      var val = document.getElementById("rpSet2").value;
      if(val === "是")
        document.getElementsByName("is_new")[0].checked = true;
 
      // 是否允许多次投标
      document.getElementById("is_multi_buy1").checked = true;
 
      // 所属行业
      document.getElementsByName("trade")[0].value = "制造业";
 
      // 成立日期
      document.getElementsByName("fund_date")[0].value = "2005";
 
      // 注册资本
      document.getElementsByName("register_capital")[0].value = "200";
 
      // 主营业务
      document.getElementsByName("main_business")[0].value = "生产、加工：纸质包装盒。 销售：包装材料；含下属分支机构经营范围。***";
       
      // 企业规模
      document.getElementById("ui-multiselect-30-option-1").click();
 
      // 性别
      document.getElementById("sex1").checked = true;
 
      // 年龄
      document.getElementsByName("age")[0].value = "40";
 
      // 学历
      document.getElementById("ui-multiselect-31-option-4").click();
 
      // 上一年度销售收入
      // 婚姻状况
      // 户籍城市
      // 企业贷款卡状态
      // 企业信用状况
      // 投资资金转入账户
      // 适用产品
      // 发布机构
      // 发布按钮
    } else
      rys_nextPage();
  }, 1000); 
};
 
// 企益融第二页填写
var qyr_nextPage = function() {
  setTimeout(function() {
    var res = document.getElementsByName("trade")[0].getAttribute("valid");
    if(res) {
      // 产品名称
      document.getElementsByName("prj_name")[1].value = document.getElementById("txt1").value;
 
      // 起息日
       
      // 是否可能提前到期
      document.getElementsByName("is_early")[2].checked = true;
 
      // 是否允许线下登记
       
      //资金用途
      document.getElementsByName("money_using")[1].value = '融资方为杭州日月礼盒包装有限公司,为1，需融资1万元，使用期限为7天。';
       
      // 还款来源
      document.getElementsByName("repay_origin")[1].value = "test";
       
      // 保障措施
       
      // 担保人
      document.getElementById("ui-multiselect-15-option-1").click();
 
      // 保障措施说明
      document.getElementsByName("addcredit_desc")[1].value = "其他：[111]";
       
      // 是否新客项目
      var val = document.getElementById("rpSet2").value;
      if(val === "是")
        document.getElementsByName("is_new")[2].checked = true;
       
      // 是否允许多次投标
      document.getElementsByName("is_multi_buy")[2].checked = true;
 
      // 所属行业
      document.getElementsByName("trade")[0].value = "制造业";
 
      // 成立日期
      document.getElementsByName("fund_date")[0].value = "2005";
 
      // 注册资本
      document.getElementsByName("register_capital")[0].value = "200";
 
      // 主营业务
      document.getElementsByName("main_business")[0].value = "生产、加工：纸质包装盒。 销售：包装材料；含下属分支机构经营范围。***";
       
      // 企业规模
      document.getElementById("ui-multiselect-33-option-1").click();
 
      // 性别
      document.getElementById("sex1").checked = true;
 
      // 年龄
      document.getElementsByName("age")[0].value = "40";
 
      // 学历
      document.getElementById("ui-multiselect-34-option-4").click();
 
      // 是否可以转让
      document.getElementById("zr1").checked = true;
 
      // 发布按钮
    } else
      qyr_nextPage();
  }, 1000); 
};
 
// 聚优宝第二页填写
var jyb_nextPage = function() {
  setTimeout(function() {
    var a = document.getElementsByName("is_new")[8].parentNode.parentNode.parentNode;
    var res = window.getComputedStyle(a, null)['display'];
 
    if(res !== 'none') {
      // 产品名称
      document.getElementsByName("prj_name")[4].value = document.getElementById("txt1").value;
 
      // 起息日
       
      // 是否可能提前到期
      document.getElementsByName("is_early")[8].checked = true;
 
      // 是否允许线下登记
       
      // 保障措施
       
      // 担保人
      document.getElementById("ui-multiselect-27-option-1").click();
 
      // 保障措施说明
      document.getElementsByName("addcredit_desc")[4].value = "其他：[111]";
       
      // 是否可以转让
      document.getElementsByName("is_transfer")[6].checked = true;
 
      // 投资资金转入账户
 
      // 托管机构
      document.getElementsByName("custodian")[0].value = "test";
 
      // 托管机构网址
      document.getElementsByName("custodian_url")[0].value = "test";
 
      // 本债券挂牌公告链接网址
      document.getElementsByName("announcement_url")[0].value = "test";
 
      // 是否新客项目
      var val = document.getElementById("rpSet2").value;
      if(val === "是") {
        document.getElementsByName("is_new")[8].checked = true;
      }
 
      // 是否允许多次投标
      // 下一步按钮
      // document.getElementsByClassName("btn_text submit_prj")[0].click();
    } else
      jyb_nextPage();
  }, 1000); 
};
 
var go = function() {
  firstPage();
  var type = document.getElementById("rpSet").value;
  if(type === '日益升')
    rys_nextPage();
  else if(type === '企益融')
    qyr_nextPage();
  else jyb_nextPage();
};
 
window.onload = function() {
  createContent();
};