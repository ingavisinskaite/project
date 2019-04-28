"use strict";

let dotContents = [];
let menuContents = [];
let createDesignPageContent = {};

let dotsSliderInterval = {};
let currentDotContentIndex = 0;
let homePageActive = true;

function getElement(elObject){
    let element = document.createElement(elObject.type);
    
    if(elObject.id){
        element.id = elObject.id;
    }
    if(elObject.className){
        element.className = elObject.className;
    }
    if(elObject.src){
        element.src = elObject.src;
    }
    if(elObject.href){
        element.href = elObject.href;
    }
    if(elObject.innerHTML){
        element.innerHTML = elObject.innerHTML;
    }
    if(elObject.action){
        element.action = elObject.action;
    }
    if(elObject.method){
        element.method = elObject.method;
    }
    if(elObject.inputType){
        element.type = elObject.inputType;
    }
    if(elObject.placeholder){
        element.placeholder = elObject.placeholder;
    }
    if(elObject.value){
        element.value = elObject.value;
    }
    return element;
}

function recurseJSON(currentElement, parent){
    let element = getElement(currentElement);
    parent.appendChild(element);
    let newParent = element;
    if (!currentElement.content) {
        return;
    } else {
        for (let childEl of currentElement.content) {
            recurseJSON(childEl, newParent);
        }
    }
}

function loadJSON(callback, url) {
    let req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', url, true); 
    req.onreadystatechange = 
        function() {
            if (req.readyState == 4 && req.status == "200") {
                callback(req.responseText);
            }
        };
    req.send(null);  
}

function loadPage() {
    loadJSON(function(res) {
        menuContents = JSON.parse(res);
        loadJSON(function(res) {
            recurseJSON(JSON.parse(res), document.body);
            addMobileMenuEventHandlers();
            addDotsEventHandlers();
            addMenuEventHandlers(menuContents);
            addButtonEventHandler();
            addLogoEventHandler();
        }, 'https://api.myjson.com/bins/jcjfw');
    }, 'https://api.myjson.com/bins/udamc')

    loadJSON(function(res) {
        createDesignPageContent = JSON.parse(res); 
    }, 'https://api.myjson.com/bins/1ckpj0');

    loadJSON(function(res) {
        dotContents = JSON.parse(res);
        startDotsSlider();
    }, 'https://api.myjson.com/bins/guip8')
}

function startDotsSlider() {
    dotsSliderInterval = setInterval(function(){
        changeHomePageContent(currentDotContentIndex);
        let dots = document.getElementsByClassName('dot');
        markDotAsSelected(dots[currentDotContentIndex], dots);
        currentDotContentIndex = getNextDotContentIndex(currentDotContentIndex);
    }, 3 * 1000);
}

function stopDotsSlider() {
    clearInterval(dotsSliderInterval);
    currentDotContentIndex = 0;
}

function getNextDotContentIndex(currIndex) {
    if(currIndex < dotContents.length - 1){
        let newIndex = currIndex + 1;
        return newIndex;
    } else {
        return 0;
    }
}

function addLogoEventHandler() {
    let logoNode = document.getElementsByClassName('logo')[0];
    logoNode.addEventListener('click', function() {
        let menuContentNode = document.getElementsByClassName('content')[0];
        menuContentNode.innerHTML = '';
        recurseJSON(menuContents[0], menuContentNode);
        let pages = document.getElementsByClassName('menu-link');
        markPageAsSelected(pages[0], pages);
        addButtonEventHandler();
        addDotsEventHandlers();
        stopDotsSlider();
        startDotsSlider();
    })
}

function addMobileMenuEventHandlers() {
    document.getElementsByClassName('content')[0].addEventListener('click', function(){
        let menuDropdown = document.getElementsByClassName('dropdown')[0];
        menuDropdown.classList.remove('display');
    })
    
    document.getElementsByClassName('menu-button')[0].addEventListener('click', function() {
        let menuDropdown = document.getElementsByClassName('dropdown')[0];
        menuDropdown.classList.toggle('display');
    })
}

function addDotsEventHandlers() {
    let dots = document.getElementsByClassName('dot');
    for(let i = 0; i < 4; i++){
        dots[i].addEventListener('click', function() {
            markDotAsSelected(this, dots);
            changeHomePageContent(i);
            currentDotContentIndex = getNextDotContentIndex(i);
        })
    }
}

function changeHomePageContent(contentIndex) {
    let contentNode = document.getElementsByClassName('text')[0];
    contentNode.innerHTML = '';
    let contentToAdd = dotContents[contentIndex];
    for (let element of contentToAdd) {
        recurseJSON(element, contentNode);
    }
    //button exists in first page
    if (contentIndex === 0) {
        addButtonEventHandler();
    }
}

function markDotAsSelected(selectedDot, allDots) {
    for (let dot of allDots) {
        dot.removeAttribute('id');
    }
    selectedDot.setAttribute('id', 'selected-dot');
}

function addMenuEventHandlers(menuItems){
    let pages = document.getElementsByClassName('menu-link');

    for(let i = 0; i < menuItems.length * 2; i++){
        pages[i].addEventListener('click', function(){
            if (!this.classList.contains("mobile-menu")) {
                markPageAsSelected(this, pages);
            }
            //mod needed due to mobile and desktop menu
            changeMenuPage(i % menuItems.length);
        })
    }

}

function markPageAsSelected(selectedPage, allPages) {
    for(let page of allPages){
        page.removeAttribute('id');
    }
    selectedPage.setAttribute('id', 'selected');
}

function changeMenuPage(contentIndex) {
    let contentNode = document.getElementsByClassName('content')[0];
    contentNode.innerHTML = '';
    let contentToAdd = menuContents[contentIndex];
    recurseJSON(contentToAdd, contentNode);
    if (contentToAdd.id === 'home-page') {
        addDotsEventHandlers();
        addButtonEventHandler();
        startDotsSlider();
    } else {
        stopDotsSlider();
    }
}


function addButtonEventHandler() {
    let button = document.getElementsByClassName('btn')[0];
    button.addEventListener('click', function(){
        createDesign();
    })
}

function createDesign() {
    let contentNode = document.getElementsByClassName('content')[0];
    contentNode.innerHTML = '';
    recurseJSON(createDesignPageContent, contentNode);
    stopDotsSlider();
}
