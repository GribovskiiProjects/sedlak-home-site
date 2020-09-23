function createVideoIframe(videoId) {
  return "<iframe " +
      "id=\"video-frame\"" +
      "width=\"100%\" " +
      "height=\"500em\" " +
      "src=\"https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1\" " +
      "frameborder=\"0\" " +
      "allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" " +
      "allowfullscreen></iframe>"
}

$(document).ready(function() {
  $('#library .card').on('click', function () {
    var link = $(this).attr('href');
    if (link) window.location = link;
  });

  $('[target=gallery-modal]').on('click', function() {
    $('#gallery-modal').modal('show')
    
    var id = $(this).attr('gallery-id') * 1
    if (typeof id !== 'undefined') {
      $('#gallery-carousel').carousel(id)
    }
  });

  $('[target=video-modal]').on('click', function() {
    var videoId = $(this).attr('video-id');
    var iframeCode = createVideoIframe(videoId);
    $('#video-container').html(iframeCode);
    $('#video-modal').modal('show');
    $('#video-modal').on('hidden.bs.modal', function() {
      $('#video-frame').remove()
    })
  });
});