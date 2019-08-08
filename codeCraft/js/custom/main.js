function render () {
    if(typeof(productList) != "undefined") {
        let pdtList = productList;
        if(pdtList.products && pdtList.products.length) {
            let pdtListDom = pdtList.products.map(constructPdtList);
            let parentEle = $('.pdtListCont');
            parentEle.append(pdtListDom);
            let x = $('.pdtListDetail:last-child').clone().addClass('duplicate');
            parentEle.prepend(x);
        }
    }
}
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
            $('.backBtn').show();
            $('.indicator').addClass('show');
            $('.rightPanel').show();
            $('.productTitle').text($('.pdtTitle',$this).text());
            $this.addClass('active');
        }
    });

    $('.backBtn').on('click',function(){    
        $('.indicator').removeClass('show');
        $('.rightPanel').hide();
        $('.backBtn').hide();
        $('.pdtListDetail.active').removeClass('active');
        toggleOff();
        resetMode();
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
            renderPdtDetails();
        } else {
            $('.deviceDetWrap').hide();
        }
    });
}

function toggleOff() {
    if($('.toggleBtn input').is(':checked')) {
        $('.toggleBtn input').click();
    }
}

function renderPdtDetails() {
    let pdtId = $('.pdtListDetail.active').attr('identifier');
    constructSkus(pdtId);
    resetMode();
}

function skuClick(e) {
        let $this = $(e);
        resetMode();
        if($this.is(':checked') && !$this.parents('.active').length) {
            let curEle = $('.skuClrCont.active');
            $('.colorSku input',curEle).prop('checked',false);
            curEle.removeClass('active');
            $this.parents('.skuClrCont').addClass('active');
            $('.featureCont , .quickDemoCont').removeClass('disabled');
        } else {
            $('.skuClrCont.active').removeClass('active');
        }
}

function resetMode() {
    $('.featureCont , .quickDemoCont').addClass('disabled');
    $('.featureCont .active').removeClass('active');
    $('.swipeBall , .leftScroller').removeAttr('style');
    $('.volume').text(0);
}

function constructPdtList (data) {
    if (data.name && data.image && data.identifier) {
        return `<div class="pdtListDetail" identifier="${data.identifier}">
                    <div class="pdtImg">
                        <img src="${data.image}">
                    </div>
                    <div class="pdtDetail">
                        <ul class="pdtDetailList">
                            <li class="pdtTitle">${data.name}</li>
                            ${data.type ? `<li class="pdtType"><span class="">${data.type.label} </span>${data.type.value}</li>` : ''}
                        </ul>
                    </div>
                </div>`
    }
}

function constructSkus (id) {
    let pdtSkus = productList.products;
    var curEle = pdtSkus.filter((ele) => ele.identifier == id ).pop();

    if(curEle.properties && curEle.properties.skus && curEle.properties.skus.length) {
        let skus = curEle.properties.skus;
        var skuCont = skus.map(data => {
            return `<div class="skuClrCont">
                    <label class="colorSku">
                    <input type="checkbox" onclick="skuClick(this)">
                    <span class="selected" style="background-color: ${data.color};"></span>
                    </label>
                </div>`
        });
        $('.deviceSkus').html(skuCont)
    }
}

$(document).ready(function(){
    render();
    registerEvents();
});