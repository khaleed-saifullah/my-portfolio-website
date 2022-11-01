// // $(document).ready(function () {
// //     $("a[href*=#]").bind("click", function (e) {
// //         e.preventDefault(); // prevent hard jump, the default behavior

// //         var target = $(this).attr("href"); // Set the target as variable

// //         // perform animated scrolling by getting top-position of target-element and set it as scroll target
// //         $("html, body")
// //             .stop()
// //             .animate(
// //                 {
// //                     scrollTop: $(target).offset().top,
// //                 },
// //                 600,
// //                 function () {
// //                     location.hash = target; //attach the hash (#jumptarget) to the pageurl
// //                 }
// //             );

// //         return false;
// //     });
// // });

// // $(window)
// //     .scroll(function () {
// //         var scrollDistance = $(window).scrollTop();

// //         // Show/hide menu on scroll
// //         //if (scrollDistance >= 850) {
// //         //		$('nav').fadeIn("fast");
// //         //} else {
// //         //		$('nav').fadeOut("fast");
// //         //}

// //         // Assign active class to nav links while scolling
// //         $(".page-section").each(function (i) {
// //             if ($(this).position().top <= scrollDistance) {
// //                 $(".profile-aside-menu a.active").removeClass("active");
// //                 $(".profile-aside-menu a").eq(i).addClass("active");
// //             }
// //         });
// //     })
// //     .scroll();
// $(document).ready(function () {
//     $(".profile-aside-menu ul").onePageNav({
//         currentClass: "current",
//         changeHash: true,
//         scrollSpeed: 500,
//         scrollThreshold: 0.2,
//         filter: ":not(.external)",
//         easing: "swing",
//     });
// });

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });

$(window)
    .scroll(function () {
        var scrollDistance = $(window).scrollTop() + 50;

        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //		$('nav').fadeIn("fast");
        //} else {
        //		$('nav').fadeOut("fast");
        //}

        // Assign active class to nav links while scolling
        $(".page-section").each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $(".profile-aside-menu a.active").removeClass("active");
                $(".profile-aside-menu a").eq(i).addClass("active");
            }
        });
    })
    .scroll();
