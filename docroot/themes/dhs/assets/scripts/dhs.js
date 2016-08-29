/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap) {

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {
    sayHello: function() {
      console.log("Hello");
    }
  });

  Drupal.theme.sayHello();

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
