// Highlight Active Menu Link
$(function(){
    var url = window.location.href;
    $(".nav .item a").each(function() {
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
    $(".nav .item a").click(function(){
        $(".nav .item").removeClass("active");
        $(this).closest("li").addClass("active");
    });
});

// Apply a CSS class to the PDF Print/Download Button
// Change the component XX with the component ID for the Button - via Page Builder
TB.render('component_XX', function(data) {
    data.ele[0].children[0].classList.add("pdf-btn");
});

// Change the "anchorButton" to your custome class name
// Change the "x_element_page_7_1" to the row ID - by checking using Inspect Element
$(".anchorButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#x_element_page_7_1").offset().top
    }, 750);
});