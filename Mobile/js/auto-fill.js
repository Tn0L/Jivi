$(document).ready(function(){
    // Countries
    var city_arr = new Array("Thành Phố","Hồ Chí Minh","Hà Nội");
    
    $.each(city_arr, function (i, item) {
    $('#city').append($('<option>', {
        value: i,
        text : item,
    }, '</option>' ));
    });
    
    // States
    var s_a = new Array();
    s_a[0]="Chọn Quận";
    s_a[1]="Chọn Quận|Quận 1|Quận 2|Quận 3|Quận 4|Quận 5|Quận 6|Quận 7|Quận 8|Quận 9|Quận 10|Quận 11|Quận 12|Bình Chánh|Bình Tân|Bình Thạnh|Cần Giờ|Gò Vấp|Củ Chi|Hóc Môn|Phú Nhuận|Tân Bình|Tân Phú|Nhà Bè|Thủ Đức";
    s_a[2]="Chọn Quận|Ba Đình|Ba Vì|Hoàn Kiếm|Hai Bà Trưng|Đống Đa|Tây Hồ|Cầu Giấy|Thanh Xuân|Hoàng Mai|Long Biên|Từ Liêm|Thanh Trì|Gia Lâm|Đông Anh|Sóc Sơn|Hà Đông|Sơn Tây|Phúc Thọ|Thạch Thất|Quốc Oai|Chương Mỹ|Đan Phượng|Hoài Đức|Thanh Oai|Mỹ Đức|Ứng Hoà|Thường Tín|Phú Xuyên|Mê Linh";
    
    
    //district
    
    var d_a = new Array();
    //Hồ Chí Minh
    d_a['Quận 1']="Đa Kao|Tân Định|Bến Nghé|Bến Thành|Nguyễn Thái Bình|Phạm Ngũ Lão|Cầu Ông Lãnh|Cô Giang|Nguyễn Cư Trinh|Cầu Kho";
    d_a['Quận 12']="Thạnh Xuân|Thạnh Lộc|Hiệp Thành|Thới An|Tân Chánh Hiệp|An Phú Đông|Tân Thới Hiệp|Trung Mỹ Tây|Tân Hưng Thuận|Đông Hưng Thuận|Tân Thới Nhất";
    d_a['Thủ Đức']="Linh Xuân|Bình Chiểu|Linh Trung|Tam Bình|Tam Phú|Hiệp Bình Phước|Hiệp Bình Chánh|Linh Chiểu|Linh Tây|Linh Đông|Bình Thọ|Trường Thọ";
    d_a['Quận 9']="Long Bình|Long Thạnh Mỹ|Tân Phú|Hiệp Phú|Tăng Nhơn Phú A|Tăng Nhơn Phú B|Phước Long B|Phước Long A|Trường Thạnh|Long Phước|Long Trường|Phước Bình|Phú Hữu";
    d_a['Gò Vấp']="Phường 15|Phường 13|Phường 17|Phường 06|	Phường 16|Phường 14|Phường 10|Phường 05|Phường 07|Phường 04|Phường 01|Phường 09|Phường 08|Phường 11|Phường 03";
    d_a['Bình Thạnh']="Phường 13|Phường 11|Phường 27|Phường 26|Phường 12|Phường 25|Phường 05|Phường 07|Phường 24|Phường 06|Phường 14|Phường 15|Phường 02|Phường 01|Phường 03|Phường 17|Phường 21|Phường 22|Phường 19|Phường 28";
    d_a['Tân Bình']="Phường 02|Phường 04|Phường 12|Phường 13|Phường 01|Phường 03|Phường 11|Phường 07|Phường 05|Phường 10|Phường 06|Phường 08|Phường 09|Phường 14|Phường 15";
    d_a['Tân Phú']="Tân Sơn Nhì|Tây Thạnh|Sơn Kỳ|Tân Qúy|Tân Thành|Phú Thọ Hoà|Phú Thạnh|Phú Trung|Hoà Thạnh|Hiệp Tân|Tân Thới Hoà";
    d_a['Phú Nhuận']="Phường 04|Phường 05|Phường 09|Phường 07|Phường 03|Phường 01|Phường 02|Phường 08|Phường 15|Phường 10|Phường 11|Phường 17|Phường 14|Phường 12|Phường 13";
    d_a['Quận 2']="Thảo Điền|An Phú|Bình An|Bình Trưng Đông|Bình Trưng Tây|Bình Khánh|An Khánh|Cát Lái|Thạnh Mỹ Lợi|An Lợi Đông|Thủ Thiêm";
    d_a['Quận 3']="	Phường 08|Phường 07|Phường 14|Phường 12|Phường 11|Phường 13|Phường 06|Phường 09|Phường 10|Phường 04|Phường 05|Phường 03|Phường 02|Phường 01";
    d_a['Quận 10']="Phường 15|Phường 13|Phường 14|Phường 12|Phường 11|Phường 10|Phường 09|Phường 01|Phường 08|Phường 02|Phường 04|Phường 07|Phường 05|Phường 06|Phường 03";
    d_a['Quận 11']="Phường 15|Phường 05|Phường 14|Phường 11|Phường 03|Phường 10|Phường 13|Phường 08|Phường 09|Phường 12|Phường 07|Phường 06|Phường 04|Phường 01|Phường 02|Phường 16";
    d_a['Quận 4']="Phường 12|Phường 13|Phường 09|Phường 06|Phường 08|Phường 10|Phường 05|Phường 18|Phường 14|Phường 04|Phường 03|Phường 16|Phường 02|Phường 15|Phường 01";
    d_a['Quận 5']="Phường 04|Phường 09|Phường 03|Phường 12|Phường 02|Phường 08|Phường 15|Phường 07|Phường 01|Phường 11|Phường 14|Phường 05|Phường 06|Phường 10|Phường 13";
    d_a['Quận 6']="Phường 14|Phường 13|Phường 09|Phường 06|Phường 12|Phường 05|Phường 11|Phường 02|Phường 01|Phường 04|Phường 08|Phường 03|Phường 07|Phường 10";
    d_a['Quận 8']="	Phường 08|Phường 02|Phường 01|Phường 03|Phường 11|Phường 09|Phường 10|Phường 04|Phường 13|Phường 12|Phường 05|Phường 14|Phường 06|Phường 15|Phường 16|Phường 07";
    d_a['Bình Tân']="Bình Hưng Hòa|Bình Hưng Hoà A|Bình Hưng Hoà B|Bình Trị Đông|Bình Trị Đông A|Bình Trị Đông B|Tân Tạo|Tân Tạo A|An Lạc|An Lạc A";
    d_a['Quận 7']="Tân Thuận Đông|Tân Thuận Tây|Tân Kiểng|Tân Hưng|Bình Thuận|Tân Quy|Phú Thuận|Tân Phú|Tân Phong|Phú Mỹ";
    d_a['Củ Chi']="Củ Chi|Phú Mỹ Hưng|An Phú|Trung Lập Thượng|An Nhơn Tây|Nhuận Đức|Phạm Văn Cội|Phú Hòa Đông|Trung Lập Hạ|Trung An|Phước Thạnh|Phước Hiệp|Tân An Hội|Phước Vĩnh An|Thái Mỹ|Tân Thạnh Tây|Hòa Phú|Tân Thạnh Đông|Bình Mỹ|Tân Phú Trung|Tân Thông Hội";
    d_a['Hóc Môn']="Thị trấn Hóc Môn|Tân Hiệp|Nhị Bình|Đông Thạnh|Tân Thới Nhì|Thới Tam Thôn|Xuân Thới Sơn|Tân Xuân|Xuân Thới Đông|Trung Chánh|Xuân Thới Thượng|Bà Điểm";
    d_a['Bình Chánh']="Thị trấn Tân Túc|Phạm Văn Hai|Vĩnh Lộc A|Vĩnh Lộc B|Bình Lợi|Lê Minh Xuân|Tân Nhựt|Tân Kiên|Bình Hưng|Phong Phú|An Phú Tây|Hưng Long|Đa Phước|Tân Quý Tây|Bình Chánh|Quy Đức";
    d_a['Nhà Bè']="Nhà Bè|Phước Kiển|Phước Lộc|Nhơn Đức|Phú Xuân|Long Thới|Hiệp Phước";
    d_a['Cần Giờ']="Cần Thạnh|Bình Khánh|Tam Thôn Hiệp|An Thới Đông|Thạnh An|Long Hòa|Lý Nhơn";
    //Hà Nội
    d_a['Ba Đình']="Phúc Xá|Trúc Bạch|Vĩnh Phúc|Cống Vị|Liễu Giai|Nguyễn Trung Trực|Quán Thánh|Ngọc Hà|Điện Biên|Đội Cấn|Ngọc Khánh|Kim Mã|Giảng Võ|Thành Công";
    d_a['Hoàn Kiếm']="Phúc Tân|Đồng Xuân|Hàng Mã|Hàng Buồm|Hàng Đào|Hàng Bồ|Cửa Đông|Lý Thái Tổ|Hàng Bạc|Hàng Gai|Chương Dương Độ|Hàng Trống|Cửa Nam|Hàng Bông|Tràng Tiền|Trần Hưng Đạo|Phan Chu Trinh|Hàng Bài";
    d_a['Tây Hồ']="Phú Thượng|Nhật Tân|Tứ Liên|Quảng An|Xuân La|Yên Phụ|Bưởi|Thụy Khuê";
    d_a['Long Biên']="Thượng Thanh|Ngọc Thụy|Giang Biên|Đức Giang|Việt Hưng|Gia Thụy|Ngọc Lâm|Phúc Lợi|Bồ Đề|Sài Đồng|Long Biên|Thạch Bàn|Phúc Đồng|Cự Khối";
    d_a['Cầu Giấy']="Nghĩa Đô|Nghĩa Tân|Mai Dịch|Dịch Vọng|Dịch Vọng Hậu|Quan Hoa|Yên Hòa |Trung Hòa";
    d_a['Đống Đa']="Phường Cát Linh|Văn Miếu|Quốc Tử Giám|Láng Thượng|Ô Chợ Dừa|Văn Chương|Hàng Bột|Láng Hạ|Khâm Thiên|Thổ Quan|Nam Đồng|Trung Phụng|Quang Trung|Trung Liệt|Phương liên|Thịnh Quang|Trung Tự|Kim Liên|Phương Mai|Ngã Tư Sở|Khương Thượng| ";
    d_a['Hai Bà Trưng']="Nguyễn Du|Bạch Đằng|Phạm Đình Hổ|Bùi Thị Xuân|Ngô Thì Nhậm|Lê Đại Hành|Đồng Nhân|Phố Huế|Đống Mác|Thanh Lương|Thanh Nhàn|Cầu Dền|Bách Khoa|Đồng Tâm|Vĩnh Tuy|Bạch Mai|Bạch Lôi|Quỳnh Lôi|Minh Khai|Trương Định ";
    d_a['Hoàng Mai']="Thanh Trì|Vĩnh Hưng|Định Công|Mai Động|Tương Mai|Đại Kim|Tân Mai|Hoàng Văn Thụ|Giáp Bát|Lĩnh Nam|Thịnh Liệt|Trần Phú|Hoàng Liệt|Yên Sở";
    d_a['Thanh Xuân']="Nhân Chính|Thượng Đình|Khương Trung|Khương Mai|Thanh Xuân Trung|Phương Liệt|Hạ Đình|Khương Đình|Thanh Xuân Bắc|Thanh Xuân Nam|Kim Giang";
    d_a['Sóc Sơn']="Sóc Sơn|Bắc Sơn|Minh Trí|Hồng Kỳ|Nam Sơn|Trung Giã|Tân Hưng|Minh Phú|Phù Linh|Bắc Sơn|Tân Minh|Quang Tiến|Hiền Linh|Tân Dân|Tiên Dược|Việt Long|Xuân Giang|Mai Đình|Đức Hòa|Thanh Xuân|Đông Xuân|Kim Lũ|Phú Cường|Phú Minh|Phù Lỗ|Xuân Thu";
    d_a['Đông Anh']="Đông Anh|Xuân Nộn|Thụy Lâm|Bắc Hồng|Nguyên Khê|Nam Hồng|Tiên Dương|Vân Hà|Uy Nỗ|Vân Nội|Liên Hà |Việt Hùng|Kim Nỗ|Kim Chung|Dục Tú|Đại Mạch|Vĩnh Ngọc|Cỗ Loa|Hải Bối|Xuân Canh|Võng La|Tầm Xá|Mai Lâm|Đông Hội "
    d_a['Gia Lâm']="Yên Viên|Trâu Quỳ|Yên Thường|Yên Viên|Ninh Hiệp |Đình Xuyên|Dương Hà|Phù Đổng|Trung Mầu|Lệ Chi|Cổ Bi|Đặng Xá|Phú Thị|Kim Sơn|Dương Quang|Dương Xá|Đông Dư|Đa Tốn|Kiêu Kỵ|Bát Tràng|Kim Lan|Văn Đức";
    d_a['Từ Liêm']="Cầu Diễn|Thượng Cát|Liên Mạc|Đông Ngạc|Thụy Phương|Tây Tựu|Xuân Đỉnh|Minh Khai|Cổ Nhuế|Phú Diễn|Xuân Phương|Mỹ Đình|Tây Mỗ|Mễ Trì|Đại Mỗ|Trung Văn ";
    d_a['Thanh Trì']="Văn Điển|Tân Triều|Thanh Liệt|Tả Thanh Oai|Hữu Hòa|Tam Hiệp|Tứ Hiệp|Yên Mỹ|Vĩnh Quỳnh|Ngũ Hiệp|Duyên Hà|Ngọc Hồi|Vạn Phúc|Đại Áng|Liên Ninh|Đông Mỹ";
    d_a['Mê Linh']="Đại Thịnh|Kim Hoa|Thạch Đà|Tiến Thắng|Tự Lập|Quang Minh|Thanh Lâm|Tam Đồng|Liên Mạc|Vạn Yên|Chu Phan|Tiến Thịnh|Mê Linh|Văn Khê|Hoàng Kim|Tiền Phong|Tráng Việt|Chi Đông";
    d_a['Hà Đông']="Nguyễn Trãi|Văn Mỗ|Vạn Phúc|Yết Kiêu|Quang Trung|Văn Quán|Hà Cầu|La Khê|Yên Nghĩa|Kiến Hưng|Phú Lãm|Phú Lương|Dương Nội|Đồng Mai|Biên Giang|Mộ Lao|Phú La"
    d_a['Sơn Tây']="Lê Lợi|Phú Thịnh|Ngô Quyền|Quang Trung|Sơn Lộc|Xuân Khanh|Đường Lâm|Viên Sơn|Xuân Sơn|Trung Hưng|Thanh Mỹ|Trung Sơn Trầm|Kim Sơn|Sơn Đông|Cổ Đông";
    d_a['Ba Vì']="Tây Đằng|khánh thượng|Phú Cường|Cổ Đô|Tản Hồng|Vạn Thắng|Châu Sơn|Phong Vân|Phú Đông|Phú Phương|Phú Châu|Thái Hòa|Đồng Thái|Phú Sơn|Minh Châu|Vật Lại|Chu Minh|Tòng Bạt|Cẩm Lĩnh|Sơn Đà|Đông Quang|Tiên Phong|Thụy An|Cam Thượng|Thuần Mỹ|Tản Lĩnh|Ba Trại|Minh Quang|Ba Vì|Vân Hòa|Yên Bài"
    d_a['Phúc Thọ']="Phúc Thọ|Vân Hà|Vân Phúc|Vân Nam|Xuân Phú|Phương Độ|Sen Chiểu|Cẩm Đình|Võng Xuyên|Thọ Lộc|Long Xuyên|Thượng Cốc|Hát Môn|Tích Giang|Thanh Đa|Trạch Mỹ Lộc|Phúc Hòa|Ngọc Tảo|Phụng Thượng|Tam Thuấn|Tam Hiệp|Hiệp Thuận|Liên Hiệp";
    d_a['Đan Phượng']="Phùng|Trung Châu|Thọ An|Thọ Xuân|Hồng Hà|Liên Hồng|Liên Hà|Hạ Mỗ|Liên Trung|Phương Đình|Thượng Mỗ|TÂN HỘI|Tân Lập|Đan Phượng|Đồng Tháp|Song Phượng";
    d_a['Hoài Đức']="Trạm Trôi|Đức Thượng|Minh Khai|Dương Liễu|Di Trạch|Đức Giang|Cát Quế|Kim Chung|Yên Sở|Sơn Đồng|Vân Canh|Đắc Sở|Lại Yên|Tiến Yên|Song Phương|An Khánh|An Thượng|Vân Côn|La Phù|Đông La"
    d_a['Quốc Oai']="Quốc Oai|Sài Sơn|Phượng Cách|Yên Sơn|Ngọc Liệp|Ngọc Mỹ|Liệp Tuyết|Thạch Thán|Đồng Quang|Phú Cát|Tuyết Nghĩa|Nghĩa Hương|Cộng Hòa|Tân Phú|Đại Thành|Phú Mãn|Cấn Hữu|Tân Hòa|Hòa Thạch|Đông Yên|Đông Xuân"
    d_a['Thạch Thất']="Liên Quan|Đại Đồng|Cẩm Yên|Lại Thượng|Phú Kim|Hương Ngải|Canh Nậu|Kim Quan|Dị Nậu|Bình Yên|Chàng Sơn|Thạch Hòa|Cần Kiệm|Hữu Bằng|Phùng Xá|Tân Xã|Thạch Xá|Bình Phú|Hạ Bằng|Đồng Trúc|Yên Trung|Yên Bình|Tiến Xuân";
    d_a['Chương Mỹ']=" Chúc Sơn|Xuân Mai|Phụng Châu|Tiên Phương|Đông Sơn|Đông Phương Yên|Phú Nghĩa|Trường Yên|Ngọc Hòa|Thủy Xuân Tiên|Thanh Bình|Trung Hòa|Đại Yên|Thụy Hương|Tốt Động|Lam Điền|Tân Tiến|Nam Phương Tiến|Hợp Đồng|Hoàng Văn Thụ|Hoàng Diệu|Hữu Văn|Quảng Bị|Mỹ Lương|Thượng Vực|Hồng Phong|Đồng Phú|Trần Phú|Văn Võ|Đồng Lạc|Hòa Chính|Nam An";
    d_a['Thanh Oai']="Kim Bài|Cự Khê|Bích Hòa|Mỹ Hưng|Cao Viên|Bình Minh|Tam Hưng|Thanh Cao|Thanh Thùy|Thanh Mai|Thanh Văn|Đỗ Động|Kim An|Kim Thư|Phương Trung|Tân Ước|Dân Hòa|Liên Châu|Cao Dương|Xuân Dương|Hồng Dương";
    d_a['Thường Tín']="Thường Tín|Ninh Sở|Nhị Khê|Duyên Thái|Khánh Hà|Hòa Bình|Văn Bình|Hiền Giang|Hồng Vân|Vân Tảo|Liên Phương|Văn Phú|Tự Nhiên|Tiền Phong|Hà Hồi|Thư Phú|Nguyễn Trãi|Quất Động|Chương Dương|Tân Minh|Lê Lợi|Thắng Lợi|Dũng Tiến|Thống Nhất|Nghiêm Xuyên|Tô Hiệu|Văn Tự|Vạn Điểm|Minh Cường";
    d_a['Phú Xuyên']="Phú Minh|Phú Xuyên|Hồng Minh|Phượng Dực|Văn Nhân|Thụy Phú|Tri Trung|Đại Thắng|Phú Túc|Văn Hoàng|Hồng Thái|Hoàng Long|Quang Trung|Nam Phong|Nam Triều|Tân Dân|Sơn Hà|Chuyên Mỹ|Khai Thái|Phúc Tiến|Vân Từ|Tri Thủy|Đại Xuyên|Phú Yên|Bạch Hạ|Quang Lãng|Châu Can|Minh Tân ";
    d_a['Ứng Hòa']="Vân Đình|Viên An|Viên Nội|Hoa Sơn|Quảng Phú Cầu|Trường Thịnh|Cao Thành|Liên Bạt|Sơn Công|Đồng Tiến|Phương Tú|Trung Tú|Đồng Tân|Tảo Dương Văn|Vạn Thái|Minh Đức|Hòa Lâm|Hòa xá|Trầm Lộng|Kim Đường|Hòa Nam|Hòa Phú|Đội Bình|Đại Hùng|Đông Lỗ|Phù Lưu|Đại Cường|Lưu Hoàng|Hồng Quang";
    d_a['Mỹ Đức']=" Đại Nghĩa|Đồng Tâm|Thượng Lâm|Tuy Lai|Phúc lâm|Mỹ Thành|Bột Xuyên|An Mỹ|Hồng Sơn|Lê Thanh|Xuy Xá|Phùng Xá|Phù Lưu Tế|Đại Hưng|Vạn Kim|Đốc Tín|Hương Sơn|Hùng Tiến|An Tiến|Hợp Tiến|Hợp Thanh|An Phú";
    var c_a = new Array();
    
    
    
    $('#city').change(function(){
    
    var c = $(this).val();
    
    var state_arr = s_a[c].split("|");
    $('#state').empty();
    $('#district').empty();
    if(c==0){
        $('#state').append($('<option>', {
            value: '0',
            text: 'Chon Quận',
        }, '</option>'));
    }else {
        $.each(state_arr, function (i, item_state) {
            $('#state').append($('<option>', {
                value: item_state,
                text: item_state,
            }, '</option>'));
        });
    }
    $('#district').append($('<option>', {
        value: '0',
        text: 'Chọn Phường',
    }, '</option>'));
    
    });
    
    $('#state').change(function(){
    var s = $(this).val();
    if(s=='Chọn Quận'){
        $('#district').empty();
 
        $('#district').append($('<option>', {
            value: '0',
            text: 'Chọn Phường',
        }, '</option>'));
    }
    var district_arr = d_a[s].split("|");
    
    
    $.each(district_arr, function (j, item_district) {
        $('#district').append($('<option>', {
            value: item_district,
            text: item_district,
        }, '</option>'));
    });
    
    
    });

   
    });