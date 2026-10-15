<?php
declare(strict_types=1);
require __DIR__.'/db.php';
if(PHP_SAPI!=='cli') exit('Run from the XAMPP command line only.');
$email=$argv[1]??'';$password=$argv[2]??'';$name=$argv[3]??'Store Administrator';
if(!filter_var($email,FILTER_VALIDATE_EMAIL)||strlen($password)<10) exit("Usage: php setup_admin.php admin@example.com StrongPassword123 [Name]\n");
$s=db()->prepare('INSERT INTO users(name,email,password_hash,role) VALUES(?,?,?,"admin")');$s->execute([$name,$email,password_hash($password,PASSWORD_DEFAULT)]);echo "Admin created: {$email}\n";
