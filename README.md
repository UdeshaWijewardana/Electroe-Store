# ElectroStore — Full-Stack Electronics E-Commerce Website

ElectroStore is a vanilla HTML/CSS/JavaScript storefront backed by PHP 8+, PDO, MySQL, and PHP sessions. It includes customer browsing, database-backed carts and checkout, LKR pricing, deals, order history, and protected administrator workflows.

## Features

Customer features include product search and filters, product details, cart persistence, server-side deal pricing, Cash on Delivery checkout, profile/order history, status tracking, and responsive navigation.

Administrator features include protected dashboard access, product management, deal management, customer order details, order status transitions, and real database statistics.

Order lifecycle: `Pending → Confirmed → Processing → Shipped → Delivered`, with validated cancellation handling and status history.

## Technology

- HTML5, CSS3, vanilla JavaScript
- PHP 8+ with PDO
- MySQL/MariaDB
- PHP sessions and CSRF protection
- Apache/XAMPP for local development

## Local XAMPP setup

1. Copy the project into `C:\xampp\htdocs\electrostore`.
2. Start Apache and MySQL in XAMPP.
3. Create a database named `electrostore` in phpMyAdmin.
4. Import `database.sql`.
5. Apply the migrations in `migrations/`, including `order_status_workflow.sql`.
6. Keep local database credentials in `config.php`; use `config.example.php` as a safe reference.
7. Optionally run `php seed_catalog_deals.php` from the project directory.
8. Create an administrator with `php setup_admin.php admin@example.com StrongPassword123 "Store Administrator"`.

## URLs

- Store: http://localhost/electrostore/
- Customer orders: http://localhost/electrostore/profile.html#my-orders
- Admin login: http://localhost/electrostore/admin-login.html
- phpMyAdmin: http://localhost/phpmyadmin/

## Project structure

- `*.html` — storefront and administrator pages
- `assets/css/` — shared and page-specific styles
- `assets/js/` — API client and application logic
- `api/` — PHP JSON API and session/CSRF bootstrap
- `database.sql` — base schema and sample catalog
- `migrations/` — repeatable schema and catalog migrations
- `assets/images/products/` — local product photographs

## Security notes

Do not commit real credentials, session files, database dumps, customer exports, or private backups. Passwords use `password_hash`; authorization, CSRF checks, prepared statements, stock checks, and server-side totals are enforced by the PHP API.

This repository is prepared for local development and portfolio review. No public deployment or payment gateway is claimed.
