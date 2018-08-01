/**
 * Created by 1 on 2018/8/1.
 */
$(document).ready(function(){
    var count=0;
    var _banner=$('.inner');
    var _button=$('.model-switch span');
    function change(){
        if(count<3){
            count++;
        }
        if(count>2){
            count=0;
            _banner.animate({'margin-left':0+'px'});
            _button.toggleClass('active',false);
            _button.eq(0).addClass('active');
        }else{
            _button.toggleClass('active',false);
            _button.eq(count).addClass('active');
        }
        _banner.animate({'margin-left':-510*count+'px'});
    };
    var t=setInterval(change,2500);
    $('.inner,.model-switch').mouseover(function(){
        clearInterval(t);
    })
    $('.inner,.model-switch').mouseout(function(){
        t=setInterval(change,2500);
    })
    _button.on('click',function(){
        var i=$(this).text()-1;
        _banner.animate({'margin-left':-510* i+'px'});
        _button.toggleClass('active',false);
        _button.eq(i).addClass('active');
    })
})