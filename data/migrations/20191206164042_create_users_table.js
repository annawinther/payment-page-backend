
exports.up = function(knex) {
    return knex.schema 
    .createTable("users", tbl => {
        tbl.increments();
        tbl
            .string("email")
            .notNullable()
            .unique();
        tbl
            .string("name")
            .notNullable()
            .unique();
        tbl
            .string("password")
            .notNullable();
        tbl 
            .timestamp("created_at")
            .defaultTo(knex.fn.now());
        tbl
            .integer("stripe_user_id")
         tbl
            .string("stripe_public_key")
        tbl
            .string("refresh_token")
        tbl
            .string("access_token")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
};
