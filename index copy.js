// let player;

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player-container', {
//         height: '315',
//         width: '560',
//         videoId: '',
//         events: {
//             'onReady': onPlayerReady
//         }
//     });
// }

// function onPlayerReady(event) {
//     // Player is ready to play
// }

// class Song {
//     constructor(title, artist, mood, videoId) {
//         this.title = title;
//         this.artist = artist;
//         this.mood = mood;
//         this.videoId = videoId;
//     }
// }

// const songs = [
    
//     new Song("bayibayi, Soo maan noqdeen doob", "Suldan Seerar", "Happy", "vAOWRithkqs"),
//     new Song("OH my love", "Suldan Seerar", "Happy", "e_04ZrNroTo"),
//     new Song("Xamar Bila", "Suldan Seerar", "Happy", "XqZsoesa55w"),
//     // new Song("Qalbi Nuuriyay", "Suldan Seerar", "Happy", "4YCfVN9WD20"),
//     // new Song("Taj Mahal", "Guled Simba", "Happy", "0KYzQIpnwvw"),
//     // new Song("Dheeman", "Guled Simba", "Happy", "ODzSwpJV17Q"),
//     new Song("Halkeen ka helaa", "Shadiyo Sharaf", "sleepy", "W-vBu2rf8TI"),
//     new Song("Beerlula", "Faisal Xawase", "sleepy", "/5DgA39PVN0A"),
//     // new Song("Ma hurantii Noloshay", "Abdikarin Qasaye", "Happy", "HDS5J2yH0wQ"),
//     new Song("Naftaydu naf bay rabtaa", "Xabiiba Xasan", "sad", "ZEX4u5mCnXc"),
//     // new Song("Heesta-Taar", "Lafole", "Sad", "KX-k_jTXSJI"),
//     // new Song("Amaan iyo ducaba", "Nuur Cade", "Energetic", "LXMa23hkffQ"),
//     // new Song("Maku diray jaceyl", "Idil Barkhad", "Sad", "oThVuw2ylUQ"),
//     // new Song("Naf ku jecel ", "Fartun Birimo","Sad", "BQOEd14Zo2QBQOEd14Zo2Q"),
//     // new Song("Dhaawac baa igu yaalo", "Abdullahi Boqol", "Sad", "kC-kuf_vj1I"),
  

//     // Add more songs here...
// ];

// function handleUserInput() {
//     const moodInput = document.getElementById('mood-input').value.toLowerCase();
//     const matchingSongs = songs.filter(song => song.mood.toLowerCase() === moodInput);
//     if (matchingSongs.length > 0) {
//         displaySongs(matchingSongs);
//         document.getElementById('no-song-message').classList.add('hidden');
//         document.getElementById('player-container').classList.remove('hidden');
//     } else {
//         document.getElementById('song-title').textContent = '';
//         document.getElementById('artist').textContent = '';
//         player.stopVideo();
//         document.getElementById('player-container').classList.add('hidden');
//         document.getElementById('no-song-message').classList.remove('hidden');
//         document.getElementById('song-list').innerHTML = '';
//     }
// }

// function displaySongs(songs) {
//     const songList = document.getElementById('song-list');
//     songList.innerHTML = '';

//     songs.forEach(song => {
//         const iframe = document.createElement('iframe');
//         iframe.src = `https://www.youtube.com/embed/${song.videoId}`;
//         songList.appendChild(iframe);
//     });
// }
