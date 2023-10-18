CREATE TABLE `contact` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(256),
	`message` varchar(500),
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `contact_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`project_name` varchar(100),
	`description` varchar(450),
	`technologies` varchar(250),
	`project_image` varchar(200),
	`industry` varchar(50),
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
