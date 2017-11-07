var playlist = new Object();
var playlist = new Object({ beatles: 'Hey Jude' })

function updatePlaylist(playlist, artistName, songTitle) {
return Object.assign ({playlist}, {artistName , songTitle});
}

function removeFromPlaylist(playlist, artistName) {
Delete playlist.artistName;
  return playlist;
}
