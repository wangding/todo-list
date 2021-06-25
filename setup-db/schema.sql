-- 创建 todo_list 数据库
drop database if exists `todo_list`;
create schema `todo_list` default character set utf8mb4;

use todo_list;

-- 创建表
drop table if exists `users`;
create table `users` (
  `id` int(11) not null auto_increment,
  `email` varchar(255) not null,
  `password` varchar(255) not null,
  primary key (`id`),
  unique key `email` (`email`)
) engine=innodb default charset=utf8mb4;

drop table if exists `tasks`;
create table `tasks` (
  `id` int(11) not null auto_increment,
  `content` varchar(255) not null,
  `user_id` int(11) not null comment '待办事项所属用户',
  primary key (`id`),
  key `user_id` (`user_id`)
) engine=innodb default charset=utf8mb4;

-- 添加外键
alter table `tasks`
add constraint `tasks_ibfk_1`
  foreign key (`user_id`)
  references `users` (`id`)
  on delete cascade
  on update cascade;
