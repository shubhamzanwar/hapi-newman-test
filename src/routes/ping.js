module.exports = [{
    method: 'GET',
    path: '/ping',
    handler: () => {
        return 'pong';
    }
}]