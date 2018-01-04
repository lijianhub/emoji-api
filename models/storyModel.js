const db = require('../db/knex.js')

class storyModel {
  constructor(){}
  static getAll(){
      return db('stories')
  }
  static getByUser(id){
      return db('users_stories').where({user_id: id})
          .then(results => results.map(result => result.story_id))
  }
  static addStory(user_id, story_id){
      return db('users_stories').insert({user_id, story_id})
        .then(results => story_id)
  }
}

module.exports = storyModel
