CREATE DATABASE `elens_session`;

create table `sessions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `session_id` varchar(128) NOT NULL COMMENT 'sessionid',
  `expires` int(10) unsigned NOT NULL COMMENT '有效期',
  `data` varchar(2000) NOT NULL DEFAULT "{}" COMMENT '内容',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_session_id` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '中间件session表';