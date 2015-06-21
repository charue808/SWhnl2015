if (Books.find().count() === 0) {
  Books.insert({
    cover: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
    title: "The Old Man and the Sea",
    author: "Hemingway, Ernest",
    cost: "$10"
  });
    
  Books.insert({
      cover: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg",
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
        cover: "https://books.google.com/books/content?id=U9UgyWiCcrAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70uijTZeNjeDKXj8itJAWtxYAMOKT-r9cjsy8G414Z1vCsGypH9FYgDded5s14SGlXxd1HyaupmuJQroB-gp89tsvvkuhz5D4Ro9fCObWNkLvIiypJ4Di5xkiuhsEQRJSfoqOiw",
        title: "The Wise Men",
        author: "Issacson, Walter",
        cost: "$15"
    });
}

