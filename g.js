// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rent.591.com.tw/rent-detail-*.html
// @updateURL    https://raw.githubusercontent.com/alastorid/monkey.d.roof/main/g.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //kfCallName
    //dialPhoneNum
    var ge = (function(csName){
        var e = document.getElementsByClassName(csName);
        if(e.length == 1)
        {
            return e[0];
        }
        return null;
    });
    var puts = (function(str){
        return ge('houseInfoTitle').textContent=str;
    });
    var name = ge("kfCallName")?.dataset['name'];
    var num = ge("dialPhoneNum").dataset['value'];
    var tel = hid_tel.value;
    var mail = hid_email.value;
    var msg = name + ' ' + num + ' ' + mail;
    if('' != tel)
    {
         msg += ' t=' + tel;
    }
    puts(msg);
    // Your code here...
})();
