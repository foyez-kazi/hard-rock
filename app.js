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
        ({ id, title, artist }) => `
    <div>
      <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${title}</h3>
            <p class="author lead">Album by <span>${artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="fetchLyrics(${id}, '${title}', '${artist.name}', '${BASE_URL}/v1/${artist.name}/${title}')" class="btn btn-success">Get Lyrics</button>
        </div>
      </div>
      <div id="${id}" class="single-lyrics text-center"></div>
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
  const { data } = await (await fetch(url)).json()

  showTrackList(data)
}

/**
 * clear lyrics
 * @param {string} id name of lyrics tag id
 */
const clearLyrics = (id) => {
  const lyricsTag = document.getElementById(id)
  lyricsTag.textContent = ''
}

/**
 * Get data from give api link
 * @param {string} id id of the item
 * @param {string} trackTitle title of the track
 * @param {string} artistName name of the artist
 * @param {string} url api link
 */
const fetchLyrics = async (id, tackTitle, artistName, url) => {
  const { lyrics, error } = await (await fetch(url)).json()
  const lyricsTag = document.getElementById(id)
  const allLyricsTags = document.querySelectorAll('.single-lyrics')

  // clear all lyrics content
  allLyricsTags.forEach((tag) => (tag.textContent = ''))

  if (lyrics) {
    lyricsTag.innerHTML = `
      <button class="btn go-back text-white bg-primary" onclick="clearLyrics(${id})">&lsaquo;</button>
      <h2 class="text-success mb-4">${artistName} - ${tackTitle}</h2>
      <pre class="lyric text-white">${lyrics}</pre>
    `
  } else {
    lyricsTag.innerHTML = `<p class="text-danger">${error}</p>`
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
