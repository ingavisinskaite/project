$(document).ready(() => {
    let contentNode = $('#menu-content');

    showMenuItem = (itemName) => {
        let templateToFetch = `templates/${itemName}.html`;
        $.get(templateToFetch, (data) => {
            contentNode.html(data);
        })
    }

    $('#nav-placeholder').load('templates/nav.html', () => {
        $('.navbar').on('click', '.menu-link', (e) => {
            let hrefTarget = (e.currentTarget.hash.slice(1));
            showMenuItem(hrefTarget);
        })
    });


    //needed for initial page load
    showMenuItem("home");

})


