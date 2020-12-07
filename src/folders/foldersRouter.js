'use strict';
const express = require('express');
const { featurePolicy } = require('helmet');

const folderService = require('./foldersService');
const foldersRouter = express.Router();

foldersRouter
  .route('/')
  .get((req, res, next) => {
    folderService.getAllFolders(req.app.get('db'))
      .then((folders) => {
        res.json(folders);
      });
  })
  .post((req, res, next) => {
    console.log(req.body);
    folderService.insertFolder(req.app.get('db'), req.body)
      .then((folder) => {
        res.json(folder);
      })
      .catch((error) => {
        res.json(error);
      });
  });
 


module.exports = foldersRouter;