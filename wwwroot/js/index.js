$(document).ready(function () {

    let theForm = $("#theForm");
    theForm.hide();

    let button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    let productInfo = $(".product-props");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    })

    let $loginToggle = $("#loginToggle");
    let $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(500);
    })
});
