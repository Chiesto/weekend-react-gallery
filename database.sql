CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(500) NOT NULL,
	description VARCHAR (100), 
	likes INT DEFAULT 0
);


INSERT INTO gallery (path, description)
VALUES ('images/little_bird.jpeg', 'A fun little bird.'),
('images/download.jpeg', 'A nice little valley view'),
('images/download.png', 'Beautiful sunset'),
('images/nighttime.jpeg', 'Gorgeous night time camping view'),
('images/sunflower.jpeg', 'Wonderful sunflower field'),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');