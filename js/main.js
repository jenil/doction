;(function($) {
  console.log()
  var _ = {
    logoImg: '#logo img',
    nav: '#main-nav',
    pages: '#pages',
    page: '#pages .page'
  }
  var isAddingPage = false

  var logoImg = $(_.logoImg)

  if (logoImg.src == document.location.href) {
    console.log('No logo image')
    logoImg.src = logoImg.getAttribute('mv-default')
  }

  document.addEventListener('mv-save', function(event) {
    // console.log('mv-save : ', event.action, event.property, event.value)
  })

  function forceUpdateData(e) {
    console.log(e.type, e.target)
    Mavo.all[0].render(Mavo.all[0].getData())
  }

  $('.mv-add-page').addEventListener('click', e => {
    console.log('click mv-page-add', $$('.mv-add-section').length)
    setTimeout(() => {
      $$('.mv-add-section').forEach(e =>
        e.addEventListener('click', forceUpdateData)
      )
    }, 500)
  })

  $$('.mv-add-section').forEach(e =>
    e.addEventListener('click', forceUpdateData)
  )

  $('.page .subpage').addEventListener('mv-change', e => {
    console.log('mv-change .page .subpage', e)
    Mavo.all[0].render(Mavo.all[0].getData())
  })
})($)
