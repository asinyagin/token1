const Token = artifacts.require("Token");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Token", accounts => {
  it("Owner has 10000 tokens", async () => {
    const token = await Token.deployed();
    const amount = await token.balanceOf.call(accounts[0]);
    assert.equal(amount.toNumber(), 1000);
  });
});
