(function () {
    'use strict'
    var $searchSelected=$('.header-search-selected'),
        curText=$searchSelected.text(),
        $searchDropdown=$('.header-search-dropdown'),
        dropdownItem=$searchDropdown.find('.item');

    $searchSelected.on('click',function(e){
        $searchDropdown.show();
        e.stopPropagation();
    });
    $(document).on('click',function(){
        $searchDropdown.hide();
    });
    dropdownItem.on('click',function(){
        var index=dropdownItem.index(this),
            text=dropdownItem.eq(index).text();
            
            if(curText===text) return;
            
            $searchSelected.text(text);
            curText=text;
            console.log('run');
    })


    // 科室列表
    var weeks=['日','一','二','三','四','五','六'],
        today=new Date(),
        year=today.getFullYear(),
        month=today.getMonth(),
        day=today.getDate();
        
    var $sDetail=$('.scheduling-detail-mid'),
        html='<div class="scheduling-detail-mid-header clearfix">';

        for(var i=0;i<49;i++){
            var temp=new Date(year,month,day+i),
                nYear=temp.getFullYear(),
                nMonth=temp.getMonth()<10?'0'+(temp.getMonth()+1):temp.getMonth()+1,
                nDay=temp.getDate()<10?'0'+temp.getDate():temp.getDate(),
                nWeek=temp.getDay();

            html+='<div class="time"><p>星期'+weeks[nWeek]+'</p><p>'+nYear+'-'+nMonth+'-'+nDay+'</p></div>';
        }
        html+='</div><div class="scheduling-detail-mid-body">';

        for(var j=0;j<49;j++){
            html+='<div class="appoint"><div class="timenode morning"></div><div class="timenode noon">约满</div><div class="timenode night"></div></div>'
        }
        html+='</div>';
        $sDetail.html(html);

    var leftBtn=$('.scheduling-detail-left').find('.prev'),
        rightBtn=$('.scheduling-detail-right').find('.next'),
        header=$('.scheduling-detail-mid-header'),
        body=$('.scheduling-detail-mid-body'),
        index=0;
        

    leftBtn.on('click',function(){
        if(index<=0) return;
        header.css('left',-840*(index-1)+'px');
        body.css('left',-840*(index-1)+'px');
        index--;
        
    });

    rightBtn.on('click',function(){
        if(index>=6) return;
        header.css('left',-840*(index+1)+'px');
        body.css('left',-840*(index+1)+'px');
        index++;  
    });
})(jQuery);