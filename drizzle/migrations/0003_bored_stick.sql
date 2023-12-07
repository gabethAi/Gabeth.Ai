CREATE TABLE `chat` (
	`id` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`title` varchar(255) NOT NULL,
	`path` varchar(255) NOT NULL,
	`sharePath` varchar(255) NOT NULL,
	CONSTRAINT `chat_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `conversation`;--> statement-breakpoint
ALTER TABLE `message` DROP FOREIGN KEY `message_conversationId_conversation_id_fk`;
--> statement-breakpoint
ALTER TABLE `reaction` MODIFY COLUMN `messageId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `message` ADD `chatId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `message` ADD CONSTRAINT `message_chatId_chat_id_fk` FOREIGN KEY (`chatId`) REFERENCES `chat`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `message` DROP COLUMN `conversationId`;--> statement-breakpoint
ALTER TABLE `chat` ADD CONSTRAINT `chat_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;