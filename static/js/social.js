var main = {
    total: { 
        fb_cnt:null,
        vk_cnt:null
    },
    init: function(){
        pageuri = from_page.pageuri; 
    },
    display_block: function(container){
        $(container).show();
    }
};
//
// социальные кнопки и счетчики
//
var social = {
    // получаем счетчик facebook
    fb_count: function(container){
        $.ajax('http://graph.facebook.com/',
            {
                method: "GET",
                data: { id: pageuri },
                dataType: "json",
                success: function(data) {
                    if (data && data.share) {
                        if (data.share.share_count != undefined) {
                            $(container).text(data.share.share_count);
                            main.total.fb_cnt = parseInt(data.share.share_count);
                        }
                    }
                }
            });
    },
    // получаем счетчик vkontakte
    vk_count: function(container){
        VK = {};
        VK.Share = {};
        VK.Share.count = function(index, count){
            $(container).text(count);
            main.total.vk_cnt = parseInt(count);
        };
        $.ajax('https://vk.com/share.php',
            {
                method: "GET",
                data: { id: pageuri, act: 'count' },
                dataType: "script"
            });
    },
    // по клику по кнопке
    click_button: function(container){
         var click = false;
           $(container).click(function(){
               if(!click){

                   var count = parseInt($(this).text());
                   if(!isNaN(count)){
                       count = count + 1;
                       $(this).text(count);
                   }
                   click = true;
               }
               // открываем окно
               window.open($(this).attr("href"),'displayWindow', 'width=700,height=400,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
                return false;
           });
    }
};

$(function(){
    main.init();
});