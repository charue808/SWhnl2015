if (Books.find().count() === 0) {
  Books.insert({
    title: "something",
    author: "somethingElse",
    donor: "somethingElseElse"
  });
}