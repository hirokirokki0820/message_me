// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// Loads all Semantic javascripts
//= require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

// サイト全体で ”Turbo Drive” を無効化する
// data: { turbo: true, ... } とすることて必要に応じて使用可能
Turbo.session.drive = false;



/* jQuery for Semantic UI  */
$(function(){

  /* ドロップダウン */
  $('.ui.dropdown').dropdown();

  /* アコーディオン */
  $('.ui.accordion').accordion();

  /* ポップアップ */
  // $('.button').popup({
  //   inline: true
  // });

});
