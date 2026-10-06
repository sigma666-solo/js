$(document).ready(function(){
    $('#btn').click(function(){
        $('.block').eq(0).css('color', 'red').css('font-size', '20px').css('background-color', 'yellow');
        $('.block').eq(1).css('color', 'blue').css('font-size', '24px').css('background-color', 'lightblue');
        $('.block').eq(2).css('color', 'green').css('font-size', '18px').css('background-color', 'lightgreen');
    });
});
