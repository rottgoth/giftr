'use strict';
var request = require('supertest');
var express = require('express');

var app = require('../../app');

describe('Initial page', function() {
  it('It should render index page', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});