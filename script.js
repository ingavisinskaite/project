function load() {
    document.body.appendChild(getLogo());
    document.body.appendChild(getMenuItems());
}


function getLogo(){
    let image = document.createElement('img');
    image.className = 'logo';
    image.src = 'logo.jpg';
    image.alt = 'logo';
    return image;
}

function getMenuItems() {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing', 'SIGNIN', 'SIGNUP'];
    for(let i = 0; i < menuItems.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href= '#';
        a.className = 'menu-link';
        // a[4].className = 'menu-right'
        // a[4].id = 'signin';
        // a[5].className = 'menu-right';
        // a[5].id = 'signup';
        a.innerHTML = menuItems[i];
        return a
    }

}