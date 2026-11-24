
with seed (name, species, age, size, temperament, status, story, photo) as (
  values
    (
      'Caramelo', 'Cachorro', '2 anos', 'Médio',
      'Brincalhão e sociável com outros cães', 'Disponível',
      'Resgatado na Ponta Verde após ficar preso em um terreno baldio. Hoje está saudável e adora correr no quintal.',
      'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg'
    ),
    (
      'Mimosa', 'Gato', '8 meses', 'Pequeno',
      'Independente, gosta de carinho em horas certas', 'Adotado',
      'Encontrada ainda filhote no Jaraguá. Foi criada com mamadeira pelos voluntários e é ótima com crianças.',
      'https://static.wixstatic.com/media/a47bbc_9aa1d751bd464bafb78981010cc9c0ab~mv2.jpeg/v1/fill/w_648,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Loiro-gato-para-adocao_PatinhasCarentes_.jpeg'
    ),
    (
      'Thor', 'Cachorro', '4 anos', 'Médio',
      'Calmo, ótimo para apartamentos', 'Em processo',
      'Passou dois anos em um abrigo temporário. É extremamente dócil e já está em processo de adoção com uma família.',
      'https://i.metroimg.com/ELCyVmujmGMiXFlkShTaPStHV9gxK155UJq6YqzetRQ/rs:fill:1200:1200:1/g:no/q:85/f:webp/plain/https://images.metroimg.com/2025/05/02183948/thor-1-1.jpg'
    ),
    (
      'Nala', 'Gato', '3 meses', 'Pequeno',
      'Curiosa e muito ativa', 'Disponível',
      'Resgatada de uma colônia de rua no Pontal da Barra. Ainda está em tratamento, mas já pode ser visitada.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvgOZRrl2s0NI6WzEZ5GS7xZddd07QFhk4dviiUaRrw&s=10'
    ),
    (
      'Rex', 'Cachorro', '6 anos', 'Médio',
      'Protetor e leal, ideal para famílias', 'Adotado',
      'Rex foi adotado em 2025 e hoje vive feliz com a família Ferreira. Deixamos seu perfil como exemplo de final feliz.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9thLHCOkyHOCxIzYUEHQwYpqK4RVzKcE4sDmYsavf6UUirVJF0RZr5do&s=10'
    ),
    (
      'Romeu', 'Gato', '6 meses', 'Pequeno',
      'Tranquila, prefere ambientes silenciosos', 'Disponível',
      'Entregue voluntariamente por uma família que não podia mais cuidar dela. Já está pronta para um novo lar.',
      'https://catland.org.br/wp-content/uploads/2023/04/foto-1.png'
    )
)
insert into public.animals (name, species, age, size, temperament, status, story, photo)
select s.name, s.species, s.age, s.size, s.temperament, s.status, s.story, s.photo
from seed s
where not exists (
  select 1 from public.animals a where lower(a.name) = lower(s.name)
);

