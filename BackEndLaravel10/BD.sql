CREATE TABLE `empleados` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `cedula` varchar(255) DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



INSERT INTO `empleados` (`id`, `nombre`, `edad`, `cedula`, `sexo`, `telefono`, `cargo`, `avatar`, `created_at`, `updated_at`)
VALUES
	(5,'Urian Viera',36,'20004322','Masculino','3213872648','Desarrollador Web','wokVMJ0cVtcPA7Jv77XB.jpg','2024-03-06 01:48:43','2024-03-06 16:33:03'),
	(6,'Carlos',33,'34343','Femenino','343','Analista','IzfPtw7Wi8AZGmQmcTLD.png','2024-03-06 01:49:56','2024-03-06 16:31:15'),
	(8,'Fabio',48,'222223','Masculino','33344343','Analista','c3ppqdpxUEoAGWMBHCqe.png','2024-03-06 16:33:36','2024-03-06 16:33:36'),
	(9,'Kate Yull',21,'323232323','Femenino','4555555','Asistente','xKPvB8ANjyg3pPcOOq4w.png','2024-03-06 16:34:01','2024-03-06 18:46:06'),
	(10,'Luis Viera',44,'3423423','Masculino','22222','Secretario','evckPn0XtIKhwtykl8a1.jpg','2024-03-06 18:30:43','2024-03-06 18:31:22');
