// var bookData = [
//     {   cover: '/images/book1.jpg',
//         title: 'Some Book',
//         author: 'Some Author'
//     },
//     {
//         title: 'Another book',
//         author: 'Another Author'
//     },
//     {
//         title: 'First Book',
//         author: 'first author'
//     },
//     {
//         title: "Your Mom",
//         author: "Your Grandma"
//     }
// ];


Template.home.helpers({
  book: function(){
    return Books.find();
  }
});

Template.bookItem.helpers({
  tags: function(){
    var tags = Template.instance().data.author.split(',');
    return tags;
  }
});

Template.tag.rendered = function(){
  console.log(this);
};