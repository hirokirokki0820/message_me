// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// Loads all Semantic javascripts
//= require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

/* jQuery for Semantic UI  */
$(function(){

  /* ドロップダウン */
  $('.ui.dropdown').dropdown();

  /* アコーディオン */
  $('.ui.accordion').accordion();

  /* ポップアップ */
  $('.activating.element').popup();
  $('.button').popup({
    inline: true
  });

});
