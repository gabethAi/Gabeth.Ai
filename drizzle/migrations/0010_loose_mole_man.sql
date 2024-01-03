ALTER TABLE `message` MODIFY COLUMN `content` longtext NOT NULL;--> statement-breakpoint
ALTER TABLE `message` ADD `childMessages` json DEFAULT ('null');