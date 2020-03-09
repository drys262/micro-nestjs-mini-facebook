import Pusher from 'pusher-js';

const pusher = new Pusher('6e84e32d54afdeca4ddc', {
	cluster: 'ap1',
	forceTLS: true,
});

export default pusher;
