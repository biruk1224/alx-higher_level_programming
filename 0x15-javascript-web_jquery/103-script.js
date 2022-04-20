document.addEventListener('DOMContentLoaded', function () {
  $('input#btn_translate').on('keypress click',function (e) {
    $.get('https://fourtonfish.com/hellosalut/?lang=' +
$('input#language_code').val(), function (data) {
    if (e.which === 13 || e.type === 'click') {
      $('div#hello').html(data.hello);
    }
    });
  });
});