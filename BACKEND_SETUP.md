# ElectroStore PHP/MySQL setup

1. Copy this folder into `C:\xampp\htdocs\electrostore`.
2. Start Apache and MySQL in XAMPP.
3. Open phpMyAdmin, create/import `database.sql` (it creates the `electrostore` database).
4. Confirm `config.php` matches the local MySQL user/password. The default XAMPP root account is blank.
5. Create the first admin from an XAMPP shell, using a password of at least 10 characters:

```text
cd C:\xampp\htdocs\electrostore
php setup_admin.php admin@example.com StrongDemoPassword123 "Store Admin"
```

The API is available at `http://localhost/electrostore/api/index.php?action=products`.
The existing static pages can be opened at `http://localhost/electrostore/index.html`.

API state-changing requests require the CSRF token from `?action=csrf` in the `X-CSRF-Token` header. Authentication uses PHP sessions and passwords are stored with `password_hash()`.
