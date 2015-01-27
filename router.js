Router.route('/', function() {
  this.render('home');
})

Router.route('/portfolio', function () {
  this.render('portfolio');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/admin', function () {
  this.render('adminTemplate');
});

// Default layout template for all routes
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Accounts.config({
  forbidClientAccountCreation : true
});