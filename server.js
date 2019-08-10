const express = require('express')
const app = express()


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));




app.get('/', function (req, res) {
  res.render("client");
});

app.get('/index', function (req, res) {

  var data = [ // todo: save as json?
    {
      'name': 'LeftRight',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/leftright'
    },
    {
      'name': 'The Desert of Al Kharid',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/wavwavwavwav'
    },
    {
      'name': 'One Tone Metronome',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/one-tone-metronome'
    }
  ]

  res.render("index", {data:data});
});


// todo /action page for mail

app.get('/albums', function (req, res) {
  res.render("client"); // todo!
});

app.get('/tracks', function (req, res) {

  var tracks = [ // todo: save as json?
    {
      'name': 'Trvrjios',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/trvrjios'
    },
    {
      'name': 'LeftRight',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/leftright'
    },
    {
      'name': 'The Desert of Al Kharid',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/wavwavwavwav'
    },
    {
      'name': 'One Tone Metronome',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/one-tone-metronome'
    },
    {
      'name': 'Tsuj Diurd',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/tsuj-diurd'
    },
    {
      'name': 'Ratuig Sabb',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/ratuig-sabb'
    },
    {
      'name': 'West',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/west'
    },
    {
      'name': 'Avid Wace Space Jam',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/avid-wace-space-jam'
    },
    {
      'name': 'Nev I Yer',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/nev-i-yer'
    },
    {
      'name': 'Hikqwocl',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/hikqwocl'
    },
    {
      'name': 'Finest Fry Cook in Skyrim',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/finestfrycookinskyrim'
    },
    {
      'name': 'i give up with the names',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/gniziteomv'
    },
    {
      'name': 'Evetal Tnaom',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/evetal-tnaom'
    },
    {
      'name': 'Potato Question',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/potato-question'
    },
    {
      'name': 'And the Dogs Said wav.wav',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/and-the-dogs-said-wavwav'
    },
    {
      'name': 'Fish Live Life',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/fish-live-life'
    },
    {
      'name': 'Breverb',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/breverb'
    },
    {
      'name': 'Sweet Pounce the Mouse',
      'image': '/images/breverb.jpg',
      'url': 'https://soundcloud.com/user-992197046/sweet-pounce-the-mouse'
    }
  ]



  res.render("tracks", {tracks: tracks});
});

app.listen(process.env.PORT || 5000, function () {
  console.log('listening on *:5000');
});
