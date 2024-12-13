import mysql from "mysql2";

export const connectDB = () => {
  const db = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME, // your MySQL host
    user: process.env.MYSQL_USER, // your MySQL username
    password: process.env.MYSQL_PASSWORD, // your MySQL password
    database: process.env.MYSQL_DATABASE, // your database name
  });

  db.connect((err) => {
    if (err) {
      console.error("Could not connect to MySQL database:", err);
      process.exit(1);
    }
    console.log("Connected to MySQL database");
  });
};
