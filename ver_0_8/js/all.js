//chuyển slide banner
function slide_show() {
    var so_slide = 0;
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName('dot');
    showSlides();

    function showSlides() {
        var i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dot[i].className = 'dot';
        }
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

// fixed nav và left_menu khi cuộn trang
function fixedElement() {
    var html = document.documentElement;
    var l_menu = document.getElementsByClassName('left_menu')[0];
    var nav = document.getElementsByClassName('nav')[0];
    window.onscroll = function() {
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
    for (var i = 0; i < 8; i++) {
        list_sp.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          <div class="hinh-sp">\
            <div style="background-image: url(image/phone/phone_' + (i + 1) + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">Iphone XS - ' + i + 1 + '</p>\
          <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button value="' + i + '&0" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
        list_sp_2.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          <div class="hinh-sp">\
            <div style="background-image: url(image/laptop/laptop_' + (i + 1) + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">Laptop Asus - ' + i + 1 + '</p>\
          <p class="gia-tien">20.000.000đ<span class="gia-cu">5.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button value="' + i + '&1" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
          <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
              <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '"  style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
                  <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '"  style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
                      <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '"  style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
                          <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '"  style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                        </div>';
            }
            so_trang = Math.ceil(33 / 12);
            break;
        default:
            break;
    }
    var temp = code[1];
    for (var i = 1; i <= so_trang; i++) {
        code[1] = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<a href="index.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>';
    }


    //khóa số trang hiện tại
    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';

    //thêm số trang vào tiêu đề
    document.getElementsByClassName('big_txt')[0].innerHTML +=
        '<span style="letter-spacing:0;padding:0;margin:0;"> - PAGE - ' + (temp / 12 + 1) + '</span>';
};

//mở thông báo đăng nhập
function mo_tbdn() {
    var quaylai = document.getElementById('no');
    var dangnhap = document.getElementById('yes');
    var tbdn = document.getElementById('thong-bao-dang-nhap');
    tbdn.style.display = 'block';
    quaylai.onclick = function() {
        tbdn.style.display = 'none';
    }
    dangnhap.onclick = function() {
        window.location = 'login.html';
    }
};

function click_add_to_cart() {
    var them = document.getElementsByClassName('them');
    for (var i = 0; i < them.length; i++) {
        them[i].addEventListener('click', function() {
            var info = this.value.split('&');
            var obj = {
                danh_muc: info[1],
                ma_sp: info[0]
            };
            localStorage.setItem("box_" + localStorage.length, JSON.stringify(obj));
            alert('Đã Thêm');
        });
    }
}

function load_gio_hang() {
    var clear = document.getElementsByClassName('clear_all_cart')[0];
    if (localStorage.length <= 0) {
        clear.style.display = 'none';
    } else {
        clear.style.display = 'block';
    }
    clear.onclick = function() {
        localStorage.clear();
        window.location = 'gio_hang.html';
    }
    var lclength = localStorage.length;
    for (var i = 0; i < lclength; i++) {

        var box_index = "box_" + i;
        if (localStorage.getItem(box_index)) {
            var box = JSON.parse(localStorage.getItem(box_index));
            console.log(box_index);
            var dm;
            var list_sp = document.getElementsByClassName('list_sp')[0];
            var ma = parseInt(box.ma_sp);
            switch (box.danh_muc) {
                case "0":
                    dm = 'phone';
                    break;
                case "1":
                    dm = 'laptop';
                    break;
                case "2":
                    dm = 'camera';
                    break;
                case "3":
                    dm = 'pad';
                    break;
                case "4":
                    dm = 'phu-kien';
                    break;
                default:
                    break;
            }
            list_sp.innerHTML += '\
                <div class="cart-item" id="">\
                    <div class="cart-item-left">\
                        <img class="cart-img" src="image/' + dm + '/' + dm + '_' + (ma + 1) + '.jpg">\
                        <a href="thong-tin-sp.html" class="cart-heading">' + dm + ' 6 Plus</a><br>\
                        <p class="cart-brand">Apple</p>\
                        <div class="cart-btn">\
                            <span data-delete="' + box_index + '" class="delete-cart" id=""></span>\
                            <span id="heart-cart"></span>\
                        </div>\
                    </div>\
                    <div class="cart-item-right">\
                        <form action="">\
                            <input value="1" type="text" name="" id=""><br>\
                            <input type="button" name="" value="OK">\
                        </form>\
                    </div>\
                    <p style="font-size:18px;color:rgb(255, 99, 0);margin:0;padding-top:5px">2.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(124, 124, 124);margin:0;padding-top:10px;\
        text-decoration:line-through">20.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(79, 79, 79);margin:0;padding-top:10px; ">-90%</p>\
                </div>'
        } else {
            lclength++;
            console.log('else run');
        }
    }

}

function click_delete_cart() {
    var delete_cart = document.getElementsByClassName('delete-cart');
    for (var i = 0; i < delete_cart.length; i++) {
        delete_cart[i].addEventListener('click', function() {
            localStorage.removeItem(this.getAttribute('data-delete'));
            location.reload();
            //  load_gio_hang();
        });
    }
}
//
//chạy JS
window.addEventListener('load', click_add_to_cart);

function gio_hang() {

    slide_show();
    load_gio_hang();
    fixedElement();
    create_left_menu();
    click_delete_cart();
}

function trang_chinh() {
    var them = document.getElementsByClassName('them');
    slide_show();
    fixedElement();
    create_left_menu();
    if (window.location.href.indexOf('?') === -1) {
        create_box();
    } else {
        phan_tich_url();
    }
}
//trang đăng nhập
function login() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
}