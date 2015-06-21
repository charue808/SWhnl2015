if (Books.find().count() === 0) {
  Books.insert({
    cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg",
    title: "Ender's Game",
    author: "Card, Orson S.",
    cost: "$10"
  });

  Books.insert({
      cover: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0062315005&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=wwwreadersgro-20",
      title: "The Alchemist",
      author: "Coelho, Paul",
      cost: "$5"
  });

    Books.insert({
        cover: "https://upload.wikimedia.org/wikipedia/en/4/49/American_gods.jpg",
        title: "American Gods",
        author: "Gaiman, Neil",
        cost: "$5"
    });

    Books.insert({
        cover: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00768DB2S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=wwwreadersgro-20",
        title: "The Wise Men",
        author: "Issacson, Walter",
        cost: "$15"
    });
}

