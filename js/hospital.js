(function(){
    'use strict'
    
    var $searchSelected=$('.header-search-selected'),
        curText=$searchSelected.text(),
        $searchDropdown=$('.header-search-dropdown'),
        $searchDropdownItem=$searchDropdown.find('.item'),
        $hosItem=$('.hos-item'),
        $hosItemTitles=$hosItem.find('.hos-item1'),
        curIndex,
        $hosWrap=$('.hos-wrap'),
        $hosContent=$('.hos-content'),
        link=$hosContent.find('a');
        

        
        // search-selected
        $searchSelected.on('click',function(e){
            $searchDropdown.show();
            e.stopPropagation();
        });
        $(document).on('click',function(){
            $searchDropdown.hide();
        });
        $searchDropdownItem.on('click',function(){
            var index=$searchDropdownItem.index(this),
                text=$searchDropdownItem.eq(index).text();
            
            if(curText===text) return;
            
            $searchSelected.text(text);
            curText=text;
            console.log('run');
        });


        // hospital system
        $hosItemTitles.on('click',function(){

            if($hosItemTitles.index(this)===curIndex) return;
            
            var index=$hosItemTitles.index(this);

                $hosItemTitles.removeClass('focus');
                $hosItemTitles.eq(index).addClass('focus');
    
                $hosWrap.hide();
                $hosWrap.eq(index).show();

                curIndex=index;
                console.log('run');
        });

        // 点击链接scheduling页面
        link.on('click',function(){
            window.open('scheduling.html','_self');
        })
        
})(jQuery);