const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const fancyResults = document.getElementById('fancy-results')
const BASE_URL = 'https://api.lyrics.ovh'

/**
 * Show track list
 * @param {array} data array of data to show track list
 */
const showTrackList = (data) => {
  if (!data.length) {
    html = `
      <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-12">
            <h3>No results found.</h3>
        </div>
      </div>
    `
  } else {
    html = data
      .slice(0, 10)
      .map(
        ({ id, title, album, artist }) => `
    <div id="${id}" class="single-result row align-items-center my-3 p-3">
      <div class="col-md-9">
          <h3 class="lyrics-name">${title}</h3>
          <p class="author lead">Album by <span>${album.title}</span></p>
      </div>
      <div class="col-md-3 text-md-right text-center">
          <button onclick="fetchLyrics(${id}, '${BASE_URL}/v1/${artist.name}/${title}')" class="btn btn-success">Get Lyrics</button>
      </div>
    </div>
  `,
      )
      .join('')
  }

  fancyResults.innerHTML = html
}

/**
 * Get track list from the give api link
 * @param {string} url api link
 */
const fetchTrackList = async (url) => {
  const res = await (await fetch(url)).json()
  const data = res.data

  showTrackList(data)
}

/**
 * Get data from give api link
 * @param {string} id id of the item
 * @param {string} url api link
 */
const fetchLyrics = async (id, url) => {
  const { lyrics, error } = await (await fetch(url)).json()
  const itemTag = document.getElementById(id)

  if (lyrics) {
    itemTag.insertAdjacentHTML(
      'afterend',
      `<pre class="lyric text-white text-center">${lyrics}</pre>`,
    )
  } else {
    itemTag.insertAdjacentHTML(
      'afterend',
      `<p class="text-danger text-center">${error}</p>`,
    )
  }
}

// listen when search button is clicked
searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value

  fetchTrackList(`${BASE_URL}/suggest/${searchValue}`)
})

// listen when enter button is pressed
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const searchValue = searchInput.value

    fetchTrackList(`${BASE_URL}/suggest/${searchValue}`)
  }
})