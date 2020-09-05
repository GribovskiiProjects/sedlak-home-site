$(document).ready(function() {
  $('#library .card').on('click', function () {
    var link = $(this).attr('href');
    if (link) window.location = link;
  })
});