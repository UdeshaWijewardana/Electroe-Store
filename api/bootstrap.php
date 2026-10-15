<?php
declare(strict_types=1);
session_start();
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
require_once __DIR__ . '/../db.php';

function json_body(): array { $data=json_decode(file_get_contents('php://input'), true); return is_array($data)?$data:$_POST; }
function respond(array $data, int $status=200): never { http_response_code($status); echo json_encode($data, JSON_UNESCAPED_SLASHES); exit; }
function ok(mixed $data=[]): never { respond(['ok'=>true,'data'=>$data]); }
function fail(string $message, int $status=400): never { respond(['ok'=>false,'error'=>$message],$status); }
function csrf_token(): string { if(empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(32)); return $_SESSION['csrf']; }
function require_csrf(): void { if(!hash_equals($_SESSION['csrf']??'', $_SERVER['HTTP_X_CSRF_TOKEN']??'')) fail('Invalid CSRF token',419); }
function user(): ?array { return $_SESSION['user']??null; }
function require_login(): array { $u=user(); if(!$u) fail('Authentication required',401); return $u; }
function require_admin(): array { $u=require_login(); if($u['role']!=='admin') fail('Administrator access required',403); return $u; }
