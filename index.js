const parentElement = document.querySelector('.background')

parentElement.addEventListener('click', function(event) {
  if (event.target.matches('.background__item')) {
    openDescription(event)
  } else {
    const items = document.querySelectorAll('.background__item')

    items.forEach(function(item) {
      item.classList.remove('active')
    })
  }
})

function openDescription (event) {
  const clickedElement = event.target
  const classes = clickedElement.classList

  const lastClass = classes[classes.length - 1]

  if (lastClass === 'active') {
    clickedElement.classList.remove('active')
  } else {
    clickedElement.classList.add('active')
  }

}
