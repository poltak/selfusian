Router.route('/', function() {
  this.render('home');
})

Router.route('/portfolio', function () {
  this.render('portfolio');
});

Router.route('/contact', function () {
  this.render('contact');
});

// Default layout template for all routes
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
