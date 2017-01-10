/**
 * Created by qing on 17/1/9.
 */

var divs=document.getElementById("cy");
var bounceds=document.getElementById("bounced");
var divss=divs.getElementsByTagName("div");
var divdt=bounceds.getElementsByTagName("div");
for(var i=0;i<divss.length;i++) {
    divss[i].onmouseover = function () {
        for (var i = 0; i < divdt.length; i++) {
            if (this == divss[i]) {
                divss[i].className = "yue";
                divdt[i].className = "fen";
            }else{
                divss[i].className = "";
                divdt[i].className = "";
            }
        }
    }
}