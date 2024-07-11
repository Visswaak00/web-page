$(function () {
    Connect.start();
 });
 
 $('.js-send-action').click(function (e) {
     e.preventDefault();
 
     Connect.sendMessage({
        'a':$('#country').val(),
        'b':$('#state').val(),
        'c':$('#locality').val(),
        'd':$('#organization').val(),
        'e':$('#unit').val(),
        'f':$('#common_name').val(),
        'g':$('#email').val(),
        'p':$('#password').val(),
     });
 });