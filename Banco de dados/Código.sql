-- Tabela 'Filmes'
CREATE TABLE Filmes (
    ID_filme INT PRIMARY KEY,
    Titulo VARCHAR(255),
    Diretor VARCHAR(255),
    Ano_de_lancamento INT,
    Genero VARCHAR(50),
    Classificacao_etaria VARCHAR(10)
);

CREATE TABLE Oficinas (
    ID_oficina INT PRIMARY KEY,
    Titulo VARCHAR(255),
    Instrutor VARCHAR(255)
);

-- Tabela 'Usuarios'
CREATE TABLE Usuarios (
    ID_usuario INT PRIMARY KEY,
  	Email VARCHAR(100),
    Nome VARCHAR(100),
    Sobrenome VARCHAR(100),
    Senha VARCHAR(255)
);

-- Tabela 'Salas'
CREATE TABLE Salas (
    ID_sala INT PRIMARY KEY,
    Capacidade INT,
    Localizacao VARCHAR(255)
);

-- Tabela 'Agendamento'
CREATE TABLE Agendamento (
    ID_agendamento INT PRIMARY KEY,
    ID_filme INT,
    ID_oficina INT,
    ID_usuario INT,
    ID_sala INT,
    Data DATE,
  	Hora Time,
    FOREIGN KEY (ID_filme) REFERENCES Filmes(ID_filme),
    FOREIGN KEY (ID_oficina) REFERENCES Oficinas(ID_oficina),
    FOREIGN KEY (ID_usuario) REFERENCES Usuarios(ID_usuario),
    FOREIGN KEY (ID_sala) REFERENCES Salas(ID_sala)
);

------------------------------------------INSERTS---------------------------------------------

INSERT INTO Filmes (ID_filme, Titulo, Diretor, Ano_de_lancamento, Genero, Classificacao_etaria)
VALUES
    (1, 'Vingadores: Ultimato', 'Anthony e Joe Russo', 2019, 'Ação', '12+'),
    (2, 'La La Land', 'Damien Chazelle', 2016, 'Musical', '10+'),
    (3, 'O Rei Leão', 'Jon Favreau', 2019, 'Animação', 'Livre'),
    (4, 'Mulher-Maravilha', 'Patty Jenkins', 2017, 'Ação', '12+'),
    (5, 'O Labirinto do Fauno', 'Guillermo del Toro', 2006, 'Fantasia', '14+');

-- Inserindo dados na tabela 'Oficinas'
INSERT INTO Oficinas (ID_oficina, Titulo, Instrutor)
VALUES
    (1, 'Oficina de Fotografia', 'Carlos Silva'),
    (2, 'Oficina de Programação em Python', 'Ana Oliveira'),
    (3, 'Oficina de Pintura em Aquarela', 'Rafael Santos'),
    (4, 'Oficina de Dança de Salão','Juliana Oliveira'),
    (5, 'Oficina de Culinária Italiana','Luca Martini');
-- Inserindo dados na tabela 'Usuarios'
INSERT INTO Usuarios (ID_usuario, Nome, Sobrenome, Email, Senha)
VALUES
    (1, 'Maria', 'Silva', 'maria@email.com', 'senha123'),
    (2, 'João', 'Santos', 'joao@email.com', 'senha456'),
    (3, 'Ana', 'Oliveira', 'ana@email.com', 'senha789'),
    (4, 'Carlos', 'Silveira', 'carlos@email.com', 'senhaabc'),
    (5, 'Julia', 'Martins', 'julia@email.com', 'senhaxyz');

-- Inserindo dados na tabela 'Salas'
INSERT INTO Salas (ID_sala, Capacidade, Localizacao)
VALUES
    (1, 50, 'Andar 2, Ala A'),
    (2, 30, 'Andar 1, Ala B'),
    (3, 40, 'Andar 3, Ala C'),
    (4, 60, 'Andar 2, Ala B'),
    (5, 25, 'Andar 1, Ala A');

-- Inserindo dados na tabela 'Agendamento'
INSERT INTO Agendamento (ID_agendamento, ID_filme, ID_oficina, ID_usuario, ID_sala, Data, Hora)
VALUES
    (1, 1, NULL, 1, 2, '2023-12-15', '14:00:00'),
    (2, NULL, 3, 2, 1, '2023-12-16', '16:30:00'),
    (3, 3, NULL, 3, 3, '2023-12-17', '10:00:00'),
    (4, 4, NULL, 4, 4, '2023-12-18', '18:00:00'),
    (5, 5, 1, 5, 5, '2023-12-19', '20:45:00');
    
------------------------------------------Consultas-------------------------------------------
SELECT b.Nome,b.Sobrenome,a.id_filme,a.ID_oficina from Agendamento a left join Usuarios b on a.id_usuario=b.ID_usuario

SELECT a.*,b.data,b.hora from Filmes a left join Agendamento b on a.ID_filme=b.id_filme

SELECT a.*,b.data,b.hora from Oficinas a left join Agendamento b on a.ID_oficina=b.id_oficina
