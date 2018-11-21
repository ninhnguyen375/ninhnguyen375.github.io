var ten_danh_muc_sp = ["Điện thoại", "Laptop", "Máy ảnh", "Máy tính bảng", "Phụ kiện"];
var list_tieu_de = ["THE BEST PHONE", "THE BEST LAPTOP", "THE BEST CAMERA", "THE BEST PAD", "THE ACCESSORIES"];

function san_pham(masp, matl, tensp, gia, hinh) {
    this.masp = masp;
    this.matl = matl;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
}
//khởi tạo mảng sản phẩm điện thoại
var phone = new Array();
phone[0] = new san_pham(0, 1, "Điện thoại 1", 25, "image/phone/phone_1.jpg");
phone[1] = new san_pham(1, 1, "Điện thoại 2", 72, "image/phone/phone_2.jpg");
phone[2] = new san_pham(2, 1, "Điện thoại 3", 52, "image/phone/phone_3.jpg");
phone[3] = new san_pham(3, 1, "Điện thoại 4", 10, "image/phone/phone_4.jpg");
phone[4] = new san_pham(4, 1, "Điện thoại 5", 10, "image/phone/phone_5.jpg");
phone[5] = new san_pham(5, 1, "Điện thoại 6", 35, "image/phone/phone_6.jpg");
phone[6] = new san_pham(6, 1, "Điện thoại 7", 83, "image/phone/phone_7.jpg");
phone[7] = new san_pham(7, 1, "Điện thoại 8", 38, "image/phone/phone_8.jpg");
phone[8] = new san_pham(8, 1, "Điện thoại 9", 20, "image/phone/phone_9.jpg");
phone[9] = new san_pham(9, 1, "Điện thoại 10", 46, "image/phone/phone_10.jpg");
phone[10] = new san_pham(10, 1, "Điện thoại 11", 2, "image/phone/phone_11.jpg");
phone[11] = new san_pham(11, 1, "Điện thoại 12", 34, "image/phone/phone_12.jpg");
phone[12] = new san_pham(12, 1, "Điện thoại 13", 23, "image/phone/phone_13.jpg");
phone[13] = new san_pham(13, 1, "Điện thoại 14", 23, "image/phone/phone_14.jpg");
phone[14] = new san_pham(14, 1, "Điện thoại 15", 28, "image/phone/phone_15.jpg");
phone[15] = new san_pham(15, 1, "Điện thoại 16", 36, "image/phone/phone_16.jpg");
phone[16] = new san_pham(16, 1, "Điện thoại 17", 64, "image/phone/phone_17.jpg");
phone[17] = new san_pham(17, 1, "Điện thoại 18", 23, "image/phone/phone_18.jpg");
phone[18] = new san_pham(18, 1, "Điện thoại 19", 5, "image/phone/phone_19.jpg");
phone[19] = new san_pham(19, 1, "Điện thoại 20", 82, "image/phone/phone_20.jpg");
phone[20] = new san_pham(20, 1, "Điện thoại 21", 64, "image/phone/phone_21.jpg");
phone[21] = new san_pham(21, 1, "Điện thoại 22", 39, "image/phone/phone_22.jpg");
phone[22] = new san_pham(22, 1, "Điện thoại 23", 86, "image/phone/phone_23.jpg");
phone[23] = new san_pham(23, 1, "Điện thoại 24", 36, "image/phone/phone_24.jpg");
phone[24] = new san_pham(24, 1, "Điện thoại 25", 63, "image/phone/phone_25.jpg");
phone[25] = new san_pham(25, 1, "Điện thoại 26", 14, "image/phone/phone_26.jpg");
phone[26] = new san_pham(26, 1, "Điện thoại 27", 76, "image/phone/phone_27.jpg");
phone[27] = new san_pham(27, 1, "Điện thoại 28", 89, "image/phone/phone_28.jpg");
phone[28] = new san_pham(28, 1, "Điện thoại 29", 50, "image/phone/phone_29.jpg");
phone[29] = new san_pham(29, 1, "Điện thoại 30", 66, "image/phone/phone_30.jpg");
phone[30] = new san_pham(30, 1, "Điện thoại 31", 75, "image/phone/phone_31.jpg");
phone[31] = new san_pham(31, 1, "Điện thoại 32", 39, "image/phone/phone_32.jpg");
phone[32] = new san_pham(32, 1, "Điện thoại 33", 25, "image/phone/phone_33.jpg");
phone[33] = new san_pham(33, 1, "Điện thoại 34", 16, "image/phone/phone_34.jpg");
phone[34] = new san_pham(34, 1, "Điện thoại 35", 40, "image/phone/phone_35.jpg");
phone[35] = new san_pham(35, 1, "Điện thoại 36", 53, "image/phone/phone_36.jpg");
phone[36] = new san_pham(36, 1, "Điện thoại 37", 53, "image/phone/phone_37.jpg");
phone[37] = new san_pham(37, 1, "Điện thoại 38", 69, "image/phone/phone_38.jpg");
phone[38] = new san_pham(38, 1, "Điện thoại 39", 81, "image/phone/phone_39.jpg");
phone[39] = new san_pham(39, 1, "Điện thoại 40", 81, "image/phone/phone_40.jpg");
phone[40] = new san_pham(40, 1, "Điện thoại 41", 37, "image/phone/phone_41.jpg");
phone[41] = new san_pham(41, 1, "Điện thoại 42", 82, "image/phone/phone_42.jpg");
phone[42] = new san_pham(42, 1, "Điện thoại 43", 91, "image/phone/phone_43.jpg");
phone[43] = new san_pham(43, 1, "Điện thoại 44", 89, "image/phone/phone_44.jpg");
phone[44] = new san_pham(44, 1, "Điện thoại 45", 72, "image/phone/phone_45.jpg");
phone[45] = new san_pham(45, 1, "Điện thoại 46", 36, "image/phone/phone_46.jpg");
phone[46] = new san_pham(46, 1, "Điện thoại 47", 31, "image/phone/phone_47.jpg");
phone[47] = new san_pham(47, 1, "Điện thoại 48", 19, "image/phone/phone_48.jpg");
phone[48] = new san_pham(48, 1, "Điện thoại 49", 28, "image/phone/phone_49.jpg");
phone[49] = new san_pham(49, 1, "Điện thoại 50", 47, "image/phone/phone_50.jpg");
phone[50] = new san_pham(50, 1, "Điện thoại 51", 54, "image/phone/phone_51.jpg");
phone[51] = new san_pham(51, 1, "Điện thoại 52", 8, "image/phone/phone_52.jpg");
phone[52] = new san_pham(52, 1, "Điện thoại 53", 70, "image/phone/phone_53.jpg");
phone[53] = new san_pham(53, 1, "Điện thoại 54", 23, "image/phone/phone_54.jpg");
phone[54] = new san_pham(54, 1, "Điện thoại 55", 54, "image/phone/phone_55.jpg");
// for (var i = 0; i < 55; i++) {
//     phone[i] = new san_pham(
//         i, //-------------------------------------- Mã sản phẩm
//         0, //-------------------------------------- Mã thể loại
//         'Điện thoại ' + (i + 1), //---------------- Tên sản phẩm
//         Math.floor((Math.random() * 100) + (1)), // Giá tiền
//         'image/phone/phone_' + (i + 1) + '.jpg' //- Hình sản phẩm
//     );
// }

//khởi tạo mảng sản phẩm laptop
var laptop = new Array();
laptop[0] = new san_pham(0, 1, "Laptop 1", 61, "image/laptop/laptop_1.jpg");
laptop[1] = new san_pham(1, 1, "Laptop 2", 79, "image/laptop/laptop_2.jpg");
laptop[2] = new san_pham(2, 1, "Laptop 3", 74, "image/laptop/laptop_3.jpg");
laptop[3] = new san_pham(3, 1, "Laptop 4", 58, "image/laptop/laptop_4.jpg");
laptop[4] = new san_pham(4, 1, "Laptop 5", 55, "image/laptop/laptop_5.jpg");
laptop[5] = new san_pham(5, 1, "Laptop 6", 60, "image/laptop/laptop_6.jpg");
laptop[6] = new san_pham(6, 1, "Laptop 7", 90, "image/laptop/laptop_7.jpg");
laptop[7] = new san_pham(7, 1, "Laptop 8", 62, "image/laptop/laptop_8.jpg");
laptop[8] = new san_pham(8, 1, "Laptop 9", 91, "image/laptop/laptop_9.jpg");
laptop[9] = new san_pham(9, 1, "Laptop 10", 73, "image/laptop/laptop_10.jpg");
laptop[10] = new san_pham(10, 1, "Laptop 11", 2, "image/laptop/laptop_11.jpg");
laptop[11] = new san_pham(11, 1, "Laptop 12", 71, "image/laptop/laptop_12.jpg");
laptop[12] = new san_pham(12, 1, "Laptop 13", 34, "image/laptop/laptop_13.jpg");
laptop[13] = new san_pham(13, 1, "Laptop 14", 67, "image/laptop/laptop_14.jpg");
laptop[14] = new san_pham(14, 1, "Laptop 15", 83, "image/laptop/laptop_15.jpg");
laptop[15] = new san_pham(15, 1, "Laptop 16", 82, "image/laptop/laptop_16.jpg");
laptop[16] = new san_pham(16, 1, "Laptop 17", 31, "image/laptop/laptop_17.jpg");
laptop[17] = new san_pham(17, 1, "Laptop 18", 81, "image/laptop/laptop_18.jpg");
laptop[18] = new san_pham(18, 1, "Laptop 19", 55, "image/laptop/laptop_19.jpg");
laptop[19] = new san_pham(19, 1, "Laptop 20", 43, "image/laptop/laptop_20.jpg");
laptop[20] = new san_pham(20, 1, "Laptop 21", 44, "image/laptop/laptop_21.jpg");
laptop[21] = new san_pham(21, 1, "Laptop 22", 86, "image/laptop/laptop_22.jpg");
laptop[22] = new san_pham(22, 1, "Laptop 23", 32, "image/laptop/laptop_23.jpg");
laptop[23] = new san_pham(23, 1, "Laptop 24", 20, "image/laptop/laptop_24.jpg");
laptop[24] = new san_pham(24, 1, "Laptop 25", 79, "image/laptop/laptop_25.jpg");
laptop[25] = new san_pham(25, 1, "Laptop 26", 54, "image/laptop/laptop_26.jpg");
laptop[26] = new san_pham(26, 1, "Laptop 27", 82, "image/laptop/laptop_27.jpg");
laptop[27] = new san_pham(27, 1, "Laptop 28", 70, "image/laptop/laptop_28.jpg");
laptop[28] = new san_pham(28, 1, "Laptop 29", 67, "image/laptop/laptop_29.jpg");
laptop[29] = new san_pham(29, 1, "Laptop 30", 78, "image/laptop/laptop_30.jpg");
laptop[30] = new san_pham(30, 1, "Laptop 31", 11, "image/laptop/laptop_31.jpg");
laptop[31] = new san_pham(31, 1, "Laptop 32", 27, "image/laptop/laptop_32.jpg");
laptop[32] = new san_pham(32, 1, "Laptop 33", 30, "image/laptop/laptop_33.jpg");



// for (var i = 0; i < 55; i++) {
//     var html = document.documentElement;
//     html.innerHTML += ('phone[' + i + '] = new san_pham(' + i + ',1,"Điện thoại ' + (i + 1) + '",' + (Math.floor((Math.random() * 100) + (1))) + ',"image/phone/phone_' + (i + 1) + '.jpg");');

//     //     laptop[i] = new san_pham(
//     //         i,
//     //         1,
//     //         'Laptop ' + (i + 1),
//     //         Math.floor((Math.random() * 100) + (1)),
//     //         'image/laptop/laptop_' + (i + 1) + '.jpg'
//     //     );
// }

//khởi tạo mảng sản phẩm camera
var camera = new Array();
for (var i = 0; i < 33; i++) {
    camera[i] = new san_pham(
        i,
        2,
        'Máy ảnh ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/camera/camera_' + (i + 1) + '.jpg'
    );
}
//khởi tạo mảng sản phẩm Máy tính bảng
var pad = new Array();
for (var i = 0; i < 33; i++) {
    pad[i] = new san_pham(
        i,
        3,
        'Máy tính bảng ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/pad/pad_' + (i + 1) + '.jpg'
    );
}
//khởi tạo mảng sản phẩm Phụ kiện
var phu_kien = new Array();
for (var i = 0; i < 33; i++) {
    phu_kien[i] = new san_pham(
        i,
        4,
        'Phụ kiện ' + (i + 1),
        Math.floor((Math.random() * 100) + (1)),
        'image/phu-kien/phu-kien_' + (i + 1) + '.jpg'
    );
}
//Khởi tạo mảng chứa các danh mục sản phẩm
var list_danh_muc = [phone, laptop, camera, pad, phu_kien];


//NOTE: Giá tiền random trong hàng chục. Chuỗi .000.000đ chỉ để cho vui thôi ^_^!
//------------------------KHỞI TẠO HOÀN TẤT--------------------------


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
//Chuyển đến slide thứ n
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
    window.addEventListener('scroll', function() {
        if (html.scrollTop > 120) {
            nav.className = 'nav fixed_nav';
        } else {
            nav.className = 'nav';
        }
        if (html.scrollTop > 680) {
            l_menu.className = 'left_menu fixed_left_menu';
        } else {
            l_menu.className = 'left_menu';
        }
        if (window.location.href.indexOf('gio_hang.html') != -1) {
            var sum_sec = document.getElementsByClassName('summary-section')[0];
            if (html.scrollTop > 700) {
                sum_sec.className = 'summary-section summary-section-fixed';
            } else {
                sum_sec.className = 'summary-section';
            }
        }
    });

};


//tạo menu danh mục sản phẩm
function create_left_menu() {
    var khung = document.getElementsByClassName('list_danh_muc')[0];
    var vt = 0;
    for (var i = 0; i < ten_danh_muc_sp.length; i++) {
        khung.innerHTML += '<a class="use_for_login" href="index.html?' + i + '&' + vt + '">\
      <div class="danh_muc_item">' + ten_danh_muc_sp[i] + '</div>\
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
        <div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn" value="' + i + '&4" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
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
    //Lướt trang xuống phần nội dung
    if (code[1] >= 12) {
        go_to_content();
    }
    //Ẩn các thanh tiêu đề thừa trong trang chính
    header[1].className += ' hidden';
    list_sp[1].className += ' hidden';
    //Thay đổi nội dung thanh tiêu đề
    document.getElementsByClassName('small_txt')[0].innerHTML = ten_danh_muc_sp[code[0]].toUpperCase();
    document.getElementsByClassName('big_txt')[0].innerHTML = list_tieu_de[code[0]];
    //Load các hộp sản phẩm
    for (var i = parseFloat(code[1]); i < sp.length && so_luong < 12; i++) {
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

    so_trang = Math.ceil(sp.length / 12);
    var temp = code[1];
    for (var i = 1; i <= so_trang; i++) {
        code[1] = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<a href="index.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>';
    }

    //khóa số trang hiện tại
    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';
    //thêm số trang hiện tại vào tiêu đề
    document.getElementsByClassName('big_txt')[0].innerHTML +=
        '<span style="letter-spacing:0;padding:0;margin:0;"> - PAGE - ' + (temp / 12 + 1) + '</span>';
};

//Mở thông báo đăng nhập --KHÔNG CẦN NỮA
function mo_tbdn() {
    var quaylai = document.getElementById('no');
    var dangnhap = document.getElementById('yes');
    var tbdn = document.getElementById('thong-bao-dang-nhap');
    tbdn.style.display = 'block';
    quaylai.onclick = function() {
            tbdn.style.display = 'none';
        }
        //auto_login(dangnhap);
        //
    dangnhap.onclick = function() {
        window.location = 'login.html';
    };
    // localStorage.setItem('tai_khoan', JSON.stringify(obj));
    // alert('Chúng tôi đã tự động tạo tài khoản và đăng nhập dùm bạn.\n Bây giờ bạn có thể tự do mua sắm!');
    // //location.reload();
    // tbdn.style.display = 'none';
    // window.location = 'index.html';
    // }
};

//Tạo sự kiện Khi click vào nút thêm vào giỏ đồ
//  Hành động khi click : phân tích dữ liệu value trong nút "them"
//  và đưa giá trị vào localStorage, gồm "mã của danh mục" 
//  và "mã sản phẩm". Gán tiêu đề cho gói đó dạng box_i
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
            this.className = 'them them_fade';
        });
    }
}
//xóa box_i trong localStorage
function clear_box() {
    var temp = localStorage.length;
    for (var i = 0; i < temp; i++) {
        console.log('temp = ' + temp);
        if (localStorage.getItem('box_' + i)) {
            localStorage.removeItem('box_' + i);
        }
        console.log('dele = ' + 'deleted_box_' + i);
        localStorage.removeItem('deleted_box_' + i);

    }
}
//Load từ localStorage vào giỏ hàng
function load_gio_hang() {
    var clear = document.getElementsByClassName('clear_all_cart')[0];
    var lclength = localStorage.length;

    // Ẩn hiện nút "Xóa tất cả sản phẩm"
    if (lclength <= 0) {
        clear.style.display = 'none';
    } else {
        clear.style.display = 'inline-block';
    }

    //Xóa dữ liệu trong localSt(trừ tài khoản) và load lại trang
    clear.onclick = function() {
        clear_box();
        location.reload();
    }

    //Bắt đầu load nếu nó không rỗng
    for (var i = 0; i < lclength; i++) {

        //Tìm và lấy giá trị dạng box_i
        var box_index = "box_" + i;
        if (localStorage.getItem(box_index)) {
            var box = JSON.parse(localStorage.getItem(box_index));
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
        }
    }

}


//Cái này cho nút thêm sản phẩm trong trang thong_tin_sp.html
function xac_nhan(e) {
    if (confirm('Xác nhận thêm')) {
        e.className = 'them';
        click_add_to_cart();
        e.setAttribute('onclick', '');
        e.click();
        //setTimeout(e.click,5000);
        e.style.display = 'none';
    }
}

function reload() {
    location.reload();
}

//Khi click nút xác nhận giỏ hàng
function xac_nhan_gio_hang() {
    var tk = JSON.parse(localStorage.getItem('tai_khoan'));
    if (!localStorage.getItem('tai_khoan') || tk.trang_thai_dang_nhap == 0) {
        mo_tbdn();
    } else
    // if(tk.trang_thai_dang_nhap == 0){
    //     mo_tbdn();
    // }
    if (localStorage.length > 1) {
        clear_box();
        alert('Thành công!\nCảm ơn bạn đã mua hàng của chúng tôi');
        location.reload();
    } else {
        alert('Giỏ hàng rỗng');
    }
}


function click_delete_cart() {
    var delete_cart = document.getElementsByClassName('delete-cart');
    for (var i = 0; i < delete_cart.length; i++) {
        delete_cart[i].addEventListener('click', function() {
            if (confirm('Xác nhận xóa')) {
                var key = this.getAttribute('data-delete');
                var cart = document.getElementById(key);
                localStorage.removeItem(key);
                localStorage.setItem('deleted_' + (key), '');
                cart.className = 'cart-item cart-item-hide';
                document.getElementsByClassName('refresh_cart')[0].style.display = 'inline';
                //setTimeout(reload, 160);
            }
        });
    }
}

function url_chi_tiet_sp() {
    var key = window.location.toString().split('?')[1];
    var code = key.split('&');
    var sp = list_danh_muc[code[1]];
    var masp = parseInt(code[0]);
    var hinh = document.getElementsByClassName('ttsp_hinh');
    var ten = document.getElementsByClassName('ten_sp')[0];
    for (var i = 0; i < hinh.length; i++) {
        hinh[i].setAttribute('style', 'background-image: url(' + sp[masp].hinh + ')');
    }
    ten.innerHTML = sp[masp].tensp;
    document.getElementsByClassName('gia-tien')[0].innerHTML = sp[masp].gia + '.000.000đ';
}

function tinh_tong_tien() {
    var so_sp = localStorage.length;
    if (localStorage.getItem('tai_khoan')) so_sp--;
    var gia_tien = document.getElementsByClassName('gia_tien');
    var tong_tien = document.getElementsByClassName('tong_tien');
    var sum = 0;
    for (var i = 0; i < gia_tien.length; i++) {
        sum += parseInt(gia_tien[i].innerHTML);
    }
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



function load_tim_kiem() {
    search_selected();
    go_to_content();
    var url = window.location.href;
    var search_value = url.split('search=')[1].split('&')[0].toLowerCase();
    var search_gia = parseInt(url.split('search=')[1].split('&')[1]);
    var search_loai = parseInt(url.split('search=')[1].split('&')[2]);
    var search_gia_min = 0;
    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_trang = 1;
    var vt = 0;
    var dem = 0;
    switch (search_gia) {
        case 10:
            search_gia_min = 1;
            break;
        case 50:
            search_gia_min = 10;
            break;
        case 100:
            search_gia_min = 50;
            break;
        default:
            break;
    }
    for (var i = 0; i < 5; i++) {
        var list = list_danh_muc[i];
        for (var j = 0; j < list.length; j++) {
            var name = spc_to_plus(xoa_dau(list[j].tensp)).toLowerCase();
            if ((name.indexOf(search_value) != -1 || search_value == '') &&
                (search_loai == '-1' || search_loai == i) &&
                (search_gia == '-1' || (search_gia >= list[j].gia && search_gia_min <= list[j].gia))
            ) {
                dem++;
                document.getElementsByClassName('list_sp')[0].innerHTML += '<div class="product-box">\
                      <a class="box" href="thong_tin_sp.html?' + j + '&' + i + '">\
                        <div class="hinh-sp">\
                          <div style="background-image: url(' + list[j].hinh + ')" class="hinh"></div>\
                        </div>\
                        <p class="ten-sp">' + list[j].tensp + '</p>\
                        <p class="gia-tien">' + list[j].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + j + '&' + i + '" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                    </div>';
            }
        }
    }

    so_trang = Math.ceil(dem / 12);
    for (var i = 1; i <= so_trang; i++) {
        vt = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<button class="so_trang" value="' + vt + '">' + i + '</button>';
    }
    chuyen_trang.innerHTML +=
        '<button style="display : none" class="so_trang" value="' + 0 + '">' + 1 + '</button>';

    var trang = document.getElementsByClassName('so_trang');
    // trang[1].className += ' block_trang';    
    for (var i = 0; i < trang.length; i++) {
        trang[i].className = 'so_trang';
    }
    for (var i = 0; i < trang.length; i++) {
        trang[i].addEventListener('click', function() {
            load_sp_tim_kiem_theo_trang(parseInt(this.value));
            go_to_content();
            document.getElementsByClassName('big_txt')[0].innerHTML =
                'YOUR SEARCH<span style="letter-spacing:0"> - PAGE - ' + (this.innerHTML) + '</span>';
            for (var i = 0; i < trang.length; i++) trang[i].className = 'so_trang';
            this.className = 'so_trang block_trang';
        });
    }
    document.getElementsByClassName('big_txt')[0].innerHTML =
        'YOUR SEARCH<span style="letter-spacing:0"> - PAGE - 1</span>';
    //load trang đầu tiên
    load_sp_tim_kiem_theo_trang(0);
    trang[0].className = 'so_trang block_trang';

    document.getElementsByClassName('small_txt')[0].innerHTML = 'KẾT QUẢ TÌM KIẾM (' + dem + ')';
    document.getElementsByClassName('khung_sp_header')[1].style.display = 'none';
    document.getElementsByClassName('thanh_tim_kiem_nang_cao')[0].style.display = 'block';
}

function load_sp_tim_kiem_theo_trang(n) {
    var sp_tim_thay = document.getElementsByClassName('product-box');
    var dem = 0;
    for (var i = 0; i < sp_tim_thay.length; i++) {
        sp_tim_thay[i].style.display = 'none';
    }
    for (var i = n; i < sp_tim_thay.length && dem < 12; i++) {
        dem++;
        sp_tim_thay[i].style.display = 'block';
    }
}

function tim_kiem_nang_cao() {
    var noi_dung = document.getElementById('noi_dung_tknc').value;
    var gia = document.getElementById('gia_id').value;
    var loai = document.getElementById('loai_id').value;
    var url = window.location.href.split('search=');
    noi_dung = spc_to_plus(xoa_dau(noi_dung));
    console.log(noi_dung);
    window.location.href = url[0] + 'search=' + noi_dung + '&' + gia + '&' + loai;
}


function search_selected() {
    var url = window.location.href.split('&');
    var opt = document.getElementsByTagName('option');
    for (var i = 0; i < opt.length; i++) {
        if (url[2] == opt[i].value || url[1] == opt[i].value) {
            opt[i].setAttribute('selected', '');
        }

    }
}

function search() {
    var search_content = document.getElementById('search_txt').value;
    window.location.href = 'index.html?search=' + spc_to_plus(xoa_dau(search_content)) + '&-1&-1';
}


function spc_to_plus(str) {
    str = str.replace(/ /g, "+");
    return str;
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
//

function scroll_to_top() {

    var btn = document.getElementsByClassName('scroll_to_top')[0];
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 130) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });


    btn.onclick = function() {
        document.documentElement.scrollTop = 0;
    };
}



function check_tai_khoan() {
    var login = document.getElementById('login');
    var dang_ky = document.getElementById('dang_ky');
    if (localStorage.getItem('tai_khoan')) {
        var tk = JSON.parse(localStorage.getItem('tai_khoan'));
        if (tk.trang_thai_dang_nhap == 1) {
            login.innerHTML = tk.ten_tk;
            //       login.style.pointerEvents = 'none';
            login.style.color = '#ff9a00';
            login.style.fontWeight = 'bold';
            login.style.borderBottom = '2px solid #ff9a00';
            login.setAttribute('href', '#');
            login.setAttribute('title', 'Xin Chào ' + JSON.parse(localStorage.getItem('tai_khoan')).ten_tk);

            login.addEventListener('click', function(e) {
                console.log('run 444');
                document.getElementsByClassName('thong_tin_khach_hang')[0].style.display = 'block';
                document.getElementsByClassName('user')[0].innerHTML = tk.ten_tk;
                document.getElementsByClassName('ho_ten')[0].innerHTML = 'HỌ TÊN :    ' + tk.ho_ten;
                document.getElementsByClassName('email')[0].innerHTML = 'EMAIL :    ' + tk.email;
                document.getElementsByClassName('gioi_tinh')[0].innerHTML = 'GIỚI TÍNH :    ' + tk.gioi_tinh;
                document.getElementsByClassName('sdt')[0].innerHTML = 'SỐ ĐIỆN THOẠI :    ' + tk.sdt;
                document.getElementsByClassName('ngay_sinh')[0].innerHTML = 'NGÀY SINH :    ' + tk.ngay_sinh;

                document.getElementsByClassName('btn_x')[0].addEventListener('click', function(e) {
                    document.getElementsByClassName('thong_tin_khach_hang')[0].style.display = 'none';
                });

            });

            dang_ky.innerHTML = 'ĐĂNG XUẤT';
            dang_ky.setAttribute('href', '');
            dang_ky.addEventListener('click', function(e) {
                tk.trang_thai_dang_nhap = 0;
                localStorage.setItem('tai_khoan', JSON.stringify(tk));
                //localStorage.removeItem('tai_khoan');
                location.reload();
            });
        }

    }
}

function dang_nhap_fuc() {
    // document.getElementsByClassName('submit')[0].addEventListener('click', function() {
    if (localStorage.getItem('tai_khoan')) {
        var n = document.getElementById('dangnhap').value;
        var p = document.getElementById('matkhau').value;
        var tk = localStorage.getItem('tai_khoan');
        tk = JSON.parse(tk);
        if ((n == tk.email || n == tk.sdt) && p == tk.mat_khau) {
            tk.trang_thai_dang_nhap = 1;
            localStorage.setItem('tai_khoan', JSON.stringify(tk));
            alert('Đăng nhập thành công');
            window.location = 'index.html';
        } else {
            alert('Tài khoản không tồn tại');
        }
    } else {
        alert('Tài khoản không tồn tại');
    }
    //});

}

function dang_ky_func(e) {
    // e.addEventListener('click', function(e) {
    var ngay = document.getElementById('ngay').value;
    var thang = document.getElementById('thang').value;
    var nam = document.getElementById('nam').value;

    var obj = {
        ten_tk: document.getElementById('hoten').value,
        mat_khau: document.getElementById('pass').value,
        gioi_tinh: document.getElementById('sex').value,
        sdt: document.getElementById('phone').value,
        ho_ten: document.getElementById('hoten').value,
        email: document.getElementById('email').value,
        ngay_sinh: ngay + '/' + thang + '/' + nam,
        trang_thai_dang_nhap: 0
    };
    localStorage.setItem('tai_khoan', JSON.stringify(obj));
    alert('Đăng ký thành công');
    window.location = 'login.html';
    // });
}

//
//chạy JS
window.addEventListener('load', click_add_to_cart);
window.addEventListener('load', check_tai_khoan);

function gio_hang() {
    slide_show();
    load_gio_hang();
    fixedElement();
    create_left_menu();
    click_delete_cart();
    tinh_tong_tien();
    scroll_to_top();
    go_to_content();
}

function thong_tin_sp() {
    url_chi_tiet_sp();
    slide_show();
    fixedElement();
    create_left_menu();
    set_value_ttsp_them();
    scroll_to_top();
}

function trang_chinh() {
    var them = document.getElementsByClassName('them');
    scroll_to_top();
    slide_show();
    fixedElement();
    create_left_menu();
    if (window.location.href.indexOf('?') === -1) {
        create_box();
    } else if (window.location.href.indexOf('search=') === -1) {
        phan_tich_url();
    }
    if (window.location.href.indexOf('search=') != -1) {
        load_tim_kiem();
    }
}
//trang đăng nhập
function login() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
    scroll_to_top();
    // dang_nhap_fuc();
}
//
function dang_ky() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
    scroll_to_top();
    //dang_ky_func(document.getElementsByClassName('submit-dk')[0]);
}