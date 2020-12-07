'use strict';

const notesService = {
  getAllNotes (knex) {
    return knex.select('*').from('notes');
  },

  insertNote (knex, newNote) {
    return knex
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  deleteNote (knex, noteId) {
    return knex
      .where({ id: noteId })
      .del();
  }
};

module.exports = notesService;