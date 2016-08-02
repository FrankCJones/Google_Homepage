jQuery(document).ready(function($) {

 $(".sbinput").focus(function(){
   $(this).parent().removeClass("search_box");
   $(this).parent().addClass("bluebdr");

  }).blur(function(){
       $(this).parent().removeClass("bluebdr");
   $(this).parent().addClass("search_box");
  })

});