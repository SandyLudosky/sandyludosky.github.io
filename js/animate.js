// JavaScript Document
$(document).ready(function() {
  $('#welcome a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('#welcome a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
  });

  $('a#top[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a#top[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
  });
});

