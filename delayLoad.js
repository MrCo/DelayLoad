/*
 * 图片延时加载
 * Date:2011-06-17
 * CodeBy:Zhongke
 * Mail:zhongke@hichina.com
*/
(function ($) {
    var delayLoad = function () {
        $(window).scroll(function () {
            var sTop = $(this).scrollTop() + $(this).height();
            $('img[data-url]').each(function () {
                if ($(this).offset().top <= sTop) {
                    $(this).attr('src', $(this).attr('data-url')).removeAttr('data-url');
                }
            })
        });
        $(window).scroll();
    }
    $.delayLoad = delayLoad;
})(jQuery)