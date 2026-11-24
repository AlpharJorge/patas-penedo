CREATE DATABASE IF NOT EXISTS patas_penedo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE patas_penedo;

CREATE TABLE IF NOT EXISTS animals (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  species VARCHAR(20) NOT NULL,
  age VARCHAR(40) NOT NULL,
  size VARCHAR(30) NOT NULL,
  temperament VARCHAR(200) NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'Disponível',
  story TEXT NOT NULL,
  photo VARCHAR(2048) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_animals_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS adoption_requests (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  animal_id INT UNSIGNED NULL,
  animal_name VARCHAR(100) NOT NULL,
  applicant_name VARCHAR(100) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  message VARCHAR(600) NOT NULL DEFAULT '',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_adoption_requests_created (created_at),
  CONSTRAINT fk_adoption_requests_animal
    FOREIGN KEY (animal_id) REFERENCES animals (id)
    ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO animals (name, species, age, size, temperament, status, story, photo)
SELECT seed.name, seed.species, seed.age, seed.size, seed.temperament,
       seed.status, seed.story, seed.photo
FROM (
  SELECT
    'Caramelo' AS name, 'Cachorro' AS species, '2 anos' AS age, 'Médio' AS size,
    'Brincalhão e sociável com outros cães' AS temperament, 'Disponível' AS status,
    'Resgatado em Penedo após ficar preso em um terreno baldio. Hoje está saudável e adora correr no quintal.' AS story,
    'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg' AS photo
  UNION ALL SELECT
    'Mimosa', 'Gato', '8 meses', 'Pequeno',
    'Independente, gosta de carinho em horas certas', 'Adotado',
    'Encontrada ainda filhote em Penedo. Foi criada com mamadeira pelos voluntários e é ótima com crianças.',
    'https://static.wixstatic.com/media/a47bbc_9aa1d751bd464bafb78981010cc9c0ab~mv2.jpeg/v1/fill/w_648,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Loiro-gato-para-adocao_PatinhasCarentes_.jpeg'
  UNION ALL SELECT
    'Thor', 'Cachorro', '4 anos', 'Médio',
    'Calmo, ótimo para apartamentos', 'Em processo',
    'Passou dois anos em um abrigo temporário. É extremamente dócil e já está em processo de adoção com uma família.',
    'https://i.metroimg.com/ELCyVmujmGMiXFlkShTaPStHV9gxK155UJq6YqzetRQ/rs:fill:1200:1200:1/g:no/q:85/f:webp/plain/https://images.metroimg.com/2025/05/02183948/thor-1-1.jpg'
  UNION ALL SELECT
    'Nala', 'Gato', '3 meses', 'Pequeno',
    'Curiosa e muito ativa', 'Disponível',
    'Resgatada de uma colônia de rua em Penedo. Ainda está em tratamento, mas já pode ser visitada.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvgOZRrl2s0NI6WzEZ5GS7xZddd07QFhk4dviiUaRrw&s=10'
  UNION ALL SELECT
    'Rex', 'Cachorro', '6 anos', 'Médio',
    'Protetor e leal, ideal para famílias', 'Adotado',
    'Rex foi adotado em 2025 e hoje vive feliz com a família Ferreira. Deixamos seu perfil como exemplo de final feliz.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9thLHCOkyHOCxIzYUEHQwYpqK4RVzKcE4sDmYsavf6UUirVJF0RZr5do&s=10'
  UNION ALL SELECT
    'Romeu', 'Gato', '6 meses', 'Pequeno',
    'Tranquilo, prefere ambientes silenciosos', 'Disponível',
    'Entregue voluntariamente por uma família que não podia mais cuidar dele. Já está pronto para um novo lar.',
    'https://catland.org.br/wp-content/uploads/2023/04/foto-1.png'
) AS seed
WHERE NOT EXISTS (
  SELECT 1 FROM animals AS existing
  WHERE existing.name = seed.name AND existing.story = seed.story
);
