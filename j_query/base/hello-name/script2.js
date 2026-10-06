$(document).ready(function(){
    $('#btn2').click(function(){
        let name = $('#name').val();
        $('#greeting').text('Здравствуйте, ' + name + '!');
    });
});
