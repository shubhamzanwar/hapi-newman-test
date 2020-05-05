const newman = require('newman'); // require newman in your project
const {server} = require('../src/server');

describe('newman tests', () => {
    it('should pass successfully', (done) => {
        server.start().then(() => {
            newman.run({
                collection: require('../newman-test.json'),
            }, function (err) {
                console.log('collection run complete!');
                server.stop();
                done();
            });
        });
    });
});
