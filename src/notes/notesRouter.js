'use strict';
const express = require('express');

const notesService = require('./notesService');
const notesRouter = express.Router();

notesRouter
  .route('/')
  .get((req, res, next) => {
    notesService.getAllNotes(req.app.get('db'))
      .then((notes) => {
        res.json(notes);
      });
  })
  .post((req, res, next) => {
    notesService.insertNote(req.app.get('db'), req.body)
      .then((note) => {
        res.json(note);
      })
      .catch((error) => {
        res.json(error);
      });
  });

notesRouter
  .route('/:noteid')
  .delete((req, res, next) => {
    notesService.deleteNote(req.app.get('db'), req.param.noteid)
      .then((note) =>{
        res.json(note);
      })
      .catch((error) => {
        res.json(error);
      });
  });
 


module.exports = notesRouter;