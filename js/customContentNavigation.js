/**
 * 
 * Auther SM@K <smali.kazmi@hotmail.com>
 * Website: smak.pk
 * 
 */

(function($){
    $.fn.customContentNavigation = function() {
      var _container = this;
      return this.each(function(){
         $(_container).find('.btn-nav').on('click', function(){
            var _this = this;
            var contentToShow = $(_this).attr('data-link');
            var contentToHide = $(_container).find('.active').attr('data-link');
            $(_container).find('.active').removeClass('active');
            $(_this).addClass('active');
            $(contentToHide).hide();
            $(contentToShow).show();
         });
         
         $(_container).find('.btn-nav').each(function(){
            $($(this).attr('data-link')).hide(); 
         });
         
         $(_container).find('.btn-nav:first').click();
      });
    };
}(jQuery));

