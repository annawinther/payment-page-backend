
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, user_id: 1, name: 'Test product', description: 'this is a test by test', price: 3000, currency: 'GBP' },
        {id: 2, user_id: 2, name: 'Anna product', description: 'this is annas test', price: 200, currency: 'NOK' },
        {id: 3, user_id: 3, name: 'Peter product', description: 'this is peters test', price: 4000, currency: 'USD' },
      ]);
    });
};
