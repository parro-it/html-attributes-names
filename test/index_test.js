let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const htmlAttributesNames = require(moduleRoot);

describe('htmlAttributesNames', () => {
  it('works', async () => {
    const result = await htmlAttributesNames();
    result.should.be.equal(42);
  });
});

