var expect = require("chai").expect;
const request = require("request");
const app = require("../controller/routes.js");

describe("Server response", function () {
  var url = "http://localhost:3000/messages/sendMessage";
  it("returns status 200 to check if api works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("returns statusCode key in body to check if api gives MongoDB data", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body).not.equal(null);
      done();
    });
  });
});