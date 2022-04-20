document.addEventListener('DOMContentLoaded', function () {
  $('input#btn_translate').click(function () {
    $.get('https://fourtonfish.com/hellosalut/?lang=' +
$('input#language_code').val(), function (data) {
      $('div#hello').html(data.hello);
    });
  });
});
