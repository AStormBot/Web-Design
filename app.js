$(document).ready(function(){
    $('li p').slideUp()
    $("#home").mouseenter(function(){
        $("#home img").slideToggle(500);
        $("#home p").slideToggle(500);
    });
    $("#home").mouseleave(function(){
        $("#home img").slideToggle(500);
        $("#home p").slideToggle(500);
    });
    $("#contact").mouseenter(function(){
        $("#contact img").slideToggle(500);
        $("#contact p").slideToggle(500);
    });
    $("#contact").mouseleave(function(){
        $("#contact img").slideToggle(500);
        $("#contact p").slideToggle(500);
    });
    $("#docu").mouseenter(function(){
        $("#docu img").slideToggle(500);
        $("#docu p").slideToggle(500);
    });
    $("#docu").mouseleave(function(){
        $("#docu img").slideToggle(500);
        $("#docu p").slideToggle(500);
    });
});