INSERT INTO todos (title, description, completed)
VALUES ('New Task', 'Description of the task', false);

-- 

SELECT * FROM todos;

-- 

UPDATE todos
SET title = 'Updated Task Title', description = 'Updated Task Description', completed = true
WHERE id = 1;

-- 

DELETE FROM todos
WHERE id = 1;

-- 

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false
);

-- 

CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false
);
