<?php
declare(strict_types=1);
require __DIR__.'/../db.php';
$pdo=db();
$models=[
  1=>[['Lenovo','IdeaPad Slim 3'],['Dell','Inspiron 15'],['HP','Pavilion 14'],['ASUS','Vivobook 15'],['Acer','Aspire 5'],['Apple','MacBook Air'],['Samsung','Galaxy Book4'],['MSI','Modern 15'],['Microsoft','Surface Laptop'],['Razer','Blade 15']],
  2=>[['Samsung','Galaxy A55'],['Apple','iPhone 15'],['Xiaomi','Redmi Note 13'],['Google','Pixel 8a'],['OnePlus','Nord CE 4'],['Sony','Xperia 10'],['Nokia','G42'],['ASUS','Zenfone 11'],['POCO','X6 Pro'],['Motorola','Moto G85']],
  3=>[['Sony','WH-1000XM5'],['Bose','QuietComfort'],['JBL','Tune 770NC'],['Apple','AirPods Pro'],['Anker','Soundcore Q45'],['Sennheiser','Momentum 4'],['Skullcandy','Crusher ANC'],['JBL','Live 660NC'],['Audio-Technica','ATH-M50x'],['Beats','Studio Pro']],
  4=>[['Canon','EOS R50'],['Nikon','Z50'],['Sony','Alpha A6400'],['Panasonic','Lumix G95'],['Canon','PowerShot V10'],['Nikon','Coolpix P950'],['Fujifilm','X-S20'],['OM System','OM-5'],['Sony','Cyber-shot RX100'],['GoPro','HERO12 Black']],
  5=>[['Anker','USB-C Hub 7-in-1'],['Samsung','Galaxy Watch6'],['Logitech','MX Master 3S'],['Keychron','K2 Wireless Keyboard'],['SanDisk','Extreme Portable SSD'],['TP-Link','Archer AX55 Router'],['Belkin','BoostCharge Power Bank'],['Apple','Magic Keyboard'],['Xiaomi','Pad 6 Tablet'],['Logitech','Brio 4K Webcam']]
];
$q=$pdo->prepare('UPDATE products SET brand=?,name=?,description=? WHERE id=? AND category_id=?');
$rows=$pdo->query('SELECT id,category_id FROM products WHERE active=1 ORDER BY id')->fetchAll();$seen=[];
foreach($rows as $row){$cid=(int)$row['category_id'];$idx=$seen[$cid]??0;$seen[$cid]=$idx+1;$pair=$models[$cid][$idx%count($models[$cid])];$variant=intdiv($idx,count($models[$cid]))+1;$name=$pair[0].' '.$pair[1].($variant>1?' V'.$variant:'');$q->execute([$pair[0],$name,$pair[0].' '.$pair[1].' electronics product for everyday use, with dependable performance and practical features.',$row['id'],$cid]);}
echo "Updated ".count($rows)." catalog records with category-appropriate brands and models.\n";
