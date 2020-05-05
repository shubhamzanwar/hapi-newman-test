// Mock route to simulate GET /users.
// Could potentially fetch from DB
const Boom = require('@hapi/boom');

module.exports = [{
    method: 'GET',
    path: '/users/{id}',
    handler: (request) => {
        const {id} = request.params;
        if(id === '1234') {
            return {
                id,
                name: 'valid user'
            };
        }
        return Boom.notFound('user id not found');
    }
}]