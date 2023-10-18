ALTER TABLE `contact` MODIFY COLUMN `email` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` MODIFY COLUMN `project_name` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` MODIFY COLUMN `description` text NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` MODIFY COLUMN `technologies` varchar(250) NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` MODIFY COLUMN `project_image` varchar(200) NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` MODIFY COLUMN `industry` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `start_date` timestamp;--> statement-breakpoint
ALTER TABLE `projects` ADD `end_date` timestamp;