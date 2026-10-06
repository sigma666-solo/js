$(document).ready(function(){
    $('#btn5').click(function(){
        let name = $('#anketa_name').val();
        let age = $('#anketa_age').val();
        let mark = parseFloat($('#anketa_mark').val());

        let status = '';
        if(mark >= 4.5) status = 'Отличник';
        else if(mark >= 3.5) status = 'Хорошист';
        else if(mark >= 2.5) status = 'Удовлетворительно';
        else status = 'Неуспевает';

        $('#result_name').text(name);
        $('#result_age').text(age);
        $('#result_mark').text(mark);
        $('#result_status').text(status);
        $('#result').show();
    });
});
