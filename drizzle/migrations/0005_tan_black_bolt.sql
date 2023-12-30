ALTER TABLE `reaction` MODIFY COLUMN `type` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `reaction` ADD `userId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `reaction` ADD `feedback` longtext;--> statement-breakpoint
ALTER TABLE `reaction` ADD CONSTRAINT `reaction_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint