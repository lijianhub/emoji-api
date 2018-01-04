
exports.seed = function(knex, Promise) {
  return knex('stories').del()
    .then(function () {
      return knex('stories').insert([
        {id:1, story: 'Once there was a pig who loved riding his bike. The pig was happy until, one day, the bike broke down. Along came a rabbit, who asked the pig, "What is wrong?" The pig said, "My bike is broken." The bunny said, "I can fix it!" So then, the bunny fixed the bike and everyone was happy.'},
        {id:2, story:'Run away from the zombies, run!'},
        {id:3, story:'The wizard gave the little boy a kiss on the nose and turned him into a monkey.'},
        {id:4, story:'I would love to dance with a unicorn!'}
      ])
    })
}
