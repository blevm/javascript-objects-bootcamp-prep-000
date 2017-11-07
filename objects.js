var playlist = {
  Beatles: 'submarine',
  'Led Zeppelin': 'Ramble On'
 }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
Delete playlist.artistName;
  return playlist;
}
