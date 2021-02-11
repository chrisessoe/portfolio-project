  $(function () {
        $(".carousel").carousel({ interval: 5000 });
   });
        
$(function () {
            $(document).scroll(function () {
                var $nav = $("#mainNavbar");
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            });
        });
