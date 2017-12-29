
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, story: 'Once there was a pig who loved riding his bike. The pig was happy until the bike broke down. Along came a rabbit, who asked the pig, "What is wrong?" The pig said, "My bike is broken." The rabbit said, "I can fix it!" So then, the rabbit fixed the bike and everyone was happy.'}
      ]);
    });
};
