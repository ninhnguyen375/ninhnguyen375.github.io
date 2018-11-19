function load_product() {
    console.log(window.location.href);
    var main = document.getElementsByClassName('list_the_sp')[0];
    var vt = parseInt(window.location.href.split('vitri=')[1]);
    var dem = 0;
    var tong_so_luong_sp = 0;
    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_trang = 1;
    var ds = 0;
    var s = [];
    // dem so luong tat ca sp
    for (var i = 0; i < list_danh_muc.length; i++) {
        for (var j = 0; j < list_danh_muc[i].length; j++) {
            tong_so_luong_sp++;
            s[ds++] = '<div class="the_sp">\
	                      <img src="../' + list_danh_muc[i][j].hinh + '" height="100" width="110">\
	    		 <div class="thong_tin">\
	    		 	Ten : <span class="ten_sp">' + list_danh_muc[i][j].tensp + '</span> <br>\
	    		 	Gia : <span class="gia_sp">' + list_danh_muc[i][j].gia + '.000.000d</span> <br>\
	    		 	Loai : <span class="loai_sp">' + ten_danh_muc_sp[i] + '</span> <br>\
	    		 </div>\
	    		 <div class="nut" style="width: 60px;float: left;margin-top:10px;margin-left:10px">\
	<input type="button" class="xoa" value="XOA" style="margin-bottom:5px">\
	<input type="button" value="SUA">\
</div>\
	          		</div>';
        }
    }
    // in ra sp
    for (var i = vt; dem < 20 && i < s.length; i++) {
        dem++;
        main.innerHTML += s[i];
    }

    so_trang = Math.ceil(tong_so_luong_sp / 20);
    var temp = vt;
    for (var i = 1; i <= so_trang; i++) {
        vt = (i - 1) * 20;
        chuyen_trang.innerHTML +=
            '<a href="admin.html?tat_ca_sp&vitri=' + vt + '" class="so_trang">' + i + '</a>';
    }

    //khóa số trang hiện tại
    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 20];
    trang_can_block.className += ' block_trang';
}

function xoa_item() {
    var xoa = document.getElementsByClassName('xoa');
    for (var i = 0; i < xoa.length; i++) {
        xoa_mot_item(xoa[i], i);
    }
}

function xoa_mot_item(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Bạn có chắc muốn xóa ?')) {
            document.getElementsByClassName('the_sp')[i].style.display = 'none';
            alert('Xoa thanh cong!');
        }
    });
}

function xoa_the_loai() {
    var xoa = document.getElementsByClassName('xoa_the_loai');
    for (var i = 0; i < xoa.length; i++) {
        xoa_mot_the_loai(xoa[i], i);
    }
}

function xoa_mot_the_loai(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Bạn có chắc muốn xóa ?')) {
            document.getElementsByClassName('tr')[i].style.display = 'none';
            alert('Xoa thanh cong!');
        }
    });
}
window.addEventListener('load', function() {
    if (window.location.href.indexOf('admin.html?tat_ca_sp&vitri') != -1) {
        load_product();
        xoa_item();
    } else {
        xoa_the_loai();
    }
})