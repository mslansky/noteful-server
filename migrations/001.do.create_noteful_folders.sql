-- First, remove the table if it exists
drop table if exists folders;

-- Create the table anew
create table folders (
  id INTEGER primary key generated by default as identity,
  name  varchar(50)
);