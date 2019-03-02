$(document).delegate '*[data-toggle="lightbox"]', 'click', (event) ->
  event.preventDefault()
  $(this).ekkoLightbox()
  return
  
console.log('lightbox_bootstraped.coffee is working')
