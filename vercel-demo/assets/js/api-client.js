(() => {
  const cartKey = 'electrostore-portfolio-cart';
  const readCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');
  const saveCart = rows => localStorage.setItem(cartKey, JSON.stringify(rows));
  const catalog = fetch('data/products.json').then(r => r.ok ? r.json() : Promise.reject(new Error('Catalog unavailable')));
  window.ElectroAPI = {
    get: async (route, params = {}) => {
      const products = await catalog;
      if (route === 'products' || route === 'admin_products') { const q=String(params.q||'').toLowerCase(); return {ok:true,data:products.filter(p=>!q||`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q))}; }
      if (route === 'product') return {ok:true,data:products.find(p=>p.id===Number(params.id))};
      if (route === 'suggestions') { const q=String(params.q||'').toLowerCase(); return {ok:true,data:products.filter(p=>`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q)).slice(0,8)}; }
      if (route === 'deals') return {ok:true,data:products.slice(0,4).map(p=>({...p,product_id:p.id,original_price:p.price,deal_price:Math.round(p.price*.9),discount_type:'percentage',discount_value:10,end_at:'2099-12-31 23:59:59'}))};
      if (route === 'me') return {ok:true,data:null};
      if (route === 'cart') return {ok:true,data:readCart().map(row=>({...products.find(p=>p.id===row.id),qty:row.qty,price:products.find(p=>p.id===row.id).price}))};
      return {ok:true,data:[]};
    },
    post: async (route, body = {}) => {
      const products = await catalog;
      if (route === 'cart_add') { const rows=readCart(),id=Number(body.product_id),row=rows.find(x=>x.id===id); row?row.qty+=Number(body.quantity||1):rows.push({id,qty:Number(body.quantity||1)});saveCart(rows);return {ok:true,data:rows}; }
      if (route === 'cart_update') { const rows=readCart().map(x=>x.id===Number(body.product_id)?{...x,qty:Number(body.quantity)}:x).filter(x=>x.qty>0);saveCart(rows);return {ok:true,data:rows}; }
      if (route === 'cart_remove') { saveCart(readCart().filter(x=>x.id!==Number(body.product_id))); return {ok:true,data:[]}; }
      if (['checkout','login','register'].includes(route)) throw new Error('This portfolio preview does not provide account or checkout services. Use the PHP/MySQL application locally.');
      return {ok:true,data:products};
    }
  };
  window.ElectroAPIReady = catalog;
})();
