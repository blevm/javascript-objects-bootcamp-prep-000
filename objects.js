var playlist = new Object({ The Beatles: "Hey Jude"})

function updatePlaylist (obj,artist,song) {
Object.assign ({obj}, {artist,song});
  return playlist;
}

function removeFromPlaylist (obj,artist) {
Delete obj.artist;
  return playlist;
}
