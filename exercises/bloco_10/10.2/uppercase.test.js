const uppercase = require('./uppercase');

it('checking uppercase, test to TEST', done => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});