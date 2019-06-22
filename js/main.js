
$('.page-scroll').on('click',function(e){
    e.preventDefault();
    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen tujuan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top
    },1250, 'easeInOutExpo');

    // console.log(elemenTujuan.offset().top);

    
});
