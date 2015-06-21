Template.teacherPage.events({
  "submit form": function(e){
      e.preventDefault();
      var book = {
        title: $(e.target).find('[id = bookTitle]').val(),
        author: $(e.target).find('[id = bookAuthor]').val(),
        donor: $(e.target).find('[id = donorName]').val()
      };

      book._id = Books.insert(book);
      Router.go('home');
    }
});