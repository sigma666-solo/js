$(document).ready(function(){
    $('#btn4').click(function(){
        $('#card_name').text($('#student_name').val());
        $('#card_age').text($('#student_age').val());
        $('#card_group').text($('#student_group').val());
        $('#card_mark').text($('#student_mark').val());
    });
});
