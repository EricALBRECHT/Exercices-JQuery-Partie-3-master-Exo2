i=0;
$('.button').click(function (){
    if (this.id == 'buttonMore'){
        i++;
        $('#text').val(i);
    }else if (this.id == 'buttonLess') {
        i = i-1;
        $('#text').val(i);
    };
});
