CREATE DATABASE main_db;
USE main_db;

CREATE TABLE 'Thread'(
    `id` int (11) NOT NULL AUTO_INCREMENT,
    `thread_name` VARCHAR(255) NOT NULL,
    `user` varchar(255) NOT NULL,
    `body` TEXT NOT NULL,
    
    PRIMARY KEY (`id`)
);

    