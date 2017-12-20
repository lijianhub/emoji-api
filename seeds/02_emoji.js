
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emoji').del()
    .then(function () {
      // Inserts seed entries
      return knex('emoji').insert([
        {id: 1, name: 'pig', symbol: '🐷', level: 1},
        {id: 2, name: 'frog', symbol: '🐸', level: 1},
        {id: 3, name: 'monkey', symbol: '🐒', level: 2},
        {id: 4, name: 'koala', symbol: '🐨', level: 2},
        {id: 5, name: 'owl', symbol: '🦉', level: 1},
        {id: 6, name: 'unicorn', symbol: '🦄', level: 3},
        {id: 7, name: 'bee', symbol: '🐝', level: 1},
        {id: 8, name: 'crab', symbol: '🦀', level: 1},
        {id: 9, name: 'dog', symbol: '🐶', level: 1},
        {id: 10, name: 'cat', symbol: '🐱', level: 1},
        {id: 11, name: 'mouse', symbol: '🐭', level: 2},
        {id: 12, name: 'bunny', symbol: '🐰', level: 2},
        {id: 13, name: 'fox', symbol: '🦊', level: 1},
        {id: 14, name: 'bear', symbol: '🐻', level: 1},
        {id: 15, name: 'panda', symbol: '🐼', level: 1},
        {id: 16, name: 'tiger', symbol: '🐯', level: 2},
        {id: 17, name: 'lion', symbol: '🦁', level: 2},
        {id: 18, name: 'cow', symbol: '🐮', level: 1},
        {id: 19, name: 'chicken', symbol: '🐔', level: 2},
        {id: 20, name: 'penguin', symbol: '🐧', level: 3},
        {id: 21, name: 'bird', symbol: '🐤', level: 1},
        {id: 22, name: 'chick', symbol: '🐣', level: 2},
        {id: 23, name: 'duck', symbol: '🦆', level: 2},
        {id: 24, name: 'eagle', symbol: '🦅', level: 3},
        {id: 25, name: 'bat', symbol: '🦇', level: 1},
        {id: 26, name: 'boar', symbol: '🐗', level: 2},
        {id: 27, name: 'horse', symbol: '🐴', level: 2},
        {id: 28, name: 'unicorn', symbol: '🦄', level: 3},
        {id: 29, name: 'bug', symbol: '🐛', level: 1},
        {id: 30, name: 'butterfly', symbol: '🦋', level: 3},
        {id: 31, name: 'clown', symbol: '🤡', level: 2},
        {id: 32, name: 'poop', symbol: '💩', level: 1},
        {id: 33, name: 'robot', symbol: '🤖', level: 2},
        {id: 34, name: 'kiss', symbol: '💋', level: 1},
        {id: 35, name: 'eye', symbol: '👁', level: 1},
        {id: 36, name: 'brain', symbol: '🧠', level: 2},
        {id: 37, name: 'nose', symbol: '👃', level: 1},
        {id: 38, name: 'tongue', symbol: '👅', level: 3},
        {id: 39, name: 'hand', symbol: '🖐', level: 2},
        {id: 40, name: 'zombie', symbol: '🧟', level: 3},
        {id: 41, name: 'wizard', symbol: '🧙', level: 3},
        {id: 42, name: 'mermaid', symbol: '🧜', level: 3},
        {id: 43, name: 'dance', symbol: '💃', level: 3},
        {id: 44, name: 'run', symbol: '🏃', level: 1},
        {id: 45, name: 'socks', symbol: '🧦', level: 2},
        {id: 46, name: 'gloves', symbol: '🧤', level: 2},
        {id: 47, name: 'hat', symbol: '🧢', level: 1},
        {id: 48, name: 'dragon', symbol: '🐉', level: 2},
        {id: 49, name: 'cactus', symbol: '🌵', level: 2},
        {id: 50, name: 'flower', symbol: '🌻', level: 2},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('emoji_id_seq', (SELECT MAX(id) FROM emoji));`
      );
    })
}
