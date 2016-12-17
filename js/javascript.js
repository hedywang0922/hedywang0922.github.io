$(document).ready(function(){

    $.when(
        $.getScript("js/jquery.textillate.js"),
        $.getScript("js/jquery.lettering.js"),
        $.Deferred(function(deferred){
            $(deferred.resolve);
        })
    ).done(function(){
        $('.tlt').textillate({
            loop: false,
            minDisplayTime: 2000,
            in: {
                effect: 'bounceInDown',
                delay: 50,
                sync: false
            }

        });
    });

    $('#click').mouseover(function(){
        $('#click').addClass('add');
    });
    $('#click').mouseout(function(){
        $('#click').removeClass('add');
    });

});


