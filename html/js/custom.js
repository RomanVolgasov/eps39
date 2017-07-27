(function() {

  var getTriggerElement = function(el) {
    var isCollapse = el.getAttribute('data-collapse');
    if (isCollapse !== null) {
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }
  };

  var collapseClickHandler = function(event) {
    var triggerEl = getTriggerElement(event.target);
    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    if (targetEl) {
      triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-on');
    }
  };

  document.addEventListener('click', collapseClickHandler, false);

})(document, window);

$(function(){
  var current = location.pathname;
  $('#navigation a').each(function(){
    var $this = $(this);
    // if the current path is like this link, make it active
    if($this.attr('href').indexOf(current) !== -1){
      $this.addClass('active');
    }
  })
})

$(document).ready(function() { 

  (function ($) { 
    $('.tab .tab__list').addClass('active-tab').find('> li:eq(0)').addClass('current-tab');
    
    $('.tab .tab__list .tab__list-item').click(function (g) { 
      var tab = $(this).closest('.tab'), 
        index = $(this).closest('.tab__list-item').index();
      
      tab.find('.tab__list-item').removeClass('current-tab');
      $(this).closest('.tab__list-item').addClass('current-tab');
      
      tab.find('.tab__container').find('.tab__item-block').not('.tab__item-block:eq(' + index + ')').slideUp();
      tab.find('.tab__container').find('.tab__item-block:eq(' + index + ')').slideDown();
      
      g.preventDefault();
    } );
  })(jQuery);

});



