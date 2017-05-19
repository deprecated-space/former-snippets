(function($) {
  $.fn.addStyle = function(options) {
    Object.keys(options).forEach((item) => {
      this.css(item, options[item])
    })
  };
})(jQuery)