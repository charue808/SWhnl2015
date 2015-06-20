Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', function() {
    this.render('home');
});

Router.route('/Donors', {name: 'donorPage'});

Router.route('/Teachers', {name: 'teacherPage'})