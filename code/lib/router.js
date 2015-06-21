Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', {name: 'home'});

Router.route('/Donors', {name: 'donorPage'});

Router.route('/Teachers', {name: 'teacherPage'});