console.log('extensions of gitHub commit is ready')
const list = []
const items = document.querySelectorAll('a.Link--primary')
let arrItems = Array.from(items)

arrItems.forEach(item =>
{
  list.push(item.innerHTML)
})

console.log(list.join('\n'))

