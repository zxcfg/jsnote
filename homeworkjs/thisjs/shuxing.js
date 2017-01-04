/**
 * Created by qing on 17/1/4.
 */

var div1=document.getElementById('div1');
var inp1=document.getElementById('inp1');
var inp2=document.getElementById('inp2');
inp2.onclick=function () {
    div1.innerHTML=inp1.value;
};




var inp3=document.getElementById('inp3');
var inp4=document.getElementById('inp4');
inp4.onclick=function () {
    alert(inp3.value);
};




var inp5=document.getElementById('inp5');
var inp6=document.getElementById('inp6');
inp6.onclick=function () {
    inp5.type="button";
};



var inp7=document.getElementById('inp7');
var inp8=document.getElementById('inp8');
inp7.onfocus = function(){
    if(inp7.value=="请输入年份"){
        inp7.value="";
    }
};
inp8.onclick=function () {
    if(inp7.value ==""){
        alert("年份不能为空");
    }
    var year = Number;
    if(isNaN(year)){
        alert("请输入正确的年份");
    } else if(inp7.value%4==0&&inp7.value%100==0||inp7.value%400==0){
        alert(inp7.value+'是闰年');
    }else {
        alert(inp7.value+'不是闰年')
    }
};


var div5=document.getElementsByClassName('div5');
div5[0].onclick = function () {
    this.style.backgroundColor="green";
};



var inp9=document.getElementById('inp9');
var div20=document.getElementsByClassName('div20');
inp9.onclick = function () {
    div20[0].style.marginLeft = "10px";
};



var div7=document.getElementsByClassName('div7');
var div21=document.getElementById('div21');
var div22=document.getElementById('div22');
div7[0].onmouseover = function () {
    div7[0].innerHTML=div21.innerHTML;
};
div7[0].onmouseout = function () {
    div7[0].innerHTML=div22.innerHTML;
};


var imgs=document.getElementsByTagName('img');
imgs[0].onclick = function () {
    this.src="img/erweima.png";
};


var div23=document.getElementById('div23');
var div24=document.getElementById('div24');
div23.onclick = function () {
    if(div24.style.display=="block"){
        div24.style.display="none";
    }else{
        div24.style.display="block";
    }
};


var lis=document.getElementsByTagName('li');
for(var i= 0;i<lis.length;i++){
    if(i%2==1){
        lis[i].style.backgroundColor="red";
    }else{
        lis[i].style.backgroundColor="blue";
    }
}


var inp10=document.getElementById('inp10');
var inp11=document.getElementById('inp11');
var div11=document.getElementsByClassName('div11');
inp10.onclick = function () {
    div11[0].style.backgroundColor="green"
};
inp11.onclick = function () {
    div11[0].style.backgroundColor="orange"
};
