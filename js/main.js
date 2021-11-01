

        $(document).ready(function() {
            $('.navbar-head').click(function() {
                $('#nav-icon1').toggleClass('open');
            });
        });

    $('.navbar-head').on('click', function (e) {
        e.preventDefault();
        var $target = $('.mobile-menu');
        if (!$target.is(':visible')) {
            $target.css('display', 'block');
            $target.animate({
                right: 0
            });
         $('.mobile-menu-overlay').show();
         $('html').css("overflow", "hidden");
        } else {
            $target.animate({
                right: -100 + '%'
            }, function () {
                $target.css('display', 'none');

            });
            $('.mobile-menu-overlay').hide();
            $('html').css('overflow', 'inherit');        
        }
    });
         $('.mobile-menu-overlay').on('click', function (e) {
        e.preventDefault();
        var $target = $('.mobile-menu');
        $('#nav-icon1').removeClass('open');  
           $target.animate({
                right: -100 + '%'
            }, function () {
                $target.css('display', 'none');
                       
            });
            $('.mobile-menu-overlay').hide();
            $('html').css('overflow', 'inherit');  
    });
         
         
const anchors = document.querySelectorAll('a[href*="#"]:not([href="#modal-how-to-play"]):not([href="#modal-close"])')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}