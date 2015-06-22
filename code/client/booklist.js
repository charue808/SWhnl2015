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
  },
  
  showTitle: function() {
      var selectedBook = Session.get('selectedBook');
      return Books.findOne(selectedBook);
      
  }
});


<<<<<<< HEAD

Template.bookItem.events({
    'click button': function() {
        var bookId = this._id;
        Session.set('selectedBook', bookId)
    }
});
=======
// Template.tag.rendered = function(){
//   console.log(this);
// };
>>>>>>> b1c8dec624e914eb12cf11a4655bf86f4c509862
