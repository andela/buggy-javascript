/* global describe it */

const request = require('supertest');
const app = require('../app');

describe('App', () => {
  describe('Index Page', () => {
    it('should render successfully', () => {
      request(app).get('/').expect(200);
    });
  });
  describe('Users page', () => {
    it('should render successfully', () => {
      request(app).get('/users').expect(200);
    });
  });
});
