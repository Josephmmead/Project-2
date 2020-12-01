CREATE DATABASE main_db;
USE main_db;

CREATE TABLE 'posts'(
    `id` int (11) NOT NULL AUTO_INCREMENT,
    `user` varchar(255) NOT NULL,
    `body` varchar(255) NOT NULL,
    
    PRIMARY KEY (`id`)
);

    