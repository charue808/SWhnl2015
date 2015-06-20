var bookData = [
    {   cover: '/images/book1.jpg',
        title: 'Some Book',
        author: 'Some Author'
    },
    {
        title: 'Another book',
        author: 'Another Author'
    },
    {
        title: 'First Book',
        author: 'first author'
    }
];


Template.home.helpers({
    book: bookData
});