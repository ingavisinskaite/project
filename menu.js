$(document).ready(() => {
    let contentNode = $("#menu-content");

    showMenuItem = (itemName) => {
        let templateToFetch = `templates/${itemName}.html`;
        $.get(templateToFetch, (data) => {
            contentNode.html(data);
        })
    }

    //needed for initial page load
    showMenuItem("home");

    $(".menu").on("click", ".menu-link", (e) => {
        let hrefTarget = (e.currentTarget.hash.slice(1));
        showMenuItem(hrefTarget);
    })
})

