# **🍽️ Tienda de Cursos Gastronómicos**  

Plataforma web de cursos gastronómicos con catálogo público, compra de cursos y panel administrativo.
El proyecto está completamente dockerizado, listo para levantar en cualquier máquina.


## **Tecnologías Utilizadas:**                    

🔹 Backend API:
- NestJS
- MySQL

🔹 Panel Administrativo:
- PHP
- CodeIgniter

🔹 Frontend:
- React


### En los tres servicios se implemento Docker para generar contenedores independientes, al igual que con la base de datos, todos comunicados entre si a traves de docker-compose. ###


## Antes de comenzar, asegurate de tener instalado:

- Docker
- Docker Compose

##  Levantar el proyeto:  
1. Clonar el repositorio:
   - git clone https://github.com/nicolasaurora/tienda-cursos.git
   - cd tienda-cursos

2. Levantar los contenedores:
   - docker-compose up --build
  
## Accesos:
- Catalogo publico => http://localhost:3000
- Panel administrativo => http://localhost:3000/admin
- Busqueda de compras por email => http://localhost:3000/mis-Compras



# Importante: Cada persona que levanta el proyecto debe realizar las siguientes sentencias SQL para poder visualizar datos:
- 📌 Crear tablas:

CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio DOUBLE,
    detalle TEXT,
    imagenes JSON
);

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100),
    email VARCHAR(200) UNIQUE,
    telefono VARCHAR(20)
);

CREATE TABLE compras (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cliente_id INT,
    curso_id INT,
    fecha_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

- 📌 Insertar cursos:

INSERT INTO cursos (nombre, descripcion, precio, detalle, imagenes) VALUES

(
  'Cocina Italiana',
  'Aprendé a preparar pastas y salsas clásicas de la cocina italiana.',
  12000.00,
  'Incluye recetas tradicionales, técnicas de amasado y salsas como bolognesa y pesto.',
  JSON_ARRAY('italiana_1.jpg', 'italiana_2.jpg')
),

(
  'Repostería Básica',
  'Curso introductorio para aprender las bases de la pastelería.',
  9500.00,
  'Bizcochuelos, cremas, masas dulces y técnicas de horneado.',
  JSON_ARRAY('reposteria_1.jpg', 'reposteria_2.jpg')
),

(
  'Panadería Artesanal',
  'Aprendé a hacer pan casero con técnicas artesanales.',
  11000.00,
  'Fermentaciones, masas madre y panes clásicos.',
  JSON_ARRAY('panaderia_1.jpg')
),

(
  'Cocina Vegetariana',
  'Platos saludables y creativos sin carne.',
  10500.00,
  'Recetas balanceadas, proteínas vegetales y planificación de menús.',
  JSON_ARRAY('vegetariana_1.jpg', 'vegetariana_2.jpg')
);

- 📌 Insertar clientes:

INSERT INTO clientes (nombre, email, telefono) VALUES

('Nicolas Aurora', 'nicolas.aurora@email.com', '3411234567'),
('María Gómez', 'maria.gomez@email.com', '3417654321'),
('Lucas Fernández', 'lucas.fernandez@email.com', '3419876543');
