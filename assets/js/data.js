/* Local demo catalogue. Replace with PHP/MySQL API results in backend phase. */
window.ELECTRO_CATALOG = [
  {id:1,name:'UltraBook Pro 14"',category:'Laptops',price:1299,oldPrice:1499,image:'laptop.svg',rating:4.9,stock:12,featured:true,description:'A powerful, lightweight ultrabook with an all-day battery, vivid 14-inch display and speedy performance.'},
  {id:2,name:'PhoneX 128GB',category:'Mobile Phones',price:799,oldPrice:899,image:'phone.svg',rating:4.8,stock:25,featured:true,description:'A fast and sleek smartphone with stunning photography, an immersive screen and reliable battery life.'},
  {id:3,name:'SoundMax Wireless',category:'Headphones',price:149,oldPrice:199,image:'headphones.svg',rating:4.7,stock:32,featured:true,description:'Comfortable wireless over-ear headphones with immersive sound and active noise reduction.'},
  {id:4,name:'ClickShot DSLR',category:'Cameras',price:599,oldPrice:699,image:'camera.svg',rating:4.8,stock:9,featured:true,description:'A versatile digital camera for capturing beautiful photos and sharp videos.'},
  {id:5,name:'TabFlow Air 11',category:'Accessories',price:449,oldPrice:499,image:'tablet.svg',rating:4.6,stock:18,description:'Lightweight tablet with bright screen, precise touch controls and plenty of room for creativity.'},
  {id:6,name:'Chrono Smart Watch',category:'Accessories',price:229,oldPrice:279,image:'watch.svg',rating:4.5,stock:36,description:'Track the time, everyday wellness and notifications from a compact smart watch.'},
  {id:7,name:'GameBook X15',category:'Laptops',price:1599,oldPrice:1799,image:'laptop.svg',rating:4.9,stock:7,description:'High-performance laptop with spacious display for gamers and creators.'},
  {id:8,name:'Phone Lite 64GB',category:'Mobile Phones',price:329,oldPrice:379,image:'phone.svg',rating:4.4,stock:21,description:'All the mobile essentials packed into a convenient, affordable smartphone.'},
  {id:9,name:'StudioPods Pro',category:'Headphones',price:99,oldPrice:129,image:'headphones.svg',rating:4.5,stock:42,description:'Portable wireless audio with crystal-clear sound and an easy fit.'},
  {id:10,name:'SnapCam Mini',category:'Cameras',price:329,oldPrice:399,image:'camera.svg',rating:4.6,stock:11,description:'Capture your adventures with a compact, feature-filled digital camera.'},
  {id:11,name:'WorkMate Laptop 13',category:'Laptops',price:899,oldPrice:999,image:'laptop.svg',rating:4.6,stock:14,description:'Reliable everyday computing in a portable professional laptop.'},
  {id:12,name:'Fitness Watch S',category:'Accessories',price:89,oldPrice:109,image:'watch.svg',rating:4.3,stock:28,description:'A lightweight watch for everyday activity and essential notifications.'},
  {id:13,name:'PhoneX Plus 256GB',category:'Mobile Phones',price:1099,oldPrice:1199,image:'phone.svg',rating:4.8,stock:16,description:'More display, more space and a great camera experience.'},
  {id:14,name:'Wireless EarSound',category:'Headphones',price:69,oldPrice:89,image:'headphones.svg',rating:4.2,stock:63,description:'Easy everyday listening without tangled cables.'},
  {id:15,name:'Mirrorless Cam V2',category:'Cameras',price:949,oldPrice:1099,image:'camera.svg',rating:4.9,stock:8,description:'Lightweight mirrorless photography with pro-level control.'},
  {id:16,name:'Tablet Mini 8',category:'Accessories',price:249,oldPrice:299,image:'tablet.svg',rating:4.5,stock:19,description:'A portable little tablet for notes and entertainment.'},
  {id:17,name:'CreatorBook 16',category:'Laptops',price:1899,oldPrice:2099,image:'laptop.svg',rating:4.9,stock:5,description:'Extra performance and workspace for your next big project.'},
  {id:18,name:'Pixel Phone 5G',category:'Mobile Phones',price:649,oldPrice:729,image:'phone.svg',rating:4.6,stock:20,description:'Smooth and responsive mobile performance with 5G connectivity.'},
  {id:19,name:'BassFlex Headphones',category:'Headphones',price:119,oldPrice:159,image:'headphones.svg',rating:4.6,stock:24,description:'Deep, dynamic sound and soft earcups for long listening sessions.'},
  {id:20,name:'TravelCam 4K',category:'Cameras',price:759,oldPrice:859,image:'camera.svg',rating:4.7,stock:17,description:'Create great content on the move with detailed 4K video.'},
  {id:21,name:'USB-C Dock 8-in-1',category:'Accessories',price:79,oldPrice:99,image:'tablet.svg',rating:4.3,stock:44,description:'Get more connections and organize your desktop.'},
  {id:22,name:'Luma Watch Pro',category:'Accessories',price:299,oldPrice:349,image:'watch.svg',rating:4.6,stock:13,description:'An elegant watch with all-day battery and a crisp display.'},
  {id:23,name:'StudentBook 14',category:'Laptops',price:549,oldPrice:649,image:'laptop.svg',rating:4.4,stock:22,description:'A practical laptop for lectures, projects and daily work.'},
  {id:24,name:'Pocket Phone SE',category:'Mobile Phones',price:199,oldPrice:249,image:'phone.svg',rating:4.2,stock:30,description:'A simple, dependable phone with all the essentials.'}
];

// LKR fallback values for offline/static preview; the live app loads prices from MySQL.
const ELECTRO_LKR_PRICES = {1:389000,2:239000,3:45000,4:179000,5:69900,6:59900,7:479000,8:99000,9:29000,10:99000,11:269000,12:24900,13:329000,14:19900,15:289000,16:74900,17:569000,18:189000,19:34900,20:229000,21:24900,22:89900,23:169000,24:59900};
window.ELECTRO_CATALOG = window.ELECTRO_CATALOG.map(product => ({...product, price:ELECTRO_LKR_PRICES[product.id] || product.price, oldPrice:Math.round((ELECTRO_LKR_PRICES[product.id] || product.oldPrice || product.price) * 1.12)}));
