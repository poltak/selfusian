if (Meteor.isServer) {
    Meteor.startup(function () {
        if ( Meteor.users.find().count() === 0 ) {
             var users = [
             {name:"admin",email:"iamapotato@gmail.com",roles:['admin','blogAdmin']},
             ];

             _.each(users, function (user) {
                var id;

                id = Accounts.createUser({
                  email: user.email,
                  password: "admin",
                  profile: { name: user.name }
                });

                if (user.roles.length > 0) {
                    Roles.addUsersToRoles(id, user.roles);
                }
            });
        }
    });
}