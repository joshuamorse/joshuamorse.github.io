Vue.createApp({
  data() {
    return {
      albums: [
        {
          image: "https://f4.bcbits.com/img/a3511199265_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/chipdisc-fusion-vol-3",
        },
        {
          image: "https://f4.bcbits.com/img/a1087034204_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/chipdisc-fusion-vol-2",
        },
        {
          image: "https://f4.bcbits.com/img/a2093691266_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/chipdisc-fusion-vol-1",
        },
        {
          image: "https://f4.bcbits.com/img/a0224808424_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/arrangement-archives",
        },
        {
          image: "https://f4.bcbits.com/img/a0302777255_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/chipset-complete",
        },
        {
          image: "https://f4.bcbits.com/img/a0107906833_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/source-2",
        },
        {
          image: "https://f4.bcbits.com/img/a3358068033_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/the-waveform-collection",
        }
      ],
      links: [
        {
          name: "Bandcamp",
          url: "http://joshuamorse.bandcamp.com",
        },
        {
          name: "SoundCloud",
          url: "https://soundcloud.com/joshuamorse",
        },
        {
          name: "GitHub",
          url: "http://github.com/joshuamorse",
        }
      ],
    }
  }
}).mount('body');
