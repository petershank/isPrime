import assert from "assert";
import { isPrime } from "../isPrime.mjs";
describe("isPrime()", function () {
  it("returns false for 1", function () {
    assert.equal(isPrime(1), false);
  });
  it("returns true for 2", function () {
    assert.equal(isPrime(2), true);
  });
  it("returns true for 3", function () {
    assert.equal(isPrime(3), true);
  });
  it("returns false for 4", function () {
    assert.equal(isPrime(4), false);
  });
});
