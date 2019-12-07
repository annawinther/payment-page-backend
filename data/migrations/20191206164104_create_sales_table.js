
exports.up = function(knex) {
  return knex.schema
    .createTable("sales", tbl => {
        tbl
            .uuid("id")
            .notNullable();
        tbl 
            .integer("product_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("products");
        tbl
            .string("currency")
            .notNullable()
            .unique();
        tbl
            .integer("price")
            .notNullable()
            .unique();
        tbl
            .string("purchaser_email")
            .notNullable()
            .unique()
        tbl
            .boolean("success")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("sales")
};
