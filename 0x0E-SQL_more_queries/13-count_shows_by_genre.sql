-- List all genres from 'hbtn_0d_tvshows' and display number of shows linked to each
-- Each record should display tv_genres.name, number of shows
-- Don't display a genre that doesn't have any shows linked
-- Results must be sorted descending order by number of shows linked
-- Can only use one SELECT statement
SELECT tv_genre.name AS genre, COUNT(*) AS number_shows
FROM tv_genre
INNER JOIN tv_show_genre ON tv_genre.id = tv_show_genre.genre_id
GROUP BY tv_show_genre.genre_id
ORDER BY number_shows DESC;
