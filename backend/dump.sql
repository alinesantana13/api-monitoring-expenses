CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  birth_date VARCHAR(100) NOT NULL 
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255) NOT NULL
);

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  category_id INTEGER NOT NULL REFERENCES categories(id),
  description VARCHAR(500),
  image VARCHAR(255)
);

INSERT INTO categories (type) 
VALUES 
('Alimentação'),
('Saúde'),
('Educação'),
('Lazer'),
('Mercado'),
('Beleza'),
('Roupas'),
('Investimentos');