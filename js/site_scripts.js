
(function renderPartners(){
  const list = document.getElementById('partners');
  if (!list) return;

  const partners = [
    { src: 'images/partners/partner-bustour.png',      alt: 'Partner Bus Tours' },
    { src: 'images/partners/partner-cabinrental.png',  alt: 'Partner Cabin Rental' },
    { src: 'images/partners/partner-campingadv.png',   alt: 'Partner Camping Adventure' },
    { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
    { src: 'images/partners/partner-rentalbike.png',   alt: 'Partner Bike Rentals' },
    { src: 'images/partners/partner-tourgroup.png',    alt: 'Partner Tour Group' }
  ];

  list.innerHTML = ''; // clear any server HTML

  partners.forEach(p => {
    // Bootstrap responsive column: 1 (xs), 2 (sm), 3 (md), 6 (lg+)
    const li = document.createElement('li');
    li.className = 'col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center';

    // circle wrapper for consistent size
    const wrap = document.createElement('div');
    wrap.className = 'partner-circle d-flex align-items-center justify-content-center';

    const img = document.createElement('img');
    img.src = p.src;
    img.alt = p.alt;
    img.className = 'img-fluid partner-img'; // keep image tidy

    wrap.appendChild(img);
    li.appendChild(wrap);
    list.appendChild(li);
  });
})();


var code = '';
var getCode='';
var btnValue='';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';