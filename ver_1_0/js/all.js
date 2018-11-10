var ten_danh_muc_sp = ["Điện thoại", "Laptop", "Máy ảnh", "Máy tính bảng", "Phụ kiện"];

function san_pham(masp, matl, tensp, gia, hinh) {
    this.masp = masp;
    this.matl = matl;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
}

var phone = new Array();
for (var i = 0; i < 55; i++) {
    phone[i] = new san_pham(
        i,
        0,
        'Điện thoại ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/phone/phone_' + (i + 1) + '.jpg'
    );
}
var laptop = new Array();
for (var i = 0; i < 55; i++) {
    laptop[i] = new san_pham(
        i,
        1,
        'Laptop ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/laptop/laptop_' + (i + 1) + '.jpg'
    );
}
var camera = new Array();
for (var i = 0; i < 55; i++) {
    camera[i] = new san_pham(
        i,
        2,
        'Máy ảnh ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/camera/camera_' + (i + 1) + '.jpg'
    );
}
var pad = new Array();
for (var i = 0; i < 55; i++) {
    pad[i] = new san_pham(
        i,
        3,
        'Máy tính bảng ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/pad/pad_' + (i + 1) + '.jpg'
    );
}
var phu_kien = new Array();
for (var i = 0; i < 55; i++) {
    phu_kien[i] = new san_pham(
        i,
        4,
        'Phụ kiện ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/phu-kien/phu-kien_' + (i + 1) + '.jpg'
    );
}
//var list_danh_muc = [phone,camera,phu_kien,pad,laptop];
var list_danh_muc = [
    phone,
    laptop,
    camera,
    pad,
    phu_kien
];
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
    for (var i = 0; i < 8; i++) {
        list_sp.innerHTML += '<div class="product-box">\
        <a class="box" href="thong_tin_sp.html?' + i + '&0">\
          <div class="hinh-sp">\
            <div style="background-image: url(' + phone[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + phone[i].tensp + '</p>\
          <p class="gia-tien">' + phone[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn"  value="' + i + '&0" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
        list_sp_2.innerHTML += '<div class="product-box">\
        <a class="box" href="thong_tin_sp.html?' + i + '&4">\
          <div class="hinh-sp">\
            <div style="background-image: url(' + phu_kien[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + phu_kien[i].tensp + '</p>\
          <p class="gia-tien">' + phu_kien[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn" value="' + i + '&1" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
    var sp = list_danh_muc[code[0]];
    var header = document.getElementsByClassName('khung_sp_header');
    var list_sp = document.getElementsByClassName('list_sp');
    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_luong = 0,
        so_trang = 1;
    if (code[1] >= 12) {
        go_to_content();
    }
    header[1].className += ' hidden';
    list_sp[1].className += ' hidden';
    document.getElementsByClassName('small_txt')[0].innerHTML = 'ĐIỆN THOẠI';
    document.getElementsByClassName('big_txt')[0].innerHTML = 'THE BEST PHONE';
    for (var i = parseFloat(code[1]); i < 55 && so_luong < 12; i++) {
        so_luong++;
        list_sp[0].innerHTML += '<div class="product-box">\
                      <a class="box" href="thong_tin_sp.html?' + i + '&' + code[0] + '">\
                        <div class="hinh-sp">\
                          <div style="background-image: url(' + sp[i].hinh + ')" class="hinh"></div>\
                        </div>\
                        <p class="ten-sp">' + sp[i].tensp + '</p>\
                        <p class="gia-tien">' + sp[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                    </div>';
    }
    so_trang = Math.ceil(55 / 12);
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
    quaylai.onclick = function () {
        tbdn.style.display = 'none';
    }
    dangnhap.onclick = function () {
        window.location = 'login.html';
    }
};

function click_add_to_cart() {
    var them = document.getElementsByClassName('them');
    for (var i = 0; i < them.length; i++) {
        them[i].addEventListener('click', function () {
            var info = this.value.split('&');
            var obj = {
                danh_muc: info[1],
                ma_sp: info[0]
            };
            localStorage.setItem("box_" + localStorage.length, JSON.stringify(obj));
            //alert('Đã Thêm');
            this.className = 'them them_fade';
        });
    }
}

function load_gio_hang() {
    var clear = document.getElementsByClassName('clear_all_cart')[0];
    if (localStorage.length <= 0) {
        clear.style.display = 'none';
    } else {
        clear.style.display = 'inline-block';
    }
    clear.onclick = function () {
        localStorage.clear();
        window.location = 'gio_hang.html';
    }
    var lclength = localStorage.length;
    for (var i = 0; i < lclength; i++) {
        var box_index = "box_" + i;
        if (localStorage.getItem(box_index)) {
            var box = JSON.parse(localStorage.getItem(box_index));
            //var dm = ma_danh_muc[box.danh_muc];
            var sp = list_danh_muc[box.danh_muc];
            var key_for_url = box.ma_sp + '&' + box.danh_muc;
            var list_sp = document.getElementsByClassName('list_sp')[0];
            var masp = parseInt(box.ma_sp);
            list_sp.innerHTML += '\
                <div class="cart-item" id="' + box_index + '">\
                    <div class="cart-item-left">\
                        <div  style="background-image: url(' + sp[masp].hinh + ')" class="cart-img" ></div>\
                        <a href="thong_tin_sp.html?' + key_for_url + '" class="cart-heading">' + sp[masp].tensp + '</a><br>\
                        <p class="cart-brand">Thế giới ' + ten_danh_muc_sp[sp[masp].matl] + '</p>\
                        <div class="cart-btn">\
                            <span title="Xóa sản phẩm khỏi giỏ hàng" data-delete="' + box_index + '" class="delete-cart" id=""></span>\
                            <span onclick="alert(\'Bạn đã thích 1 sản phẩm\')" title="I LOVE IT <3" id="heart-cart"></span>\
                        </div>\
                    </div>\
                    <div class="cart-item-right">\
                        <form action="">\
                            <input value="1" type="text" name="" id="numbers_of_cart_item"><br>\
                            <input onclick="alert(\'T ko làm cái này\')" type="button" name="" value="OK">\
                        </form>\
                    </div>\
                    <p class="gia_tien" style="font-size:18px;color:rgb(255, 99, 0);margin:0;padding-top:5px">' + sp[masp].gia + '.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(124, 124, 124);margin:0;padding-top:10px;\
        text-decoration:line-through">500.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(79, 79, 79);margin:0;padding-top:10px; ">-90%</p>\
                </div>'
        } else {
            lclength++;
            console.log('else run');
        }
    }

}


function xac_nhan(e) {
    if (confirm('Xác nhận thêm')) {
        e.className = 'them';
        click_add_to_cart();
        e.setAttribute('onclick', '');
        e.click();
        e.style.display = 'none';
    }
}

function reload() {
    location.reload();
}

function xac_nhan_gio_hang() {
    if (localStorage.length > 0) {
        localStorage.clear();
        alert('Thành công!\nCảm ơn bạn đã mua hàng của chúng tôi');
        location.reload();
    } else {
        alert('Giỏ hàng rỗng');
    }
}

function click_delete_cart() {
    var delete_cart = document.getElementsByClassName('delete-cart');
    for (var i = 0; i < delete_cart.length; i++) {
        delete_cart[i].addEventListener('click', function () {
            if (confirm('Xác nhận xóa')) {
                var key = this.getAttribute('data-delete');
                var cart = document.getElementById(key);
                localStorage.removeItem(key);
                cart.className = 'cart-item cart-item-hide';
                document.getElementsByClassName('refresh_cart')[0].style.display = 'inline';
                //setTimeout(reload, 300); //tắt - cảm giác mượt hơn :v
            }
        });
    }
}

function url_chi_tiet_sp() {
    var key = window.location.toString().split('?')[1];
    var code = key.split('&');
    var dm = code[1];
    var ma = parseInt(code[0]);
    var hinh = document.getElementsByClassName('ttsp_hinh');
    var ten = document.getElementsByClassName('ten_sp')[0];
    for (var i = 0; i < hinh.length; i++) {

        hinh[i].setAttribute('style', 'background-image: url(image/' + ma_danh_muc[dm] + '/' + ma_danh_muc[dm] + '_' + (ma + 1) + '.jpg)');
    }
    ten.innerHTML = ten_danh_muc_sp[dm] + ' ' + (ma + 1);
}


function tinh_tong_tien() {
    var so_sp = localStorage.length;
    var gia_tien = document.getElementsByClassName('gia_tien');
    var tong_tien = document.getElementsByClassName('tong_tien');
    var sum = 0;
    for (var i = 0; i < gia_tien.length; i++) {
        sum += parseInt(gia_tien[i].innerHTML);
    }
    console.log(sum);
    if (so_sp > 0) {
        tong_tien[0].innerHTML = sum + '.000.000đ';
        tong_tien[1].innerHTML = sum + '.000.000đ';
    }
    document.getElementById('dem_sp').innerHTML = 'Tạm tính (' + so_sp + ' sản phẩm):';
}



function set_value_ttsp_them() {
    var them = document.getElementsByClassName('ttsp_them')[0];
    them.setAttribute('value', window.location.toString().split('?')[1]);
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
    tinh_tong_tien();
}

function thong_tin_sp() {
    url_chi_tiet_sp();
    slide_show();
    fixedElement();
    create_left_menu();
    set_value_ttsp_them();
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
