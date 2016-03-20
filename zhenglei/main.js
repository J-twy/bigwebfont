/**
 * Created by Administrator on 2016/3/20.
 */
$(function(){
    var sliders = $('[data-slidizle]').slidizle({
        beforeChange : function(api) {


        }
    });
    var $slider = $('#progressbar-slider');
    console.log($slider.stop());
})