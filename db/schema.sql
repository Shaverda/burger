create database burgers_db;
	use burgers_db;

	create table burgers (
		id int auto_increment primary key,
		burger_name varchar(20) not null,
		devoured boolean not null default false,
		date timestamp default current_timestamp);

