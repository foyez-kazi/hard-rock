# Hard Rock

## api link: https://api.lyrics.ovh/suggest/search-text

### Parameters

| name        | description                                | datatype |
| ----------- | ------------------------------------------ | -------- |
| search-text | Name of the artist or song Example: summer | string   |

### Response

- status code: 200
- Headers

```
Content-Type:application/json
```

- Body

```json
{
  "data": [
    {
      "id": 88936747,
      "readable": true,
      "title": "Summer",
      "title_short": "Summer",
      "title_version": "",
      "link": "http://www.deezer.com/track/88936747",
      "duration": 222,
      "rank": 866172,
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "http://cdn-preview-3.deezer.com/stream/c-3038af1872fba51b984b9e8272fd5de2-5.mp3",
      "artist": {
        "id": 12178,
        "name": "Calvin Harris",
        "link": "http://www.deezer.com/artist/12178",
        "picture": "http://api.deezer.com/artist/12178/image",
        "picture_small": "http://cdn-images.deezer.com/images/artist/fa57fb13c77a51c68374f9e98686ee7d/56x56-000000-80-0-0.jpg",
        "picture_medium": "http://cdn-images.deezer.com/images/artist/fa57fb13c77a51c68374f9e98686ee7d/250x250-000000-80-0-0.jpg",
        "picture_big": "http://cdn-images.deezer.com/images/artist/fa57fb13c77a51c68374f9e98686ee7d/500x500-000000-80-0-0.jpg",
        "picture_xl": "http://cdn-images.deezer.com/images/artist/fa57fb13c77a51c68374f9e98686ee7d/1000x1000-000000-80-0-0.jpg",
        "tracklist": "http://api.deezer.com/artist/12178/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 8990105,
        "title": "Motion",
        "cover": "http://api.deezer.com/album/8990105/image",
        "cover_small": "http://cdn-images.deezer.com/images/cover/42e13c6a1f25fd821407b4d4762eb3ce/56x56-000000-80-0-0.jpg",
        "cover_medium": "http://cdn-images.deezer.com/images/cover/42e13c6a1f25fd821407b4d4762eb3ce/250x250-000000-80-0-0.jpg",
        "cover_big": "http://cdn-images.deezer.com/images/cover/42e13c6a1f25fd821407b4d4762eb3ce/500x500-000000-80-0-0.jpg",
        "cover_xl": "http://cdn-images.deezer.com/images/cover/42e13c6a1f25fd821407b4d4762eb3ce/1000x1000-000000-80-0-0.jpg",
        "tracklist": "http://api.deezer.com/album/8990105/tracks",
        "type": "album"
      },
      "type": "track"
    }
  ],
  "total": 291,
  "next": "http://api.deezer.com/search?limit=15&q=summer&index=15"
}
```

## api link: https://api.lyrics.ovh/v1/artist/title

### Parameters

| name   | description                                        | datatype |
| ------ | -------------------------------------------------- | -------- |
| artist | Name of the artist Example: Coldplay               | string   |
| title  | Title of the song Example: Adventure of a Lifetime | string   |

### Response

- status code: 200
- Headers

```
Content-Type:application/json
```

- Body

```json
{
  "lyrics": "Here the lyrics of the song"
}
```

### Response

- status code: 400
- Headers

```
Content-Type:application/json
```

- Body

```json
{
  "error": "No lyrics found"
}
```
