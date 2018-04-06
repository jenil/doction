;(function($) {
  console.log()
  var _ = {
    logoImg: '#logo img',
    nav: '#main-nav',
    pages: '#pages',
    page: '#pages .page'
  }
  var isAddingPage = false;

  function checkPages() {
    console.log('pages:', $(_.pages).length);
  }

  var logoImg = $(_.logoImg)

  if (logoImg.src == document.location.href) {
    console.log('No logo image')
    logoImg.src = logoImg.getAttribute('mv-default')
  }

  document.addEventListener('mv-save', function(event) {
    // console.log('mv-save : ', event.action, event.property, event.value)
    checkPages()
    if (event.property == 'pageTitle') {
      // Mavo.Collection.get($(_.page))
      //   .add()
      //   .render({ content: event.value })
    }
  })

})($)
