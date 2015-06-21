if (Books.find().count() === 0) {
  Books.insert({
    cover: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
    title: "The Old Man and the Sea",
    author: "Hemingway, Ernest",
    cost: "$10"
  });

  Books.insert({
      cover: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0062315005&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=wwwreadersgro-20",
      title: "The Alchemist",
      author: "Coelho, Paul",
      cost: "$5"
  });

    Books.insert({
        cover: "http://www.nostarch.com/sites/default/files/imagecache/product_main_page/manga_guide_to_physics.png",
        title: "Manga Guide to Physics",
        author: "Nitta, Hideo",
        cost: "$5"
    });

    Books.insert({
        cover: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00768DB2S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=wwwreadersgro-20",
        title: "The Wise Men",
        author: "Issacson, Walter",
        cost: "$15"
    });
}

