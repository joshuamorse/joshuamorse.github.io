Vue.createApp({
  data() {
    return {
      albums: [
        {
            image: "https://f4.bcbits.com/img/a2984440362_10.jpg",
          url: "https://joshuamorse.bandcamp.com/track/hidden-hamlet-of-the-ninja-gensosuikoden-ii",
        },
        {
          image: "https://f4.bcbits.com/img/a3603191677_10.jpg",
          url: "https://joshuamorse.bandcamp.com/track/tower-of-dolls-castlevania-order-of-ecclesia",
        },
        {
          image: "https://f4.bcbits.com/img/a2119872517_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/arrangement-archives",
        },
        {
          image: "https://f4.bcbits.com/img/a0019100966_10.jpg",
          url: "https://joshuamorse.bandcamp.com/track/secret-of-the-forest-into-the-thick-of-it-chrono-trigger-secret-of-mana",
        },
        {
          image: "https://f4.bcbits.com/img/a2694860862_10.jpg",
          url: "https://joshuamorse.bandcamp.com/track/a-line-in-the-sand-plok",
        },
        {
          image: "https://f4.bcbits.com/img/a2968096422_10.jpg",
          url: "https://joshuamorse.bandcamp.com/track/dreamers-dream-casiopea-p4",
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
        },
        {
          image: "https://f4.bcbits.com/img/a2252340005_10.jpg",
          url: "https://joshuamorse.bandcamp.com/album/a-wizards-lizard-original-soundtrack",
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
