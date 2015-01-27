if (Meteor.isClient) {
  //Blog configurations
  Blog.config({
    syntaxHighlighting: true,
    syntaxHighlightingTheme: 'github',
    comments: {
      disqusShortname: 'jianloonggithubio'
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

// Due to how the selectors work, the template must be rendered before hand 
// for the animation to work. Works fine on localhost.

Router.route('/', function() {
  this.render('home');
  Meteor.defer(function() {
    $.getScript("js/bootstrap.min.js");
    $.getScript("js/jquery.isotope.min.js");
    $.getScript("js/fancybox/jquery.fancybox.pack.js");
    $.getScript("js/jquery.scrollTo.min.js");
    $.getScript("js/wow.min.js");
    $.getScript("js/functions.js");
  });
})


Router.route('/admin', function() {
  this.render('admin');
})

Router.route('/portfolio', function () {
  this.render('portfolio');
    Meteor.defer(function() {
    $.getScript("js/bootstrap.min.js");
    $.getScript("js/jquery.isotope.min.js");
    $.getScript("js/fancybox/jquery.fancybox.pack.js");
    $.getScript("js/jquery.scrollTo.min.js");
    $.getScript("js/wow.min.js");
    $.getScript("js/functions.js");
  });
});

Router.route('/contact', function () {
  this.render('contact');
});


// Default layout template for all routes
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
