-- display average temp by city
--ordered by temperature desc

SELECT city, AVG(value) as avg_temp
FROM temperatures
GROUP temperatures
ORDER BY avg_temp DESC;
