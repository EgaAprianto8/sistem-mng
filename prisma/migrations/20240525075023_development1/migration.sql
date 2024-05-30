-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'user') NOT NULL DEFAULT 'admin',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_siswa` VARCHAR(191) NOT NULL,
    `kelasID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indikator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hasil_indikator` VARCHAR(191) NOT NULL,
    `penilaian` ENUM('BB', 'MB', 'BSH', 'BSB') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kompetensidasar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uraian_kd` VARCHAR(191) NOT NULL,
    `indikatorID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kompetensiinti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uraian_ki` VARCHAR(191) NOT NULL,
    `kompetensidasarID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penilaian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adminID` INTEGER NOT NULL,
    `siswaID` INTEGER NOT NULL,
    `kompetensiintiID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `siswa` ADD CONSTRAINT `siswa_kelasID_fkey` FOREIGN KEY (`kelasID`) REFERENCES `kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kompetensidasar` ADD CONSTRAINT `kompetensidasar_indikatorID_fkey` FOREIGN KEY (`indikatorID`) REFERENCES `indikator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kompetensiinti` ADD CONSTRAINT `kompetensiinti_kompetensidasarID_fkey` FOREIGN KEY (`kompetensidasarID`) REFERENCES `kompetensidasar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penilaian` ADD CONSTRAINT `penilaian_adminID_fkey` FOREIGN KEY (`adminID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penilaian` ADD CONSTRAINT `penilaian_siswaID_fkey` FOREIGN KEY (`siswaID`) REFERENCES `siswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penilaian` ADD CONSTRAINT `penilaian_kompetensiintiID_fkey` FOREIGN KEY (`kompetensiintiID`) REFERENCES `kompetensiinti`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
