// Robust header behavior (desktop flip on scroll; mobile stays white per CSS)
(function () {
  function setHeaderState() {
    var width = $(window).width();
    var scrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;

    if (width >= 1000) {
      if (scrolled) {
        $("#header").css({
          "background": "#fff",
          "color": "#2A2A2A",
          "box-shadow": "0 0 20px rgba(0,0,0,0.09)",
          "padding": "2vh 4vw"
        });
        $("#navigation a").off(".hoverfix").on("mouseenter.hoverfix", function () {
          $(this).css("border-bottom", "2px solid #F2CC8F");
        }).on("mouseleave.hoverfix", function () {
          $(this).css("border-bottom", "2px solid transparent");
        });
      } else {
        $("#header").css({
          "background": "transparent",
          "color": "#fff",
          "box-shadow": "0 0 0 rgba(0,0,0,0)",
          "padding": "6vh 4vw"
        });
        $("#navigation a").off(".hoverfix").on("mouseenter.hoverfix", function () {
          $(this).css("border-bottom", "2px solid #fff");
        }).on("mouseleave.hoverfix", function () {
          $(this).css("border-bottom", "2px solid transparent");
        });
      }
    } else {
      // Mobile/tablet: keep header readable (aligns with CSS @media rule)
      $("#header").css({
        "background": "#fff",
        "color": "#2A2A2A",
        "box-shadow": "0 0 0 rgba(0,0,0,0)",
        "padding": "4vh 2vw"
      });
      $("#navigation a").off(".hoverfix").on("mouseenter.hoverfix", function () {
        $(this).css("border-bottom", "2px solid #F2CC8F");
      }).on("mouseleave.hoverfix", function () {
        $(this).css("border-bottom", "2px solid transparent");
      });
    }

    // After state changes, ensure hero isn't hidden on mobile
    padHero();
  }

  // Keep the hero below the sticky header on mobile only
  function padHero() {
    var topPart = document.getElementById('top_part');
    if (!topPart) return;
    var isMobile = window.innerWidth < 1000;
    if (isMobile) {
      var h = document.getElementById('header').offsetHeight || 0;
      topPart.style.marginTop = h + 'px';
    } else {
      topPart.style.marginTop = '0px';
    }
  }

  // Bind once, recalc often
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", setHeaderState);
  $(document).ready(function () {
    setHeaderState();
    padHero();
  });
  window.addEventListener("load", padHero);
})();

// ===== Magnify overlay =====
function magnify(imglink){
  $("#img_here").css("background", "url('" + imglink + "') center center / contain no-repeat");
  $("body").addClass("modal-open");                 // lock scroll
  $("#magnify").css("display","flex").addClass("animated fadeIn");
  setTimeout(function(){ $("#magnify").removeClass("animated fadeIn"); },800);
}

function closemagnify(){
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function(){
    $("#magnify").css("display","none").removeClass("animated fadeOut");
    $("#img_here").css("background", "");
    $("body").removeClass("modal-open");            // unlock scroll
  },800);
}

// ===== Loading overlay failsafe =====
setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut").css("display", "none");
  }, 800);
}, 1650);

window.addEventListener("load", function () {
  var l = document.getElementById("loading");
  if (l) l.style.display = "none";
});

// ===== Smooth anchor scroll with fixed-header offset (snappier) =====
$(function () {
  $('#navigation a[href^="#"]').off(".smooth").on("click.smooth", function (e) {
    e.preventDefault();
    var sel = $(this).attr("href");
    var $t = $(sel);
    if (!$t.length) return;

    var headerH = $('#header').outerHeight() || 0;
    $('html, body').stop().animate({
      scrollTop: $t.offset().top - headerH - 8
    }, 550, 'swing', function () {
      history.replaceState(null, '', sel);
    });
  });
});

// ===== Logo click scroll-to-top =====
$(document).ready(function () {
  $("#logo a, .logo-link").on("click", function (event) {
    event.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing');
  });
});