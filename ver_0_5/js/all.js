//chuyển slide banner
function slide_show() {
    var so_slide = 0;
    //    var btn_arrow = document.getElementsByClassName('btn_arrow');
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName('dot');
    showSlides();

    function showSlides() {
        var i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dot[i].className = 'dot';
        }

        //        btn_arrow[0].onclick = function () {
        //            if (so_slide - 2 < 0) {
        //                show_slide_index(slides.length - 1);
        //                so_slide = slides.length - 1;
        //            } else {
        //                show_slide_index(so_slide - 2);
        //                so_slide--;
        //            }
        //        };
        //        btn_arrow[1].onclick = function () {
        //            if (so_slide + 1 > slides.length - 1) {
        //                show_slide_index(0);
        //                so_slide = 0;
        //            } else {
        //                show_slide_index(so_slide + 1);
        //                so_slide++;
        //            }
        //        };

        if (so_slide > slides.length - 1) {
            so_slide = 1;
        } else
            so_slide++;
        dot[so_slide - 1].className = 'dot dot_active';
        slides[so_slide - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds

    }


};

function show_slide_index(n) {
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName('dot');
    for (i = 0; i < 4; i++) {
        dot[i].className = 'dot';
        slides[i].style.display = "none";
    }
    slides[n].style.display = 'block';
    dot[n].className = 'dot dot_active';
}
//function click_change_slide() {
//    var btn = document.getElementsByClassName('btn_arrow');

//    btn[0].onclick = function () {
//        if (so_slide - 2 < 0) {
//           slide_show(1);
//        } else {
//            slide_show(1);
//        }
//    };
//    
//}

// fixed nav và left_menu khi cuộn trang
function fixedElement() {
    var html = document.documentElement;
    var l_menu = document.getElementsByClassName('left_menu')[0];
    var nav = document.getElementsByClassName('nav')[0];
    window.onscroll = function () {
        if (html.scrollTop > 80) {
            nav.className = 'nav fixed_nav';
        } else {
            nav.className = 'nav';
        }
        if (html.scrollTop > 680) {
            l_menu.className = 'left_menu fixed_left_menu';
        } else {
            l_menu.className = 'left_menu';
        }
    }
};



//tạo menu danh mục sản phẩm
function create_left_menu() {
    var danh_muc = ['ĐIỆN THOẠI', 'LAPTOP', 'MÁY ẢNH', 'MÁY TÍNH BẢNG', 'PHỤ KIỆN'];
    var khung = document.getElementsByClassName('list_danh_muc')[0];
    var vt = 0;
    for (var i = 0; i < danh_muc.length; i++) {
        khung.innerHTML += '<a class="use_for_login" href="index.html?' + i + '&' + vt + '">\
      <div class="danh_muc_item">' + danh_muc[i] + '</div>\
    </a>';
    }
};



//Thêm sản phẩm cho trang chính
function create_box() {
    var list_sp = document.getElementsByClassName('list_sp')[0];
    var list_sp_2 = document.getElementsByClassName('list_sp')[1];
    for (var i = 1; i <= 8; i++) {
        list_sp.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          <div class="hinh-sp">\
            <div style="background-image: url(image/phone/phone_' + i + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">Iphone XS - ' + i + '</p>\
          <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
        list_sp_2.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          <div class="hinh-sp">\
            <div style="background-image: url(image/laptop/laptop_' + (i) + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">Laptop Asus - ' + (i) + '</p>\
          <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
    }

};

//cuộn trang xuống phần nội dung
function go_to_content() {
    var html = document.documentElement;
    html.scrollTop = '583';
    //document.getElementsByClassName('khung_sp')[0].scrollIntoView(true);
}

// phân tích url theo ?{'số thứ tự danh mục'}&{'vị trí bắt đầu load sản phẩm'}
function phan_tich_url() {
    var default_create = 0;
    var code = window.location.href.split('?')[1].split('&');
    //code[0] là thứ tự danh mục
    //code[1] là vị trí bắt đầu load sản phẩm

    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_luong = 0,
        so_trang = 1;



    if (code[1] >= 12) {
        go_to_content();
    }
    switch (code[0]) {
        case '0':

            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            document.getElementsByClassName('small_txt')[0].innerHTML = 'ĐIỆN THOẠI';
            document.getElementsByClassName('big_txt')[0].innerHTML = 'THE BEST PHONE';
            for (var i = parseFloat(code[1]); i < 55 && so_luong < 12; i++) {
                so_luong++;
                list_sp[0].innerHTML += '<div class="product-box">\
          <a class="box" href="thong-tin-sp.html">\
            <div class="hinh-sp">\
              <div style="background-image: url(image/phone/phone_' + (i + 1) +
                    '.jpg)" class="hinh"></div>\
            </div>\
            <p class="ten-sp">Iphone XS - ' + (i + 1) +
                    '</p>\
            <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
          </a>\
          <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
        </div>';
            }
            so_trang = Math.ceil(55 / 12);
            break;
        case '1':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            document.getElementsByClassName('small_txt')[0].innerHTML = 'LAPTOP';
            document.getElementsByClassName('big_txt')[0].innerHTML = 'THE BEST LAPTOP';
            for (var i = parseFloat(code[1]); i < 30 && so_luong < 12; i++) {
                so_luong++;
                list_sp[0].innerHTML += '<div class="product-box">\
              <a class="box" href="thong-tin-sp.html">\
                <div class="hinh-sp">\
                  <div style="background-image: url(image/laptop/laptop_' + (i +
                        1) + '.jpg)" class="hinh"></div>\
                </div>\
                <p class="ten-sp">laptop - ' + (i + 1) +
                    '</p>\
                <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
              </a>\
              <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
            </div>';
            }
            so_trang = Math.ceil(33 / 12);
            break;
        case '2':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            document.getElementsByClassName('small_txt')[0].innerHTML = 'CAMERA';
            document.getElementsByClassName('big_txt')[0].innerHTML = 'THE BEST CAMERA';
            for (var i = parseFloat(code[1]); i < 30 && so_luong < 12; i++) {
                so_luong++;
                list_sp[0].innerHTML +=
                    '<div class="product-box">\
                  <a class="box" href="thong-tin-sp.html">\
                    <div class="hinh-sp">\
                      <div style="background-image: url(image/camera/camera_' + (i + 1) +
                    '.jpg)" class="hinh"></div>\
                    </div>\
                    <p class="ten-sp">Camera - ' + (i + 1) +
                    '</p>\
                    <p class="gia-tien">20.000.000đ<span class="gia-cu">10.000.000đ</span></p>\
                  </a>\
                  <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                </div>';
            }
            so_trang = Math.ceil(33 / 12);
            break;
        case '3':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            document.getElementsByClassName('small_txt')[0].innerHTML = 'MÁY TÍNH BẢNG';
            document.getElementsByClassName('big_txt')[0].innerHTML = 'THE BEST PAD';
            for (var i = parseFloat(code[1]); i < 30 && so_luong < 12; i++) {
                so_luong++;
                list_sp[0].innerHTML +=
                    '<div class="product-box">\
                      <a class="box" href="thong-tin-sp.html">\
                        <div class="hinh-sp">\
                          <div style="background-image: url(image/pad/pad_' + (i +
                        1) + '.jpg)" class="hinh"></div>\
                        </div>\
                        <p class="ten-sp">Máy tính bảng - ' + (i + 1) +
                    '</p>\
                        <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                    </div>';
            }
            so_trang = Math.ceil(33 / 12);
            break;
        case '4':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            document.getElementsByClassName('small_txt')[0].innerHTML = 'PHỤ KIỆN';
            document.getElementsByClassName('big_txt')[0].innerHTML = 'BEST ACCESSORIES';
            for (var i = parseFloat(code[1]); i < 30 && so_luong < 12; i++) {
                so_luong++;
                list_sp[0].innerHTML +=
                    '<div class="product-box">\
                          <a class="box" href="thong-tin-sp.html">\
                            <div class="hinh-sp">\
                              <div style="background-image: url(image/phu-kien/phu-kien_' +
                    (i + 1) + '.jpg)" class="hinh"></div>\
                            </div>\
                            <p class="ten-sp">Phụ kiện - ' + (i + 1) +
                    '</p>\
                            <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
                          </a>\
                          <div class="them-vao-gio-hang"><button style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                        </div>';
            }
            so_trang = Math.ceil(33 / 12);
            break;
        default:
            default_create = 1;
            console.log('this is the default case!');
            break;
    }
    var temp = code[1];
    for (var i = 1; i <= so_trang; i++) {
        code[1] = (i - 1) * 12;
        chuyen_trang.innerHTML += '<a href="index.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>';
    }

    //khóa số trang hiện tại

    if (default_create == 1) {
        console.log('tell');
        create_box();
    }

    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';

    //thêm số trang vào tiêu đề
    document.getElementsByClassName('big_txt')[0].innerHTML += '<span style="letter-spacing:0;padding:0;margin:0;"> - PAGE - ' + (temp / 12 + 1) + '</span>';
};

//function luot_khi_bam_so_trang(){
//    var number_page = document.getElementsByClassName('so_trang');
//    for (var i = 0; i < number_page.length; i++) {
//        number_page[i].addEventListener('click',go_to_content());
//        console.log(number_page[i]);
//    }
//};

//mở thông báo đăng nhập
function mo_tbdn(item) {
    var quaylai = document.getElementById('no');
    var dangnhap = document.getElementById('yes');
    var tbdn = document.getElementById('thong-bao-dang-nhap');
    tbdn.style.display = 'block';
    quaylai.onclick = function () {
        tbdn.style.display = 'none';
    }
    dangnhap.onclick = function () {
        window.location = 'login.html';
    }

};

//chạy JS
function trang_chinh() {
    var them = document.getElementsByClassName('them');
    slide_show();
    fixedElement();
    if (window.location.href.indexOf('?') === -1) {
        create_box();
    }
    create_left_menu();

    if (window.location.href.indexOf('?') != -1) {
        phan_tich_url();
    }
    for (var i = 0; i < them.length; i++) {
        them[i].onclick = function () {
            if (window.location.href.indexOf('account=') !== -1) {
                alert('Đã Thêm');
            }else{
                mo_tbdn();
            }
            
        }
    }
    if (window.location.href.indexOf('account=') !== -1) {
        load_account();
    }
}

function load_account() {
    var account_name = window.location.href.split('account=')[1];
    var login = document.getElementById('login');
    var dang_ky = document.getElementById('dang_ky');
    var home = document.getElementById('home');
    var logo_worldphone = document.getElementsByClassName('logo_worldphone')[0];
    var use_for_login = document.getElementsByClassName('use_for_login');
    for(var i=0;i<use_for_login.length;i++){
        use_for_login[i].setAttribute('href', 'index.html?'+i+'&0&account='+account_name);
    }
    dang_ky.innerHTML = 'ĐĂNG XUẤT';
    login.innerHTML = account_name;
    console.log(login);
    login.style.pointerEvents = 'none';
    login.style.color = 'rgb(255, 154, 0)';
    login.style.fontWeight = 'bold';
    dang_ky.setAttribute('href', 'index.html');
    home.setAttribute('href', 'index.html?6&0&account='+account_name);
    logo_worldphone.setAttribute('href', 'index.html?6&0&account='+account_name);
}

function login() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
}
