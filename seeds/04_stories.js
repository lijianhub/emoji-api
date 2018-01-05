
exports.seed = function(knex, Promise) {
  return knex('stories').del()
    .then(function () {
      return knex('stories').insert([
        {id: 1, story: 'Once there was a pig who loved riding his bike. One day, her bike broke down. Along came a rabbit, called Bunny, who asked the pig, "What is wrong?" The pig said, "My bike is broken." "Don\'t be sad!", Bunny said, "I can fix it!" So then, Bunny fixed the bike and everyone was happy.'},
        {id:2, story:'Run away from the zombie, run!'},
        {id:3, story:'The wizard gave the little boy a kiss on the nose and turned him into a monkey.'},
        {id:4, story:'I would love to dance with a unicorn!'}
      ])
    })
}
