-- List all cities in db 'hbtn_0d_usa'
-- Each record should display cities.id, cities.name, and states.name
-- CAn only use Select statement once
SELECT cities.id, cities.name, states.name
FROM states
INNER JOIN cities
ON states.id = cities.state_id;
