Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', {name: 'home'});

Router.route('/Donors', {name: 'donorPage'});

Router.route('/Campaign-Submission', {name: 'submitCampaign'});