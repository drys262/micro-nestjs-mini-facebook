import Pusher from 'pusher';

const pusher = new Pusher({
	appId: '958854',
	key: '6e84e32d54afdeca4ddc',
	secret: '62cb245ba1a2bffafca9',
	cluster: 'ap1',
	encrypted: true,
});

export default pusher;
