"use strict";

function createStyleRules() {
    const style = createStyleSheet();
    document.head.insertBefore(style, document.head.childNodes[0]);
    style.sheet.insertRule('body {background-image: url("./image.png"), linear-gradient(127deg, rgb(18, 60, 204) 60%, rgb(217, 36, 48) 60%); color: white; background-size: contain; background-position: center; background-repeat: no-repeat; background-attachment: fixed; font-family: "Noto Sans TC", sans-serif;}');
    applyMenuStyleRules(style.sheet);
    applyMobileMenuStyleRules(style.sheet);
    applyContentStyleRules(style.sheet);
    // applyMediaQueriesRules(style.sheet);
}

function createStyleSheet() {
    var style = document.createElement('style');
    style.id = 'inserted-stylesheet';
    style.type = "text/css";
    return style;
}

function applyMenuStyleRules(sheet) {
    sheet.insertRule('.menu > ul > li > a { text-decoration: none; color: white; text-transform: uppercase;}');
    sheet.insertRule('.menu {animation: menuMove 1s 1;}');
    sheet.insertRule('.menu > ul > li > a:hover:not(#signup) {border-bottom: 2px solid white; }');
    sheet.insertRule('.menu > ul > li {display: inline-flex; margin: 0 15px;}');
    sheet.insertRule('div:not(.mobile).selected {border-bottom: 2px solid white;}');
    sheet.insertRule('div:not(.mobile)#signup {background-color: white; color: rgb(18, 60, 204); padding: 7px 20px; border-radius: 4px;}');
    sheet.insertRule(' .logo {float: left; width: 40px;}');
    sheet.insertRule('.logo > img {cursor: pointer;}');

}

function applyMobileMenuStyleRules(sheet) {
    sheet.insertRule('.mobile > ul > li > a {text-decoration: none; color: rgb(18, 60, 204);}');
    sheet.insertRule('.mobile > ul > li {display: block; padding: 8px; border-radius: 5px; background-color: rgb(224, 224, 224);  margin: 2px 0; box-shadow: 5px 5px rgba(134, 134, 134, 0.3)}');
    sheet.insertRule('.mobile > ul > li:hover {background-color: #efefef}');
    sheet.insertRule('.mobile > ul {position: absolute; padding: 0; border-radius: 5px;}');
    sheet.insertRule('.menu-button {color: white; background-color: #ff5969; border-radius: 5px; padding: 5px 20px; position: relative; margin-top: 7px; cursor: pointer; width: 100%; }');
    sheet.insertRule('.mobile {display: inline-flex; margin-right: 70px; float: right}');
    sheet.insertRule('.dropdown {display: none;}')
}

function applyContentStyleRules(sheet) {
    sheet.insertRule('.content {font-family: "Noto Sans TC", sans-serif;}');
    sheet.insertRule('.content > h1 {font-weight: 900; letter-spacing: 2px;}');
    sheet.insertRule('.dot {height: 15px; width: 15px; background-color: #4162d6; border-radius: 50%; display: inline-flex; margin-top: 60px; margin-left: 10px; margin-right: 10px;}');
    sheet.insertRule('.dot:hover, .selected-dot:not(:hover){border: 3px solid rgb(253, 186, 0); margin-top: 57px; margin-left: 4px; margin-top: 37px;}');
    sheet.insertRule('#dots {text-align: center;}')
    sheet.insertRule('.btn {margin-top: 50px; color: white; background-color: #ff5969; border: none; border-radius: 3px; padding: 10px; cursor: pointer;}')
}

// function applyMediaQueriesRules(sheet){
//     sheet.insertRule('@media only screen and (min-width: 1024px) {.mobile {display: none;} .menu {display: block; font-size: 16px;} .content {margin-top: 20px; width: 50%; font-size: 1.1em;} .logo > img {width: 120px; height: 30px; margin-left: 30px; padding-top: 3px;}}');
//     sheet.insertRule('@media only screen and (min-width: 875px) {.mobile {display:none;} .menu {display: block; font-size: 14px;} .logo > img {width: 110px; height: 28px; margin-left: 30px; padding-top: 3px;} .content {font-size: 1em; margin-top: 20px;}}');
//     sheet.insertRule('@media only screen and (min-width: 768px) {.mobile {display: none;} .menu {display: block; font-size: 12px;} .content {padding-left: 60px; width: 50%; font-size: 15px; margin-top: 20px;} body {background-image: url("./image.png"), linear-gradient(127deg, rgb(18, 60, 204) 60%, rgb(217, 36, 48) 60%) ;} #dots {text-align: left;} .logo > img {width: 100px; height: 25px; margin-left: 30px; padding-top: 3px;} .btn {margin-top: 50px; padding: 10px; display: inline; width: 20vw;}}');
//     sheet.insertRule('@media only screen and (min-width: 376px) {.mobile {display: block;} .menu {display: none;} body {background-image: linear-gradient(127deg, rgb(18, 60, 204) 60%, rgb(217, 36, 48) 60%);} .content {padding-left: 30px; width: 85%; font-size: 13px; position: absolute; margin-top: 50px;} .mobile > ul {margin-top: 45px; z-index: 3;} .logo {padding-left: 20px;} .logo > img {width: 110px; height: 25px; margin-left: 10px; padding-top: 10px;} .dot {height: 15px; width: 15px; background-color: #4162d6; border-radius: 50%; display: inline-flex; margin-top: 60px; margin-left: 10px; margin-right: 10px;} .btn {padding: 15px 30px; width: 80vw; font-size: 1.2em; display: block; margin: 0 auto; margin-top: 50px;}}');
//     sheet.insertRule('@media only screen and (max-width: 375px) {.mobile {display: block;} .menu {display: none;} .mobile > ul {margin-top: 45px; z-index: 3;} .content {padding-left: 30px; width: 85%; font-size: 12px; position: absolute; margin-top: 50px;} .content > h1 {font-size: 25px;} .logo {padding-left: 30px;} .logo > img {width: 110px; height: 25px; margin-top: 12px;} .btn {padding: 15px; width: 70vw; margin-top: 30px;} .dot {height: 13px; width: 13px; margin-top: 40px; margin-left: 10px; margin-right: 11px; display: inline-flex; background-color: #4162d6; border-radius: 50%;} .dot:hover{border: 3px solid rgb(253, 186, 0); margin-top: 57px; margin-left: 4px; margin-top: 37px;} body {background-image: linear-gradient(127deg, rgb(18, 60, 204) 60%, rgb(217, 36, 48) 60%);}}');
// }
