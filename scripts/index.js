const pgp = require("pg-promise")();
const { faker } = require("@faker-js/faker");

// Database connection details
const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "postgres",
};


// Initialize the database
const db = pgp(dbConfig);

// Function to generate and insert dummy data
async function populateDummyData() {
  try {
    // Insert dummy data for Restaurant
    const restaurants = await db.query(
      "INSERT INTO restaurant (owner, name) VALUES ($1, $2) RETURNING *",
      [1, faker.company.name]
    );

    // Insert dummy data for Category
    const categories = await db.query(
      "INSERT INTO category (owner, name, restaurant) VALUES ($1, $2, $3) RETURNING *",
      [1, faker.random.word(), restaurants[0].id]
    );

    // Insert dummy data for MenuItem
    const menuItems = await db.query(
      "INSERT INTO menuitem (owner, name, description, price, time, rating, category, restaurant, is_available, image, three_d_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [
        1,
        faker.food.dish(),
        faker.lorem.sentence(),
        faker.random.number({ min: 5, max: 50 }),
        "12:00:00",
        faker.random.number({ min: 0, max: 5, precision: 0.01 }),
        categories[0].id,
        restaurants[0].id,
        faker.random.boolean(),
        "path/to/image.jpg",
        "path/to/3d/image.stl",
      ]
    );

    console.log("Dummy data inserted successfully:", {
      restaurants,
      categories,
      menuItems,
    });
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    // Disconnect from the database
    pgp.end();
  }
}

// Run the script
populateDummyData();
