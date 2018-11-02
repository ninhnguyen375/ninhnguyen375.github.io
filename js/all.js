(function() {
  var so_slide = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    so_slide++;
    if (so_slide > slides.length) {
      so_slide = 1
    }
    slides[so_slide - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
})();
(function() {
  var html = document.documentElement;
  var l_menu = document.getElementsByClassName('left_menu')[0];
  var nav = document.getElementsByClassName('nav')[0];
  window.onscroll = function() {
    if (html.scrollTop > 80) {
      nav.className = 'fixed_nav';
    } else {
      nav.className = 'nav';
    }
    if (html.scrollTop > 610) {
      l_menu.className = 'left_menu fixed_left_menu';
    } else {
      l_menu.className = 'left_menu';
    }
  }
  create_box();
  create_left_menu();
})();
function create_left_menu(){
  var danh_muc = ['ĐIỆN THOẠI','LAPTOP','MÁY ẢNH','MÁY TÍNH BẢNG','PHỤ KIỆN'];
  var khung = document.getElementsByClassName('list_danh_muc')[0];
  for (var i = 0; i < danh_muc.length; i++) {
    khung.innerHTML += '<a href="#">\
      <div class="item">'+danh_muc[i]+'</div>\
    </a>';
  }
}
function create_box() {
  var list_sp = document.getElementsByClassName('list_sp')[0];
  var list_sp_2 = document.getElementsByClassName('list_sp')[1];
  for (var i = 1; i <= 8; i++) {
    list_sp.innerHTML += '<div class="product-box">\
      <a class="box" href="thong-tin-sp.html">\
        <div class="hinh-sp">\
          <div style="background-image: url(image/phone/phone_' + i + '.jpg)" class="hinh"></div>\
        </div>\
        <p class="ten-sp">Iphone XS</p>\
        <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
      </a>\
      <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
    </div>';
    list_sp_2.innerHTML += '<div class="product-box">\
      <a class="box" href="thong-tin-sp.html">\
        <div class="hinh-sp">\
          <div style="background-image: url(image/phone/phone_' + (i + 8) + '.jpg)" class="hinh"></div>\
        </div>\
        <p class="ten-sp">Iphone XS</p>\
        <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
      </a>\
      <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
    </div>';
  }
}
