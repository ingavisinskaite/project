"use strict";

//ADDING JSON
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
    if(elObject.onclick){
        element.onclick = elObject.onclick;
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

function loadJSON(callback) {
    let req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://api.myjson.com/bins/fwua0', true); 
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
        recurseJSON(JSON.parse(res), document.body);
        addMobileMenuEventHandlers();
        addDotsEventHandlers();
        addMenuEventHandlers();
    });
}

//Mobile Menu
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


//Slider 
function addDotsEventHandlers() {
    let dots = document.getElementsByClassName('dot');
    for(let i = 0; i < 4; i++){
        dots[i].addEventListener('click', function() {
            markDotAsSelected(this, dots);
        })
    }
}

function markDotAsSelected(selectedDot, allDots) {
    for (let dot of allDots) {
        dot.classList.remove('selected-dot');
    }
    selectedDot.classList.add('selected-dot');
}

//Menu pages
function addMenuEventHandlers(){
    let pages = document.getElementsByClassName('menu-link');
    for(let i = 0; i < 5; i++){
        pages[i].addEventListener('click', function(){
            markPageAsSelected(this, pages);
        })
    }
}

function markPageAsSelected(selectedPage, allPages) {
    for(let page of allPages){
        page.classList.remove('selected');
    }
    selectedPage.classList.add('selected');
}