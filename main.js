async function getContent() {
  let data
  await fetch('https://dev.to/api/articles?username=3mam').then(res => data = res.json())
  return data
}

async function main() {
  const data = await getContent()
  const body = document.getElementById('blog')
  data.forEach((element, index) => {
    const entry = document.createElement('a')
    entry.className = 'entry'
    entry.href = element.url
    const title = document.createElement('h2')
    title.className = 'title'
    title.innerHTML = element.title
    const date = document.createElement('p')
    date.className = 'date'
    date.innerHTML = new Date(element.published_timestamp).toLocaleDateString('pl')
    const description = document.createElement('p')
    description.className = 'description'
    description.innerHTML = element.description
    entry.appendChild(title)
    entry.appendChild(date)
    entry.appendChild(description)
    entry.appendChild(document.createElement('br'))
    body.appendChild(entry)
  })
}

main()