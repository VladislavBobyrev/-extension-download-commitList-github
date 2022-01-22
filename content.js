console.log('extensions of gitHub commit is ready')
const list = []
const items = document.querySelectorAll('a.Link--primary')
let arrItems = Array.from(items)

arrItems.forEach(item =>
{
  list.push(item.innerHTML)
})

console.log(list.join('\n'))

const toc = document.querySelector('.toc-diff-stats')
const button = document.createElement('div')
button.innerHTML = 'загрузить файл с названиями измененных коммитов'
button.classList.add('manifestButton')
toc.appendChild(button)

// функция для загрузки файла
button.addEventListener('click', () =>
{
    console.log(list)
    let el = document.createElement('a');
    el.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(list)}`);
    el.setAttribute('download', 'text.txt');
    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
})