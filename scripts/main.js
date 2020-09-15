$(document).ready(function() {
  $('#library .card').on('click', function () {
    var link = $(this).attr('href');
    if (link) window.location = link;
  })

  $('[target=gallery-modal]').on('click', function() {
    $('#gallery-modal').modal('show')

    var id = $(this).attr('gallery-id') * 1
    if (typeof id !== 'undefined') {
      $('#gallery-carousel').carousel(id)
    }
  })
});