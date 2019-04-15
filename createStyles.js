
function createStyleRules() {
    const style = createStyleSheet();
    document.head.appendChild(style);
    style.sheet.insertRule('body {background-image: url("./image.png"), linear-gradient(127deg, rgb(18, 60, 204) 60%, rgb(217, 36, 48) 60%); color: white; background-size: contain; background-position: center; background-repeat: no-repeat; background-attachment: fixed; font-family: "Noto Sans TC", sans-serif; height: 100vh;}');
    applyMenuStyleRules(style.sheet);
    applyMobileMenuStyleRules(style.sheet);
    applyContentStyleRules(style.sheet);
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
    sheet.insertRule('.menu > ul > li {display: inline-flex; flex-direction: row; margin: 0 15px;}');
    sheet.insertRule('div:not(.mobile) #signup {background-color: white; color: rgb(18, 60, 204); padding: 7px 20px; border-radius: 4px;}');
    sheet.insertRule(' .logo {float: left; padding-left: 100px; width: 40px;}');
    sheet.insertRule('.logo > img {margin-right: 10px; cursor: pointer;}');

}

function applyMobileMenuStyleRules(sheet) {
    sheet.insertRule('.mobile > ul > li > a {text-decoration: none; color: rgb(18, 60, 204); text-align: center;}');
    sheet.insertRule('.mobile > ul > li {display: block; padding: 5px; border: 1px solid rgb(18, 60, 204);}');
    sheet.insertRule('.mobile > ul > li:hover {background-color: rgb(228, 219, 219)}');
    sheet.insertRule('.mobile > ul {position: absolute; background-color: white; padding: 0; border-radius: 5px;}');
    sheet.insertRule('.menu-button {color: rgb(18, 60, 204); background-color: rgb(228, 219, 219); border-radius: 5px; padding: 5px 20px; position: relative; margin-top: 7px; cursor: pointer;}');
    sheet.insertRule('.mobile {display: inline-flex; margin-right: 50px; float: right}');
    sheet.insertRule('.dropdown {display: none;}')
}

function applyContentStyleRules(sheet) {
    sheet.insertRule('.content {width: 30%; padding-left: 100px; padding-top: 20x; font-family: "Noto Sans TC", sans-serif;}');
    sheet.insertRule('.content > h1 {font-weight: 900; letter-spacing: 2px;}');
    sheet.insertRule('.dot {height: 15px; width: 15px; background-color: #4162d6; border-radius: 50%; display: inline-flex; margin-top: 60px; margin-left: 10px; margin-right: 10px;}');
    sheet.insertRule('.dot:hover{border: 3px solid rgb(253, 186, 0); margin-top: 57px; margin-left: 4px; margin-top: 37px;}');
    sheet.insertRule('.btn {margin-top: 50px; color: white; background-color: #ff5969; border: none; border-radius: 3px; padding: 10px; cursor: pointer;}')
}

