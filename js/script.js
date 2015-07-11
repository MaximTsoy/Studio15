/**
 * Created by MiniRaptor on 28.06.2015.
 */
$(function(){
    $('#wrapper').noisy({
        intensity: 0.9, //������������� ����
        size: 200, // ������
        opacity: 0.08, // ������������
        monochrome: false // ����������� ���
    });
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

