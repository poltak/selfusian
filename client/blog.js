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
