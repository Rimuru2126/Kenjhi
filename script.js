// ═══ DATA ═══
const GARNISHES_MEAL = [
  {id:'g_ab',name:'Arroz Blanco',price:0,img:'https://images.aws.nestle.recipes/original/cc1ed7245ed521b41e14c8c7ca0fa9f8_foto_arroz.jpg'},
  {id:'g_aa',name:'Arroz Amarillo',price:0,img:'https://comedera.com/wp-content/uploads/sites/9/2023/04/arroz-con-azafran.jpg'},
  {id:'g_hab',name:'Habichuelas',price:75,img:'https://jacquelinehenriquez.com/wp-content/uploads/2016/07/habichuelas.jpg'},
  {id:'g_tos',name:'Tostones',price:75,img:'https://www.paleorunningmomma.com/wp-content/uploads/2017/01/tostones-with-avocado-ranch-2.jpg'},
  {id:'g_conc',name:'Conconada c/Habichuela',price:75,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SQTXFVhu8SptqiZ4vTn82fDZeHJMZbXuJg&s'},
  {id:'g_ens',name:'Ensalada Verde',price:50,img:'https://i.ytimg.com/vi/9C6q9DC4j0k/maxresdefault.jpg'},
];
const DRINKS=[
  {id:'dr_rg',name:'Rica Grande',price:125,img:'https://assets-sirenago.s3-us-west-1.amazonaws.com/product/original/00/00/01/49/ade9f2db347fb4f9faa6251bbe8a8317.png'},
  {id:'dr_rm',name:'Rica Mediano',price:75,img:'https://static.compreloadomicilio.com/kyvgarulitacorp/products/033929/674df45a281f2802940441.webp'},
  {id:'dr_rp',name:'Rica Pequeño',price:50,img:'https://tienda.farmaciacarol.com/Images/Products/22003631.jpg'},
  {id:'dr_crg',name:'Choco Rica Grande',price:125,img:'https://assets-sirenago.s3-us-west-1.amazonaws.com/product/large/00/00/01/36/322f94a106a3017f645fb8704b9ffacb.png'},
  {id:'dr_crm',name:'Choco Rica Mediana',price:75,img:'https://jumbo.com.do/pub/media/catalog/product/cache/e5145626c3f3275a7b4b1f65af9095fa/2/1/2109011-A_1.jpg'},
  {id:'dr_crp',name:'Choco Rica Pequeña',price:50,img:'https://tienda.farmaciacarol.com/Images/Products/45959099.jpg'},
  {id:'dr_lrg',name:'Leche Rica Grande',price:125,img:'https://cdn.almacen.do/2020/05/Leche-Entera-Rica-Listamilk-1-L-Front.jpg'},
  {id:'dr_cer',name:'Jugo Cereza',price:75,img:'https://www.laylita.com/recetas/wp-content/uploads/2013/06/Refresco-de-cereza-y-limon.jpg'},
  {id:'dr_tam',name:'Jugo Tamarindo',price:75,img:'https://www.dominicancooking.com/wp-content/uploads/tamarind-juice-jugo-de-tamarindo-ClaraGon0028.jpg'},
  {id:'dr_nar',name:'Jugo Naranja',price:75,img:'https://naranjasonline.net/wp-content/uploads/2016/02/diferencias-zumo-natural-y-envasado-1024x674.jpg'},
  {id:'dr_lim',name:'Limón con Avena',price:75,img:'https://www.recetasnestlecam.com/sites/default/files/srh_recipes/fa680b5b1d5fec19ef080fe2a7d185a0.jpg'},
  {id:'dr_mel',name:'Jugo Melón',price:75,img:'https://www.clarin.com/2024/07/10/Op0hirz1l_2000x1500__1.jpg'},
  {id:'dr_agua',name:'Agua',price:25,img:'https://assets-sirenago.s3-us-west-1.amazonaws.com/product/large/00/00/01/e9/d27868ef4232fed0999c163235639711.jpg'},
];
const COUNTRIES=[
  {flag:'🇩🇴',name:'Rep. Dominicana',code:'+1'},
  {flag:'🇺🇸',name:'USA',code:'+1'},
  {flag:'🇵🇷',name:'Puerto Rico',code:'+1'},
  {flag:'🇲🇽',name:'México',code:'+52'},
  {flag:'🇨🇴',name:'Colombia',code:'+57'},
  {flag:'🇻🇪',name:'Venezuela',code:'+58'},
  {flag:'🇨🇺',name:'Cuba',code:'+53'},
  {flag:'🇭🇹',name:'Haití',code:'+509'},
  {flag:'🇪🇸',name:'España',code:'+34'},
  {flag:'🇦🇷',name:'Argentina',code:'+54'},
  {flag:'🇧🇷',name:'Brasil',code:'+55'},
  {flag:'🇵🇦',name:'Panamá',code:'+507'},
  {flag:'🇬🇹',name:'Guatemala',code:'+502'},
  {flag:'🇭🇳',name:'Honduras',code:'+504'},
  {flag:'🇨🇷',name:'Costa Rica',code:'+506'},
  {flag:'🇸🇻',name:'El Salvador',code:'+503'},
  {flag:'🇳🇮',name:'Nicaragua',code:'+505'},
  {flag:'🇪🇨',name:'Ecuador',code:'+593'},
  {flag:'🇵🇪',name:'Perú',code:'+51'},
  {flag:'🇨🇱',name:'Chile',code:'+56'},
  {flag:'🇨🇦',name:'Canadá',code:'+1'},
  {flag:'🇩🇪',name:'Alemania',code:'+49'},
  {flag:'🇫🇷',name:'Francia',code:'+33'},
  {flag:'🇮🇹',name:'Italia',code:'+39'},
];

const MENU={
  almuerzo:{label:'☀️ Almuerzo',sections:[
    {title:'Acompañantes',gt:'meal',
     prov:['Guineitos Salcochados','Mangú de Guineitos','Arroz Blanco','Arroz Amarillo'],
     note:'Incluye provisiones del día',
     items:[
      {id:'a1',name:'Salami Guisado',price:160,img:'https://mydominicankitchen.com/wp-content/uploads/2021/09/Salami-Guisado-My-Dominican-Kitchen-4.jpg'},
      {id:'a2',name:'Salchichas Pinguilín',price:160,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RHi0Nghs1UzcxomqxsJuQD8aRc4owX9Uyg&s'},
      {id:'a3',name:'Longaniza Frita',price:170,img:'https://chimikingrestaurant.com/wp-content/uploads/2023/01/Chimiking-Longaniza-Side-1.png'},
      {id:'a4',name:'Mollejitas',price:175,img:'https://osterstatic.reciperm.com/webp/Mollejitas%20guisadas.webp'},
      {id:'a5',name:'Spaguetis en Salsa Roja',price:180,img:'https://www.cocinadelirante.com/sites/default/files/images/2024/04/como-hacer-salsa-roja-cremosa-para-espagueti-sin-crema.jpg'},
      {id:'a6',name:'Bacalao Guisado',price:200,img:'https://www.recetasnestle.com.do/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/83dafd12142fba2268defd3f478dcc98.jpg?itok=o44v6qgF'},
      {id:'a7',name:'Arenque',price:200,img:'https://i.ytimg.com/vi/YeeNNI8IV4c/maxresdefault.jpg'},
      {id:'a8',name:'Jamoneta Frita',price:160,img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXEUsyqjfM8dGpRZEqr1018mVSbnwhSumbCAIp6nqKVerMB3TBIihaaxYxCQoHoMgUNRol68nTISNbJ7jW9WQ48cTDGoH5ribBqp_tpQLrbDFGudJK5QaNQi7Kc7dKODisiz2xxkvy-5A1/s1600/IMG_6357.jpg'},
      {id:'a9',name:'Chivo',price:350,img:'https://www.recetas-venezolanas.com/base/stock/Recipe/chivo-guisado/chivo-guisado_web.jpg'},
      {id:'a10',name:'Pechuga Cordón Bleu',price:300,img:'https://www.tresjotas.com/wp-content/uploads/2024/06/Cordon-Bleu.jpg'},
      {id:'a11',name:'Chuleta Fresca',price:275,img:'https://i.ytimg.com/vi/CATrlA_19-M/maxresdefault.jpg'},
      {id:'a12',name:'Pechuga a la Plancha',price:250,img:'https://cdn3.myrealfood.app/recipes%2F0BsFHSVj584Lq5My9e40%2Fmain.jpg?alt=media&token=d7fe66d1-1e0a-4b8d-bae4-a0c8d35711e6'},
      {id:'a13',name:'Cerdo Guisado',price:200,img:'https://elfogoncito.net/wp-content/uploads/2014/06/cerdo-guisado5.jpg'},
      {id:'a14',name:'Filete de Cerdo Plancha',price:275,img:'https://img.freepik.com/fotos-premium/lomo-cerdo-parrilla-sobre-plancha-madera-sobre-superficie-oscura_133622-66.jpg'},
    ]},
    {title:'Mariscos',gt:'meal',items:[
      {id:'m1',name:'Mero Empanizado',price:225,img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80'},
      {id:'m2',name:'Mero a la Plancha',price:300,img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80'},
    ]},
    {title:'Adicionales',gt:'none',note:'Carnes RD$250 en adelante según tipo',items:[
      {id:'ad1',name:'Arroces (plato pequeño)',price:100,img:'https://images.unsplash.com/photo-1536304993881-ff86e0c9c4a7?w=400&q=80'},
      {id:'ad2',name:'Arroces (plato grande)',price:200,img:'https://images.unsplash.com/photo-1536304993881-ff86e0c9c4a7?w=400&q=80'},
      {id:'ad3',name:'Adicionales de Carnes',price:250,img:'https://images.unsplash.com/photo-1544025162-d76538b2ed7b?w=400&q=80'},
      {id:'ad4',name:'Vasos Fun de Habichuela',price:75,img:'https://images.unsplash.com/photo-1611575869994-6c805ddf2b48?w=400&q=80'},
      {id:'ad5',name:'Conconada c/Habichuela (pequeño)',price:75,img:'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80'},
      {id:'ad6',name:'Conconada c/Habichuela (grande)',price:150,img:'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80'},
      {id:'ad7',name:'Tostones',price:75,img:'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80'},
      {id:'ad8',name:'Lasagña (porción sale sola)',price:200,img:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80'},
    ]},
  ]},
  cena:{label:'🌙 Cena',sections:[
    {title:'Acompañantes',gt:'meal',
     prov:['Guineitos Salcochados','Mangú de Guineitos','Arroz Blanco','Arroz Amarillo'],
     note:'Incluye provisiones de la noche',
     items:[
      {id:'c1',name:'Salami Guisado',price:160,img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80'},
      {id:'c2',name:'Salchichas Pinguilín',price:160,img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80'},
      {id:'c3',name:'Longaniza Frita',price:170,img:'https://images.unsplash.com/photo-1588347818036-c7e8f5b8e2e7?w=400&q=80'},
      {id:'c4',name:'Mollejitas',price:175,img:'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&q=80'},
      {id:'c5',name:'Spaguetis en Salsa Roja',price:180,img:'https://images.unsplash.com/photo-1548196964-7d3e7d3a7f9b?w=400&q=80'},
      {id:'c6',name:'Bacalao Guisado',price:200,img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80'},
      {id:'c7',name:'Arenque',price:200,img:'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=80'},
      {id:'c8',name:'Jamoneta Frita',price:160,img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'},
      {id:'c9',name:'Chivo',price:350,img:'https://images.unsplash.com/photo-1544025162-d76538b2ed7b?w=400&q=80'},
      {id:'c10',name:'Pechuga Cordón Bleu',price:300,img:'https://images.unsplash.com/photo-1598514982901-3a2b6e5bd5f7?w=400&q=80'},
      {id:'c11',name:'Chuleta Fresca',price:275,img:'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80'},
      {id:'c12',name:'Pechuga a la Plancha',price:250,img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
      {id:'c13',name:'Cerdo Guisado',price:200,img:'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&q=80'},
      {id:'c14',name:'Filete de Cerdo Plancha',price:275,img:'https://images.unsplash.com/photo-1558030137-a56c1b002c3c?w=400&q=80'},
    ]},
  ]},
  desayuno:{label:'🌅 Desayuno',sections:[
    {title:'Postres Dulces',gt:'none',items:[
      {id:'d1',name:'Gelatina',price:60,img:'https://images.unsplash.com/photo-1567171466945-6d3de32dad13?w=400&q=80'},
      {id:'d2',name:'Flan',price:150,img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80'},
      {id:'d3',name:'Arroz con Leche',price:110,img:'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&q=80'},
      {id:'d4',name:'Tres Leche',price:150,img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'},
      {id:'d5',name:'Majarete',price:110,img:'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&q=80'},
      {id:'d6',name:'Vaso Fun de Avena',price:75,img:'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80'},
    ]},
    {title:'Jugos Rica',gt:'none',items:[
      {id:'j1',name:'Rica Grande',price:125,img:'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400&q=80'},
      {id:'j2',name:'Rica Mediano',price:75,img:'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400&q=80'},
      {id:'j3',name:'Rica Pequeño',price:50,img:'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400&q=80'},
      {id:'j4',name:'Choco Rica Grande',price:125,img:'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80'},
      {id:'j5',name:'Choco Rica Mediana',price:75,img:'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80'},
      {id:'j6',name:'Choco Rica Pequeña',price:50,img:'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80'},
      {id:'j7',name:'Leche Rica Grande',price:125,img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80'},
    ]},
    {title:'Jugos Naturales',gt:'none',items:[
      {id:'jn1',name:'Cereza',price:75,img:'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80'},
      {id:'jn2',name:'Tamarindo',price:75,img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80'},
      {id:'jn3',name:'Naranja',price:75,img:'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80'},
      {id:'jn4',name:'Limón con Avena',price:75,img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
      {id:'jn5',name:'Melón',price:75,img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80'},
    ]},
  ]},
  caldos:{label:'🍲 Caldos',sections:[{title:'Caldos',gt:'meal',items:[
    {id:'cal1',name:'Mondongo Guisado',price:275,img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',note:'Acompañamiento: Arroz Blanco'},
  ]}]},
  sandwiches:{label:'🥪 Sandwiches',sections:[{title:'Sandwiches',gt:'none',items:[
    {id:'s1',name:'Jamón',price:135,img:'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80'},
    {id:'s2',name:'Jamón y Queso',price:135,img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
    {id:'s3',name:'Derretido de Queso',price:135,img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
  ]}]},
  postres:{label:'🍮 Postres',sections:[{title:'Postres',gt:'none',items:[
    {id:'p1',name:'Gelatinas',price:60,img:'https://images.unsplash.com/photo-1567171466945-6d3de32dad13?w=400&q=80'},
    {id:'p2',name:'Habichuelas Dulces',price:100,img:'https://images.unsplash.com/photo-1611575869994-6c805ddf2b48?w=400&q=80'},
    {id:'p3',name:'Majarete',price:125,img:'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&q=80'},
    {id:'p4',name:'Flan Dulce',price:150,img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80'},
    {id:'p5',name:'Tres Leche',price:150,img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'},
  ]}]},
};

// ═══ STATE ═══
let activeCat='almuerzo';
let cart=[];
// steps: cart → service → contact → address → summary → almost → success
let step='cart';
let svc=''; // local / llevar / domicilio

// contact
let contactName='', contactPhone='', contactCountryIdx=0;
// address (domicilio)
let addrCalle='', addrNum='', addrComp='', addrRef='';
// summary
let tipMode='no', tipCustom='', orderComment='', payMethod='', payAmount='';
// order
let orderNum='';

// PD state
let pdItem=null,pdGT='none',pdSG=[],pdSD=null,pdQty=1,pdCmt='';

// ═══ HELPERS ═══
function genOrderNum(){return 'DO-'+Math.floor(1000000000+Math.random()*9000000000);}
function fmt(n){return 'RD$ '+Number(n).toLocaleString();}
function cartCount(){return cart.reduce((s,e)=>s+e.qty,0);}
function cartTotal(){return cart.reduce((s,e)=>{
  return s+(e.item.price+e.garnishes.reduce((a,g)=>a+g.price,0)+(e.drink?e.drink.price:0))*e.qty;
},0);}
function itemCartQty(id){return cart.filter(e=>e.item.id===id).reduce((s,e)=>s+e.qty,0);}
function findItemSec(id){
  for(const cat of Object.values(MENU)){
    for(const sec of cat.sections){
      const it=sec.items.find(i=>i.id===id);
      if(it) return {item:it,gt:sec.gt};
    }
  }
  return null;
}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2);}
function now(){
  const d=new Date();
  return {
    date:d.toLocaleDateString('es-DO',{day:'2-digit',month:'2-digit',year:'numeric'}),
    time:d.toLocaleTimeString('es-DO',{hour:'2-digit',minute:'2-digit',hour12:false}),
  };
}
function updateHeader(){
  const c=cartCount(),t=cartTotal();
  document.getElementById('hdr-count').textContent=c;
  document.getElementById('hdr-badge').textContent='RD$'+t.toLocaleString();
  document.getElementById('bar-count').textContent=c+' artículo'+(c!==1?'s':'');
  document.getElementById('bar-total').textContent=fmt(t);
  document.getElementById('cart-bar').classList.toggle('visible',c>0);
}

// ═══ MENU ═══
function renderTabs(){
  document.getElementById('tabs').innerHTML=Object.entries(MENU).map(([k,v])=>
    `<button class="tab ${k===activeCat?'active':''}" onclick="switchCat('${k}')">${v.label}</button>`
  ).join('');
}
function switchCat(k){activeCat=k;renderTabs();renderMain();document.getElementById('main').scrollIntoView({behavior:'smooth',block:'start'});}
function renderMain(){
  const cat=MENU[activeCat];
  let h='';
  for(const sec of cat.sections){
    h+=`<div class="section"><div class="sec-title">${sec.title}</div>`;
    if(sec.note) h+=`<div class="sec-note">* ${sec.note}</div>`;
    if(sec.prov) h+=`<div class="prov"><h3>✨ Incluye de provisiones:</h3><div class="prov-chips">${sec.prov.map(p=>`<span class="prov-chip">${p}</span>`).join('')}</div></div>`;
    h+=`<div class="grid">`;
    for(const item of sec.items){
      const qty=itemCartQty(item.id);
      h+=`<div class="card" onclick="openPD('${item.id}','${sec.gt||'none'}')">
        <div class="card-img"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=card-img-fallback>🍽️</span>'"/></div>
        <div class="card-body">
          <div class="card-name">${item.name}</div>
          ${item.note?`<div class="card-sub">${item.note}</div>`:''}
          <div class="card-foot">
            <div class="card-price">${fmt(item.price)}</div>
            <div class="card-qty ${qty>0?'show':''}">${qty>0?qty+'x':''}</div>
            <button class="add-btn" onclick="event.stopPropagation();openPD('${item.id}','${sec.gt||'none'}')">+</button>
          </div>
        </div>
      </div>`;
    }
    h+=`</div></div>`;
  }
  document.getElementById('main').innerHTML=h;
}

// ═══ PRODUCT DETAIL ═══
function openPD(itemId,gt){
  const f=findItemSec(itemId); if(!f) return;
  pdItem=f.item; pdGT=gt; pdSG=[]; pdSD=null; pdQty=1; pdCmt='';
  renderPD();
  document.getElementById('pd-ov').classList.add('open');
  document.getElementById('pd-sheet').scrollTop=0;
}
function closePDModal(){document.getElementById('pd-ov').classList.remove('open');}
function closePD(e){if(e.target===document.getElementById('pd-ov'))closePDModal();}
function pdTotal(){return(pdItem.price+pdSG.reduce((s,g)=>s+g.price,0)+(pdSD?pdSD.price:0))*pdQty;}
function renderPD(){
  const glist=pdGT==='meal'?GARNISHES_MEAL:[];
  let body=`<div class="pd-hero"><img src="${pdItem.img}" alt="${pdItem.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'"/></div>
  <div class="pd-hdr">
    <div class="pd-name">${pdItem.name}</div>
    <div class="pd-price">${fmt(pdItem.price)}</div>
    ${pdItem.note?`<div class="pd-note">${pdItem.note}</div>`:''}
  </div>`;
  if(glist.length){
    body+=`<div class="pd-sec"><div class="pd-sec-title">🍽 ¿Con qué lo acompañas?</div>
    <div class="pd-sec-sub">Selecciona hasta 3 opciones</div>
    <div class="extras-grid">`;
    for(const g of glist){
      const sel=pdSG.find(x=>x.id===g.id);
      body+=`<div class="extra-ck ${sel?'sel':''}" onclick="toggleG('${g.id}')">
        <div class="extra-box">${sel?'✓':''}</div>
        <div class="extra-info">
          <div class="extra-name"><img class="extra-thumb" src="${g.img}" alt="${g.name}" onerror="this.style.display='none'"/> ${g.name}</div>
          <div class="extra-price ${g.price===0?'free':''}">${g.price===0?'✅ Incluido':'+'+fmt(g.price)}</div>
        </div>
      </div>`;
    }
    body+=`</div></div>`;
  }
  body+=`<div class="pd-sec"><div class="pd-sec-title">🥤 ¿Qué vas a beber?</div>
  <div class="pd-sec-sub">Elige una bebida (opcional)</div>
  <div class="drinks-wrap">`;
  for(const d of DRINKS){
    const sel=pdSD&&pdSD.id===d.id;
    body+=`<div class="drink-chip ${sel?'sel':''}" onclick="toggleD('${d.id}')"><img class="drink-thumb" src="${d.img}" alt="${d.name}" onerror="this.style.display='none'"/> ${d.name} <span style="opacity:.65">+${d.price}</span></div>`;
  }
  body+=`</div></div>`;
  body+=`<div class="pd-sec"><div class="pd-sec-title">💬 Comentarios</div>
  <textarea class="pd-textarea" id="pd-cmt" rows="2" placeholder="Ej: Sin sal, bien cocinado...">${pdCmt}</textarea>
  </div><div class="pd-spacer"></div>`;
  document.getElementById('pd-body').innerHTML=body;
  document.getElementById('pd-foot').innerHTML=`
    <div class="qty-ctrl">
      <button class="qty-btn" onclick="pdChgQ(-1)">−</button>
      <span class="qty-num" id="pd-qty">${pdQty}</span>
      <button class="qty-btn" onclick="pdChgQ(1)">+</button>
    </div>
    <button class="pd-add-btn" id="pd-add" onclick="addPD()">Agregar · ${fmt(pdTotal())}</button>`;
}
function toggleG(id){
  const g=GARNISHES_MEAL.find(x=>x.id===id); if(!g) return;
  const i=pdSG.findIndex(x=>x.id===id);
  if(i>=0)pdSG.splice(i,1); else if(pdSG.length<3)pdSG.push(g);
  pdCmt=document.getElementById('pd-cmt')?.value||''; renderPD();
}
function toggleD(id){
  const d=DRINKS.find(x=>x.id===id); if(!d) return;
  pdSD=(pdSD&&pdSD.id===id)?null:d;
  pdCmt=document.getElementById('pd-cmt')?.value||''; renderPD();
}
function pdChgQ(delta){
  pdQty=Math.max(1,pdQty+delta);
  pdCmt=document.getElementById('pd-cmt')?.value||'';
  document.getElementById('pd-qty').textContent=pdQty;
  document.getElementById('pd-add').textContent='Agregar · '+fmt(pdTotal());
}
function addPD(){
  pdCmt=document.getElementById('pd-cmt')?.value||'';
  cart.push({uid:uid(),item:pdItem,qty:pdQty,garnishes:[...pdSG],drink:pdSD,comment:pdCmt});
  closePDModal(); updateHeader(); renderMain();
  const bar=document.getElementById('cart-bar');
  bar.style.background='var(--green-dk)';setTimeout(()=>bar.style.background='',600);
}

// ═══ CART / CHECKOUT ═══
function openCart(){step='cart';renderCart();document.getElementById('cart-ov').classList.add('open');}
function closeCartModal(){document.getElementById('cart-ov').classList.remove('open');}
function closeCartOv(e){if(e.target===document.getElementById('cart-ov'))closeCartModal();}

// Step numbers for steps indicator (excluding 'cart')
const STEPS_META={
  service:{n:1,label:'Servicio'},
  contact:{n:2,label:'Contacto'},
  address:{n:3,label:'Dirección'},
  summary:{n:4,label:'Resumen'},
  almost:{n:5,label:'Enviar'},
};

function stepIndicator(currentStep){
  const stepsOrder = svc==='domicilio'
    ? ['service','contact','address','summary','almost']
    : ['service','contact','summary','almost'];
  const idx=stepsOrder.indexOf(currentStep);
  let h='<div class="steps">';
  stepsOrder.forEach((s,i)=>{
    const meta=STEPS_META[s];
    const state = i<idx?'done':i===idx?'active':'';
    h+=`<div class="step-dot ${state}">${i<idx?'✓':(i+1)}</div>`;
    if(i<stepsOrder.length-1) h+=`<div class="step-line ${i<idx?'done':''}"></div>`;
  });
  h+='</div>';
  return h;
}

function renderCart(){
  const el=document.getElementById('cart-content');
  if(step==='success'){renderSuccess(el);return;}
  if(step==='almost'){renderAlmost(el);return;}
  if(step==='summary'){renderSummary(el);return;}
  if(step==='address'){renderAddress(el);return;}
  if(step==='contact'){renderContact(el);return;}
  if(step==='service'){renderService(el);return;}
  // CART
  if(!cart.length){
    el.innerHTML=`<div class="s-title">Tu carrito</div>
    <div class="empty-cart"><div style="font-size:50px;margin-bottom:12px;">🛒</div><p>Tu carrito está vacío.<br>¡Agrega algo delicioso!</p></div>`;
    return;
  }
  let h=`<div class="s-title">Tu carrito</div>`;
  for(const e of cart){
    const gTxt=e.garnishes.length?e.garnishes.map(g=>g.name).join(', '):'';
    const dTxt=e.drink?e.drink.name:'';
    const xtra=[gTxt,dTxt].filter(Boolean).join(' · ');
    const lt=(e.item.price+e.garnishes.reduce((s,g)=>s+g.price,0)+(e.drink?e.drink.price:0))*e.qty;
    h+=`<div class="ci-row">
      <div class="ci-img"><img src="${e.item.img}" alt="${e.item.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&q=80'"/></div>
      <div class="ci-info">
        <div class="ci-name">${e.item.name}</div>
        ${xtra?`<div class="ci-extras">+ ${xtra}</div>`:''}
        ${e.comment?`<div class="ci-comment">"${e.comment}"</div>`:''}
        <div class="ci-price">${fmt(lt)}</div>
      </div>
      <div class="ci-ctrl">
        <button class="ci-qbtn" onclick="ciChg('${e.uid}',-1)">−</button>
        <span class="ci-qnum">${e.qty}</span>
        <button class="ci-qbtn" onclick="ciChg('${e.uid}',1)">+</button>
        <button class="ci-del" onclick="ciDel('${e.uid}')">🗑</button>
      </div>
    </div>`;
  }
  const total=cartTotal();
  h+=`<div class="sum-box">
    <div class="sum-row"><span>Subtotal (${cartCount()} artículos)</span><span>${fmt(total)}</span></div>
    <div class="sum-row total"><span>Total</span><span>${fmt(total)}</span></div>
  </div>
  <button class="btn-primary" onclick="step='service';renderCart()">Continuar →</button>`;
  el.innerHTML=h;
}

function ciChg(uid,delta){const e=cart.find(x=>x.uid===uid);if(!e)return;e.qty=Math.max(1,e.qty+delta);updateHeader();renderMain();renderCart();}
function ciDel(uid){cart=cart.filter(x=>x.uid!==uid);updateHeader();renderMain();renderCart();}

function renderService(el){
  el.innerHTML=`${stepIndicator('service')}
  <div class="s-title">¿Cómo lo deseas?</div>
  <div class="svc-grid">
    <button class="svc-btn ${svc==='local'?'sel':''}" onclick="selSvc('local')"><div class="svc-icon">🍽️</div><div class="svc-label">En el local</div></button>
    <button class="svc-btn ${svc==='llevar'?'sel':''}" onclick="selSvc('llevar')"><div class="svc-icon">🛍️</div><div class="svc-label">Para llevar</div></button>
    <button class="svc-btn ${svc==='domicilio'?'sel':''}" onclick="selSvc('domicilio')"><div class="svc-icon">🏠</div><div class="svc-label">A domicilio</div></button>
  </div>
  <div class="sum-box"><div class="sum-row total"><span>Total</span><span>${fmt(cartTotal())}</span></div></div>
  <button class="btn-primary" onclick="step='contact';renderCart()" ${!svc?'disabled':''}>Continuar →</button>
  <button class="btn-back" onclick="step='cart';renderCart()">← Volver al carrito</button>`;
}
function selSvc(v){svc=v;renderCart();}

function renderContact(el){
  const copts=COUNTRIES.map((c,i)=>`<option value="${i}" ${i===contactCountryIdx?'selected':''}>${c.flag} ${c.name} (${c.code})</option>`).join('');
  el.innerHTML=`${stepIndicator('contact')}
  <div class="s-title">Agrega tu nombre y teléfono</div>
  <div class="f-group">
    <label class="f-label">Nombre:</label>
    <input class="f-input" id="fn" type="text" placeholder="Tu nombre completo" value="${contactName}"/>
  </div>
  <div class="f-group">
    <label class="f-label">Teléfono</label>
    <div class="f-row">
      <select class="country-sel" id="fc">${copts}</select>
      <input class="f-input" id="fp" type="tel" placeholder="000-000-0000" value="${contactPhone}" style="flex:1;"/>
    </div>
  </div>
  <button class="btn-primary" onclick="saveContact()">Continuar →</button>
  <button class="btn-back" onclick="step='service';renderCart()">← Volver</button>`;
}
function saveContact(){
  contactName=document.getElementById('fn')?.value?.trim();
  contactPhone=document.getElementById('fp')?.value?.trim();
  contactCountryIdx=parseInt(document.getElementById('fc')?.value||'0');
  if(!contactName||!contactPhone){alert('Por favor completa nombre y teléfono.');return;}
  step=svc==='domicilio'?'address':'summary';
  renderCart();
}

function renderAddress(el){
  el.innerHTML=`${stepIndicator('address')}
  <div class="s-title">Agrega tu dirección</div>
  <div class="f-group">
    <label class="f-label">Calle / Avenida</label>
    <input class="f-input" id="fa-calle" placeholder="Ej: Calle Dr. Héctor B. Jiménez" value="${addrCalle}"/>
  </div>
  <div class="f-group">
    <label class="f-label">Número</label>
    <input class="f-input" id="fa-num" placeholder="Ej: #33" value="${addrNum}"/>
  </div>
  <div class="f-group">
    <label class="f-label">Complemento <span>(opcional)</span></label>
    <input class="f-input" id="fa-comp" placeholder="Apto, piso, edificio..." value="${addrComp}"/>
  </div>
  <div class="f-group">
    <label class="f-label">Referencia <span>(opcional)</span></label>
    <input class="f-input" id="fa-ref" placeholder="Cerca de, frente a..." value="${addrRef}"/>
  </div>
  <button class="btn-primary" onclick="saveAddress()">Confirmar dirección →</button>
  <button class="btn-back" onclick="step='contact';renderCart()">← Volver</button>`;
}
function saveAddress(){
  addrCalle=document.getElementById('fa-calle')?.value?.trim();
  addrNum=document.getElementById('fa-num')?.value?.trim();
  addrComp=document.getElementById('fa-comp')?.value?.trim();
  addrRef=document.getElementById('fa-ref')?.value?.trim();
  if(!addrCalle||!addrNum){alert('Por favor completa calle y número.');return;}
  step='summary'; renderCart();
}

function renderSummary(el){
  const total=cartTotal();
  const country=COUNTRIES[contactCountryIdx]||COUNTRIES[0];
  const addrTxt=svc==='domicilio'?[addrCalle,addrNum,addrComp,addrRef].filter(Boolean).join(', '):'';
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const tipAmt=Math.round(total*tipPct/100);
  const grandTotal=total+tipAmt;

  const tipBtns=['no','5','10','otro'].map(t=>`<button class="tip-btn ${tipMode===t?'sel':''}" onclick="setTip('${t}')">${t==='no'?'No, gracias':t==='otro'?'Otro':t+'%'}</button>`).join('');

  const payBtns=[
    {k:'Efectivo',icon:'💵'},
    {k:'Transferencia',icon:'📱'},
    {k:'Tarjeta',icon:'💳'},
  ].map(p=>`<button class="pay-btn ${payMethod===p.k?'sel':''}" onclick="setPayMethod('${p.k}')"><div class="pay-icon">${p.icon}</div><div>${p.k}</div></button>`).join('');

  const change=payMethod==='Efectivo'&&parseFloat(payAmount)>0?Math.max(0,parseFloat(payAmount)-grandTotal):null;

  el.innerHTML=`${stepIndicator('summary')}
  <div class="s-title">Resumen de tu pedido</div>

  <div class="datos-card">
    <div class="datos-card-hdr">
      <div class="datos-card-title">Mis datos</div>
      <button class="datos-change" onclick="step='contact';renderCart()">✏️ Cambiar</button>
    </div>
    <div class="datos-row">👤 Nombre: ${contactName}</div>
    <div class="datos-row">📞 Teléfono: ${country.code} ${contactPhone}</div>
    ${addrTxt?`<div class="datos-row">📍 Dirección: ${addrTxt}</div>`:''}
    <div class="datos-note">🔒 Por seguridad, ocultamos parte de tus datos en el mensaje</div>
  </div>

  <div class="sum-box" style="margin-bottom:14px;">
    <div class="sum-row"><span>Subtotal (${cartCount()} productos)</span><span>${fmt(total)}</span></div>
    ${tipAmt>0?`<div class="sum-row"><span>Propina (${tipPct}%)</span><span>${fmt(tipAmt)}</span></div>`:''}
    <div class="sum-row"><span>Entrega</span><span style="color:var(--green);font-weight:600;">Por definir</span></div>
    <div class="sum-row total"><span>Total</span><span>${fmt(grandTotal)}</span></div>
  </div>

  <div class="f-group">
    <label class="f-label">Agregar comentario general <span>(opcional)</span></label>
    <textarea class="f-input pd-textarea" id="ord-cmt" rows="2" placeholder="Ej: Tocar el timbre, dejar en portería...">${orderComment}</textarea>
  </div>

  <div class="f-group">
    <label class="f-label">Propina</label>
    <div class="tip-grid">
      ${tipBtns}
      ${tipMode==='otro'?`<input class="tip-input" id="tip-val" type="number" placeholder="%" value="${tipCustom}" oninput="tipCustom=this.value;renderCart()" min="0" max="100"/>`:''}
    </div>
  </div>

  <div class="f-group">
    <label class="f-label">Método de pago <span style="color:var(--g400);font-size:11px;">· El pago se coordina luego</span></label>
    <div class="pay-opts">${payBtns}</div>
    ${payMethod==='Efectivo'?`
    <input class="f-input" id="pay-amt" type="number" placeholder="Monto con el que va a pagar (RD$)" value="${payAmount}"
      oninput="payAmount=this.value;document.getElementById('change-info').innerHTML=calcChange()" style="margin-top:8px;"/>
    <div id="change-info" style="font-size:12px;color:var(--g600);margin-top:6px;">${calcChange()}</div>`:''}
    ${payMethod==='Transferencia'?`<div style="font-size:12px;color:var(--g600);margin-top:6px;padding:10px;background:var(--g100);border-radius:8px;">📲 Te enviaremos los datos de transferencia por WhatsApp.</div>`:''}
  </div>

  <button class="btn-primary" onclick="saveSummaryAndContinue()" ${!payMethod?'disabled':''}>
    Siguiente →
  </button>
  <button class="btn-back" onclick="step='${svc==='domicilio'?'address':'contact'}';renderCart()">← Volver</button>`;
}

function calcChange(){
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const grand=total+Math.round(total*tipPct/100);
  const amt=parseFloat(payAmount)||0;
  if(!amt) return '';
  if(amt<grand) return `<span style="color:#ef4444;">⚠️ Monto insuficiente (faltan RD$ ${(grand-amt).toLocaleString()})</span>`;
  return `💵 Vuelto: <strong>RD$ ${(amt-grand).toLocaleString()}</strong>`;
}

function setTip(t){
  orderComment=document.getElementById('ord-cmt')?.value||'';
  payAmount=document.getElementById('pay-amt')?.value||'';
  tipMode=t; renderCart();
}
function setPayMethod(p){
  orderComment=document.getElementById('ord-cmt')?.value||'';
  tipCustom=document.getElementById('tip-val')?.value||tipCustom;
  payAmount=''; payMethod=p; renderCart();
}
function saveSummaryAndContinue(){
  orderComment=document.getElementById('ord-cmt')?.value||'';
  tipCustom=document.getElementById('tip-val')?.value||tipCustom;
  payAmount=document.getElementById('pay-amt')?.value||'';
  if(!payMethod){alert('Por favor selecciona un método de pago.');return;}
  orderNum=genOrderNum();
  step='almost'; renderCart();
}

function buildWAMsg(){
  const country=COUNTRIES[contactCountryIdx]||COUNTRIES[0];
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const tipAmt=Math.round(total*tipPct/100);
  const grand=total+tipAmt;
  const dt=now();
  const svcNames={local:'Local',llevar:'Para llevar',domicilio:'Domicilio'};
  const addrLine=svc==='domicilio'?[addrCalle,addrNum,addrComp,addrRef].filter(Boolean).join(', '):'';

  let msg=`Hola! Vengo de La Placita Del Prado Oriental\n`;
  msg+=`${orderNum}\n`;
  msg+=`Fecha: ${dt.date}  Hora: ${dt.time}\n\n`;
  msg+=`*Tipo de servicio: ${svcNames[svc]}*\n\n`;
  msg+=`Nombre: ${contactName}\n`;
  msg+=`Telefono: ${country.code} ${contactPhone}\n`;
  if(addrLine) msg+=`Direccion: ${addrLine}\n`;
  if(orderComment) msg+=`Comentario: ${orderComment}\n`;
  msg+=`\n*-- PRODUCTOS --*\n`;
  for(const e of cart){
    const lt=(e.item.price+e.garnishes.reduce((s,g)=>s+g.price,0)+(e.drink?e.drink.price:0))*e.qty;
    msg+=`*X${e.qty} ${e.item.name}  RD$ ${lt.toLocaleString()}*\n`;
    msg+=`  ${e.qty} Unidad(es)  RD$ ${(e.item.price*e.qty).toLocaleString()}\n`;
    for(const g of e.garnishes) msg+=`  +${e.qty} ${g.name}${g.price>0?' RD$ '+(g.price*e.qty).toLocaleString():' (incluido)'}\n`;
    if(e.drink) msg+=`  +${e.qty} ${e.drink.name} RD$ ${(e.drink.price*e.qty).toLocaleString()}\n`;
    if(e.comment) msg+=`  Nota: ${e.comment}\n`;
    msg+='\n';
  }
  msg+=`Subtotal: RD$ ${total.toLocaleString()}\n`;
  if(tipAmt>0) msg+=`Propina (${tipPct}%): RD$ ${tipAmt.toLocaleString()}\n`;
  msg+=`Entrega: Por definir\n`;
  msg+=`*Total: RD$ ${grand.toLocaleString()}*\n\n`;
  msg+=`*-- PAGO --*\n`;
  msg+=`Estado del pago: No pagado\n`;
  msg+=`*Total a pagar: RD$ ${grand.toLocaleString()}*\n`;
  if(payMethod==='Efectivo'){
    const amt=parseFloat(payAmount)||grand;
    const change=Math.max(0,amt-grand);
    msg+=`Efectivo RD$ ${grand} (monto recibido RD$ ${amt}, vuelto RD$ ${change})\n`;
  } else {
    msg+=`${payMethod}\n`;
  }
  msg+=`\nCosto adicional de envio segun ubicacion\n\n`;
  msg+=`Por favor confirmar recibo de este pedido. Gracias!`;
  return msg;
}

function renderAlmost(el){
  el.innerHTML=`${stepIndicator('almost')}
  <div class="almost-wrap">
    <div class="almost-title">Casi terminado...</div>
    <div class="almost-sub">Tu pedido está listo. Solo falta enviarlo por WhatsApp para que podamos atenderte.</div>
    <div class="action-box">
      <div class="action-label">⚡ ACCIÓN NECESARIA:</div>
      <button class="wa-btn" onclick="sendWA()">
        <span class="wa-icon">💬</span> Enviar por WhatsApp
      </button>
    </div>
    <div style="font-size:12px;color:var(--g400);line-height:1.6;">
      Se abrirá WhatsApp con el mensaje completo ya redactado.<br>
      Solo presiona <strong>Enviar</strong> y listo 🚀
    </div>
  </div>
  <div class="s-inner" style="padding-top:0;">
    <button class="btn-back" onclick="step='summary';renderCart()">← Volver al resumen</button>
  </div>`;
}

function sendWA(){
  const msg=buildWAMsg();
  // encodeURIComponent handles UTF-8 correctly for emojis and special chars
  const url='https://wa.me/18092366821?text='+encodeURIComponent(msg);
  window.open(url,'_blank');
  setTimeout(()=>{step='success';renderCart();},800);
}

function renderSuccess(el){
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const grand=total+Math.round(total*tipPct/100);
  const rows=cart.map(e=>{
    const lt=(e.item.price+e.garnishes.reduce((s,g)=>s+g.price,0)+(e.drink?e.drink.price:0))*e.qty;
    return `<div class="suc-row"><span><img class="suc-thumb" src="${e.item.img}" alt="${e.item.name}" onerror="this.style.display='none'"/> ${e.item.name} x${e.qty}</span><span>${fmt(lt)}</span></div>`;
  }).join('');
  const svcNames={local:'🍽️ En el local',llevar:'🛍️ Para llevar',domicilio:'🏠 A domicilio'};

  el.innerHTML=`<div class="success-wrap">
    <div class="success-icon">✅</div>
    <div class="order-num">${orderNum}</div>
    <div class="success-title">Recibimos su pedido</div>
    <div class="success-msg">Estamos preparando tu orden. Te contactaremos al<br><strong>(809) 236-6821</strong></div>
    <div class="success-box">
      <div class="sbox-title">Resumen de cuenta · ${cartCount()} Producto(s)</div>
      ${rows}
      <div class="suc-row" style="font-weight:700;border-top:1px solid #eee;margin-top:8px;padding-top:8px;"><span>Total</span><span>${fmt(grand)}</span></div>
      <div class="suc-row"><span>Servicio</span><span>${svcNames[svc]||''}</span></div>
      <div class="suc-row"><span>Estado del pago</span><span style="background:#fef9c3;padding:2px 8px;border-radius:20px;font-size:12px;font-weight:600;">No pagado</span></div>
      <div class="suc-row"><span>Pago</span><span>${payMethod}</span></div>
    </div>
    <button class="wa-btn" onclick="resendWA()" style="margin-bottom:10px;">💬 Consultar sobre mi pedido</button>
    <button class="new-order-btn" onclick="resetOrder()">🍽 Hacer otro pedido</button>
  </div>`;

  cart=[]; updateHeader(); renderMain();
}

function resendWA(){
  const msg=`Por favor, quisiera información sobre el avance de mi pedido Nº ${orderNum}. Gracias.`;
  window.open('https://wa.me/18092366821?text='+encodeURIComponent(msg),'_blank');
}

function resetOrder(){
  cart=[]; svc=''; contactName=''; contactPhone=''; contactCountryIdx=0;
  addrCalle=''; addrNum=''; addrComp=''; addrRef='';
  tipMode='no'; tipCustom=''; orderComment=''; payMethod=''; payAmount=''; orderNum='';
  step='cart'; closeCartModal(); updateHeader(); renderMain();
}

// ═══ INIT ═══
renderTabs(); renderMain();
