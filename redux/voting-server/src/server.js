import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().attach(8090);

    //subscribe to change events from the redux store
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        //on a new connection, send the current state to the client
        socket.emit('state', store.getState().toJS());

        //when a client submits an action, call dispatch() on the store
        socket.on('action', store.dispatch.bind(store));
    });
}
