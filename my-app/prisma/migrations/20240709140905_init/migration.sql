-- CreateTable
CREATE TABLE `Post` (
    `movieId` INTEGER NOT NULL AUTO_INCREMENT,
    `movieName` VARCHAR(191) NOT NULL,
    `movieDescription` VARCHAR(191) NOT NULL,
    `movieSrc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
