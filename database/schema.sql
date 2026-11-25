CREATE DATABASE IF NOT EXISTS patas_penedo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE patas_penedo;

CREATE TABLE IF NOT EXISTS animals (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  species ENUM('Cachorro', 'Gato') NOT NULL,
  age VARCHAR(40) NOT NULL,
  size VARCHAR(40) NOT NULL,
  temperament VARCHAR(255) NOT NULL,
  status ENUM('Disponível', 'Em processo', 'Adotado') NOT NULL DEFAULT 'Disponível',
  story TEXT NOT NULL,
  photo TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS adoption_requests (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  animal_id BIGINT UNSIGNED NULL,
  animal_name VARCHAR(100) NOT NULL,
  applicant_name VARCHAR(100) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  message VARCHAR(600) NOT NULL DEFAULT '',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_adoption_requests_animal
    FOREIGN KEY (animal_id) REFERENCES animals(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
