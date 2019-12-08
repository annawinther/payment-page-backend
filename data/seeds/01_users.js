
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'test@example.com', password: 'test1234', name: 'Test' },
        { id: 2, email: 'anna@example.com', password: 'anna1234', name: 'Anna' },
        { id: 3,  email: 'peter@example.com', password: 'peter1234', name: 'Peter' }
      ]);
    });
};
 