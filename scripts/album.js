var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { name: 'Blue', length: '4:26'},
    { name: 'Green', length: '3:14'},
    { name: 'Red', length: '5:01'},
    { name: 'Pink', length: '3:21'},
    { name: 'Magenta', length: '2:15'}
  ]
};

var albumMarconi = {
  name: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { name: 'Hello, Operator?', length: '1:01' },
    { name: 'Ring, ring, ring', length: '5:01' },
    { name: 'Fits in your pocket', length: '3:21'},
    { name: 'Can you hear me now?', length: '3:14' },
    { name: 'Wrong phone number', length: '2:15'}
  ]
};

var albumYellowCard = {
  name: 'Ocean Avenue',
  artist: 'Yellowcard',
  lebel: 'Capitol',
  year: '2002',
  albumArtUrl: 'assets/images/album_covers/19.png',
  songs: [
    { name: 'Way Away', length: '3:22'},
    { name: 'Breathing', length: '3:38'},
    { name: 'Ocean Avenue', length: '3:18'},
    { name: 'Empty Apartment', length: '3:37'}
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + '  <td class="song-item-number">' + songNumber + '</td>'
  + '  <td class="song-item-title">' + songName + '</td>'
  + '  <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;
  return template;
};

var currentAlbum = 0;

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
  albumTitle.firstChild.nodeValue = album.name;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  albumSongList.innerHTML = '';

  for (i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso);
};

document.getElementsByClassName('album-cover-art')[0].addEventListener('click', function(event) {
  if (currentAlbum == 0) {
    setCurrentAlbum(albumMarconi);
    var currentAlbum = 1;
  }
  else if (currentAlbum == 1) {
    setCurrentAlbum(albumYellowCard);
    var currentAlbum = 2;
  }
  else if (currentAlbum == 2) {
    setCurrentAlbum(albumPicasso);
    var currentAlbum = 0;
  }
})
