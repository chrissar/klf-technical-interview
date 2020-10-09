import Datastore from 'nedb';

let users = new Datastore({
    filename: __dirname + '/../db/users.db',
    autoload: true,
});

export default users;