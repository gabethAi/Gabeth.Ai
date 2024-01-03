ALTER TABLE `message` MODIFY COLUMN `content` json NOT NULL;--> statement-breakpoint
ALTER TABLE `message` DROP COLUMN `childMessages`;