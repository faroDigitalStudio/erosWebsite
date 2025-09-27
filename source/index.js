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
      // Mobile/tablet: keep header readable (aligns with your CSS @media rule)
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
  }

  // Bind once, recalc often
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", setHeaderState);
  $(document).ready(function () {
    setHeaderState();
  });
})();

// ===== Magnify overlay =====
function magnify(imglink) {
  $("#img_here").css("background", "url('" + imglink + "') center center");
  $("#magnify").css("display", "flex").addClass("animated fadeIn");
  setTimeout(function () {
    $("#magnify").removeClass("animated fadeIn");
  }, 800);
}
function closemagnify() {
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function () {
    $("#magnify").css("display", "none").removeClass("animated fadeOut");
    $("#img_here").css("background", "url('') center center");
  }, 800);
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

// ===== Smooth anchor scroll =====
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      var hash = this.hash;
      var target = $(hash);
      if (target.length > 0) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: target.offset().top }, 800);
      }
    }
  });
});

// ===== Logo click scroll-to-top =====
$(document).ready(function () {
  $("#logo a, .logo-link").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});