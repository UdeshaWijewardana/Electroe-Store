-- Verified local product photos. Image references only; IDs, prices, stock,
-- customers, and orders are untouched.
UPDATE products SET image = 'images/products/canon-eos-r50.jpg' WHERE id = 4;
UPDATE products SET image = 'images/products/anker-usb-c-hub-7-in-1.jpg' WHERE id = 5;
UPDATE products SET image = 'images/products/apple-macbook-air.png' WHERE id = 11;
UPDATE products SET image = 'images/products/apple-macbook-air.png' WHERE id IN (21,31);
UPDATE products SET image = 'images/products/canon-eos-r50.jpg' WHERE id IN (103,113);
UPDATE products SET image = 'images/products/anker-usb-c-hub-7-in-1.jpg' WHERE id IN (131,141);
-- Official manufacturer/support or manufacturer-authorized catalog URLs.
-- Dell's product CDN URL exceeds the current VARCHAR(255) image field; keep
-- this product on its existing fallback until a short permitted URL is found.
UPDATE products SET image = 'laptop.svg' WHERE id = 7;
UPDATE products SET image = 'https://hp.widen.net/content/cj8gnvfqof/png/cj8gnvfqof.png?color=ffffff00&dpi=72&h=400&w=400' WHERE id = 8;
UPDATE products SET image = 'https://static2-ecemea.acer.com/media/catalog/product/_/_/___a__acer-aspire-5_a515-44-44g_fp-backlit_pure-silver_nofp_modelmain_4_1_nx.hw4ep.001.png' WHERE id = 10;
