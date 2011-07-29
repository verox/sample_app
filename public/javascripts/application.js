jQuery(function() {
  jQuery('#micropost_content').live("keyup", function() {
    var remainingChars = 140 - jQuery(this).val().length;
    jQuery('.remaining-chars').html(remainingChars);
  });
});
