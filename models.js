var User = function User(username, email, password){
	if(arguments.length < 3 ) return new Error('Not enough args!');
	return {user: username, email: email, password: password};
};

var Chat = function Chat(message, room, user){
	if(arguments.length < 3 ) return new Error('Not enough args!');
	if(typeof user !== 'object') return new Error('User must be an object!');
	return {id: user.id + (new Date).getTime().toString(), message: message, room: room, ts: (new Date).getTime(), user: user};
};

var Room = function Room(name){
	if(arguments.length < 1) return new Error('Room needs a name!');
	return {id: name, name: name};
};

exports.User = User;
exports.Chat = Chat;
exports.Room = Room;