
exports.up = function(knex) {
    return knex.schema
    .createTable("products", tbl => {
        tbl
            .string("name")
            .notNullable()
            .unique();
        tbl
            .uuid("id")
            .unique();
         tbl
            .string("description")
            .notNullable()
            .unique();
        tbl
            .string("currency")
            .notNullable()
            .unique();
        tbl
            .integer("price")
            .notNullable()
            .unique();
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
