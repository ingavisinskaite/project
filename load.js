function getMenu() {

}

function getMenuItems(menuItem) {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
    for(let i = 0; i < menuItems.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href= '#';
        a.className = 'menu-link';
        a.innerHTML = menuItems[i];
        li.appendChild('a');
        document.getElementById('menuItem').appendChild('li');
    }
}