CREATE DATABASE aed
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;
USE aed;

CREATE TABLE Redacteur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25),
    adresseMail VARCHAR(125) NOT NULL,
    motDePasse TEXT NOT NULL,
    roleUtilisateur VARCHAR(5) NOT NULL,
    photo TEXT NOT NULL,
    bio TEXT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE Article (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(200) NOT NULL,
    intro TEXT NOT NULL,
    block1 TEXT NOT NULL,
    block2 TEXT NOT NULL,
    couverture TEXT NOT NULL,
    datePublication DATE NOT NULL,
    lectures INT NOT NULL DEFAULT(0),
    categorie VARCHAR(50) NOT NULL,
    idRedacteur INT NOT NULL,
    FOREIGN KEY (idRedacteur) REFERENCES Redacteur(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE Photo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lien TEXT NOT NULL,
    legende VARCHAR(35) NOT NULL,
    typePhoto VARCHAR(15),
    idArticle INT NOT NULL,
    FOREIGN KEY (idArticle) REFERENCES Article(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

insert into redacteur(nom, prenom, adresseMail, motDePasse, roleUtilisateur, photo, bio)
values ('Etienne', 'Baraka', 'etienne.baraka@aed-rdc.org', '$2b$10$4NYD368UiIglEz0R72LLZeBZ9cLto8n74IiPlo2qozORikypjLVm.', 'ADMIN', '/img/users/user1.jpg', 'Etienne Baraka, ancien journaliste, est actuellement le chargé de communication de l\'organisation AED. Il y oeuvre depuis sa création.');