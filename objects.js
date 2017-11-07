var playlist = new Object();
var playlist = new Object({ beatles: 'Hey Jude' })

function updatePlaylist (obj,artist,song) {
Object.assign ({obj}, {artist,song});
  return playlist;
}

function removeFromPlaylist (obj,artist) {
Delete obj.artist;
  return playlist;
}
