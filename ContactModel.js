Contacts = new Mongo.Collection("contacts");
Contacts.attachSchema(new SimpleSchema({
  fullname: {
    type: String,
    label: "Full Name",
    max: 200
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email"
  },
  subject: {
    type: String,
    label: "Subject"
  },
  message: {
    type: String,
    label: "Message ",
    optional: true,
    max: 1000
  }
}));