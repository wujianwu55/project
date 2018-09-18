SET NAMES UTF8;
DROP DATABASE IF EXISTS tp;
CREATE DATABASE tp CHARSET=UTF8;
USE tp;

CREATE TABLE tp_img(
	pid				INT PRIMARY KEY AUTO_INCREMENT,
	url				VARCHAR(128),		#图片路径
	pname			VARCHAR(128)		#图片链接       
);

INSERT INTO tp_img(pid,url,pname) VALUES
('1.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Kuura'),
('2.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','City'),
('3.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Valta'),
('4.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Holvi'),
('11.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Hernesaaren'),
('12.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Jonas'),
('13.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','New'),
('14.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Helsinki'),
('15.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','suomen'),
('16.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','EMMA'),
('17.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Galipette'),
('18.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Powerfood'),
('19.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Gold'),
('20.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','keisari'),
('21.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Parliament'),
('22.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Victor'),
('23.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','kontoret'),
('24.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Senate'),
('25.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Masters'),
('26.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','ERC'),
('27.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Finnish'),
('28.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Design'),
('29.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','ARE'),
('30.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Susanna'),
('31.jpg','C:/xampp/htdocs/xiangmu/firstVue/static/img:','Helsinki')