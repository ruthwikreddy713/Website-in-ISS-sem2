var Navigation = $("#Navbar");
    stickyDiv = "sticky";
    Header = $('head').height();
$(window).scroll(function() {
  if( $(this).scrollTop() >Header ) {
    Navigation.addClass(stickyDiv);
  } else {
    Navigation.removeClass(stickyDiv);
  }
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 90) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

 