// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

/* Semantic UI用の javascripts ファイル読み込み */
// = require semantic-ui

import "controllers"
import "jquery"
// link_to の method: :delete を正常に動かすため必要
import Rails from "@rails/ujs"
Rails.start()


/* jQuery for Semantic UI  */
$(function(){

  /* ドロップダウン */
  $('.ui.dropdown').dropdown();

  /* アコーディオン */
  $('.ui.accordion').accordion();

  /* フラッシュメッセージを閉じるボタン */


  /* ポップアップ */
  // $('.button').popup({
  //   inline: true
  // });

});
