
exports.up = function(knex) {
    return knex.schema
    .createTable("products", tbl => {
        tbl.increments()
        tbl
            .string("name")
            .notNullable()
            .unique();
         tbl
            .string("description")
            .notNullable()
        tbl
            .string("currency")
            .notNullable()
        tbl
            .integer("price")
            .notNullable()
        tbl
            .integer("user_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("users");
        tbl
            .string("image")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("products")
};
