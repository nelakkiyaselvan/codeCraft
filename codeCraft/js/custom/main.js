function registerEvents() {

    $('.pdtListDetail').on('click',function(){
        let $this = $(this);
        if(!$this.hasClass('active')){
            let prevEle = $('.pdtListDetail.active')
            $('.pdtListCont').append(prevEle);
            $this.insertAfter($('.pdtListDetail')[0]);
            $('.pdtListDetail.active').removeClass('active');
            $('body').animate({scrollTop:0},100);
            toggleOff();
            $('.indicator').addClass('show');
            $('.rightPanel').show();
            $('.productTitle').text($('.pdtTitle',$this).text());
            $this.addClass('active');
            
        }
    });

    $('.backBtn').on('click',function(){    
        $('.indicator').removeClass('show');
        $('.rightPanel').hide();
        $('.pdtListDetail.active').removeClass('active');
        toggleOff();
    });

    $('.modes').on('click',function(){
        let $this = $(this);
        if(!$this.hasClass('active')){
            $('.modes.active').removeClass('active')
            $this.addClass('active');
            let demoEle = $('.quickDemoCont');
            let volume = $('.modeVolume',$this).text().trim();
            let diskMov = volume.split('%').join('');
            let degree = (50 > diskMov) ? (360 - 25) : ((50 == diskMov) ? 360 : (360 + 78));
    
            let viewPort = demoEle.offset().top - $('body').height() + demoEle.outerHeight();
            $('body').animate({scrollTop: viewPort},100);
    
            $('.swipeBall').css({'transform':'rotate(' + degree + 'deg)'});
            $(".scrollerWrap .leftScroller").width(volume);
            $('.volume').text(diskMov);
        }
    });

    $('.toggleBtn input').on('click',function(){
        if($(this).is(':checked')) {
            $('.deviceDetWrap').show();
        } else {
            $('.deviceDetWrap').hide();
        }
    });

    $('.colorSku input').on('click',function(){
        let $this = $(this);
        if($this.is(':checked')) {
            let curEle = $('.skuClrCont.active');
            $('.colorSku input',curEle).prop('checked',false);
            curEle.removeClass('active');
            $this.parents('.skuClrCont').addClass('active');
        }
    });
}

function toggleOff() {
    if($('.toggleBtn input').is(':checked')) {
        $('.toggleBtn input').click();
    }
}

$(document).ready(function(){
    registerEvents();
});