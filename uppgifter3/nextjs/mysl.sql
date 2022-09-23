/* users är namn på en tabell */

/* Hämtar all data från tabell */
SELECT * FROM users

/* Sparar data till databas */
INSERT INTO users(email, password) VALUES(?,?)

/* Uppdaterar ett värde i databasen */
UPDATE users SET username="Willy" WHERE id=1 

/* Ta bort ett värde från databasen */
DELETE FROM users WHERE id=1