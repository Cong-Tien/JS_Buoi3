// BÀI 1: Quản lý tuyển sinh

/*
     Sơ đồ 3 khối

     INPUT: điểm 3 môn,điểm chuẩn, mã khu vực, mã đối tượng

     PROCESS:
       1. Lấy input (grade1,grade2,grade3,area,category,point)
       2. Kiểm tra điều kiện xem có điểm nào < 0 => tạch
       3. Tính tổng điểm 3 môn
       4. Xét trường hợp cho từng khu vực, trong mỗi khu vự sẽ được cộng điểm tương ứng như khu vực = A => + 2, B +1, C + 0.5, X + 0
       5. Xét loại đối tượng trong mỗi khu vực trên nếu khu vực = 1 => +2.5, 2 => 1.5, 3 => 1, 0 => +0
       6. Tính tổng điểm cuối cùng = tổng 3 môn + điểm khu vực + điểm đối tượng
       7. So sánh tổng điểm với điểm chuẩn của trường nếu > => đỗ, < => tạch
       8. In ra màn hình kết quả tuyển sinh

    OUTPUT: kết quả tuyển sinh 


 */
function checkpass(grade1, grade2, grade3, area, category, point) {
    var total = grade1 + grade2 + grade3
    switch (area) {
        case 'A':
            if (category === 1) {
                total = total + 2 + 2.5
            } else if (category === 2) {
                total = total + 2 + 1.5
            } else if (category === 3) {
                total = total + 2 + 1
            } else {
                total = total + 2
            }
            break
        case 'B':
            if (category === 1) {
                total = total + 1 + 2.5
            } else if (category === 2) {
                total = total + 1 + 1.5
            } else if (category === 3) {
                total = total + 1 + 1
            } else {
                total = total + 1
            }
            break
        case 'C':
            if (category === 1) {
                total = total + 0.5 + 2.5
            } else if (category === 2) {
                total = total + 0.5 + 1.5
            } else if (category === 3) {
                total = total + 0.5 + 1
            } else {
                total = total + 0.5
            }
            break

        case 'X':
            if (category === 1) {
                total = total + 2.5
            } else if (category === 2) {
                total = total + 1.5
            } else if (category === 3) {
                total = total + 1
            } else if (category === 0) {
                total = total
            }
            break
        default:
            break
    }
    if (total > point && grade1 > 1 && grade2 > 1 && grade3 > 1) {
        console.log('BÀI 1:\n Bạn đã đỗ với số điểm: ' + total)
    } else {
        console.log('BÀI 1:\n Bạn đã tạch với số điểm: ' + total)
    }
}

checkpass(5, 10, 5, 'A', 2, 14)

// BÀI 2: Tính tiền điện

/*
     Sơ đồ 3 khối

     INPUT: tên người dùng, số điện tiêu thụ

     PROCESS:
       1. Lấy input (name,kw)
       2. Nếu số điện tiêu thụ < 50 => giá = 500 * 1kw
       3. Nếu số điện tiêu thụ <= 100 => giá = 500 *50 + (kw -50) *650;
       4. Nếu số điện tiêu thụ <=200 => giá = 500 * 50 + 50 * 650 + (kw -100)*850
       5. Nếu số điện tiêu thụ <=350 => giá = 500 * 50 + 650 * 50 + 100*850 + (kw-200)* 1100
       6. Nếu số điện tiêu thụ >350 => giá = 500 * 50 + 650 * 50 + 100*850 + 150 * 1100 +  (kw-350)* 1300
       7. In ra số tiền phải trả ra màn hình
    OUTPUT: số tiền phải trả


 */
function checkBill() {
    var fullName = 'Công Tiến'
    var kw = 250
    var totalPrice

    if (kw <= 50) {
        totalPrice = 500 * kw
    } else if (kw <= 100) {
        totalPrice = 500 * 50 + (kw - 50) * 650
    } else if (kw <= 200) {
        totalPrice = 500 * 50 + 50 * 650 + (kw - 100) * 850
    } else if (kw <= 350) {
        totalPrice = 500 * 50 + 650 * 50 + 100 * 850 + (kw - 200) * 1100
    } else {
        totalPrice = 500 * 50 + 650 * 50 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300
    }

    console.log('Bài 2:\n Ông: ', fullName, 'phải trả số tiền điện là: ', totalPrice)
}

checkBill()

// Bài 3: Tính thuế thu nhập

/*
     Sơ đồ 3 khối

     INPUT: tên,thu nhập năm, số người phụ thuộc
     PROCESS:
       1. Lấy input (name, income, dependents)
       2. Tính thu nhập chịu thuế = income - 4 - dependents * 1.6 ;//đơn vị: triệu
       3. Nếu thu nhập chịu thuế <= 60 => yourtax = incometax * 0.05;
       4. Nếu thu nhập chịu thuế <= 120 =>  yourtax = 60 *0.05 + (incometax -60) *0.1;
       5. Nếu thu nhập chịu thuế <= 210 => yourtax = 60 * 0.05 + 120 * 0.1 + (incometax -120)*0.15;
       6. Nếu thu nhập chịu thuế <= 384 => yourtax = 60 * 0.05 + 120 * 0.1 + 210*0.15 + (incometax-210)* 0.2;
       7. Nếu thu nhập chịu thuế <= 624 => yourtax = 60 * 0.05 + 120 * 0.1 + 210*0.15 + 384*0.2 + (incometax-384)* 0.25;
       8. Nếu thu nhập chịu thuế <= 960 => yourtax = 60 * 0.05 + 120 * 0.1 + 210*0.15 + 384*0.2 + 624*0.25+ (incometax-624)* 0.3;
       9. Nếu thu nhập chịu thuế > 960 => yourtax = 60 * 0.05 + 120 * 0.1 + 210*0.15 + 384*0.2 + 624*0.25+ 960*0.3 + (incometax-960)* 0.35;
       10. In ra màn hình thuế phí phải chịu

    OUTPUT: thuế phía phải chịu

 */
function tax(name, income, dependents) {
    var incometax = income - 4 - dependents * 1.6 //đơn vị: triệu
    var yourtax = 0
    if (incometax <= 60) {
        yourtax = incometax * 0.05
    } else if (incometax <= 120) {
        yourtax = 60 * 0.05 + (incometax - 60) * 0.1
    } else if (incometax <= 210) {
        yourtax = 60 * 0.05 + 120 * 0.1 + (incometax - 120) * 0.15
    } else if (incometax <= 384) {
        yourtax = 60 * 0.05 + 120 * 0.1 + 210 * 0.15 + (incometax - 210) * 0.2
    } else if (incometax <= 624) {
        yourtax = 60 * 0.05 + 120 * 0.1 + 210 * 0.15 + 384 * 0.2 + (incometax - 384) * 0.25
    } else if (incometax <= 960) {
        yourtax =
            60 * 0.05 + 120 * 0.1 + 210 * 0.15 + 384 * 0.2 + 624 * 0.25 + (incometax - 624) * 0.3
    } else {
        yourtax =
            60 * 0.05 +
            120 * 0.1 +
            210 * 0.15 +
            384 * 0.2 +
            624 * 0.25 +
            960 * 0.3 +
            (incometax - 960) * 0.35
    }
    console.log('BÀI 1: \n Thuế thu nhập của khách hàng', name, ' phải trả là: ' + yourtax)
}
tax('Tiến', 10, 0)

// Bài 2: Tính tiền cap

/*
     Sơ đồ 3 khối

     INPUT: tên,loại cap, số kết nối, số kênh cao cấp
     PROCESS:
       1. Lấy input (name, income, dependents)
       2. Xét trường hợp nếu loại cap = 1(nhà dân) => phí = 4.5 + 20.5 + 7.5*số kênh cao cấp;
       3. Xét trường hợp nếu loại cap = 2(doanh nghiệp) với 10 kết nối đầu (connect <= 10) => phí = 15  + 75*số kết nối + 50 * số kênh cap cấp;
       4. Xét trường hợp nếu loại cap = 2(doanh nghiệp) với dịch vụ hơn 10 kết nối (connect > 10) => phí = 15 + 75*10 + (số kết nối-10)*15 + 50 * số kênh cap cấp;;
       5. In ra màn hình số phí cáp phải trả

    OUTPUT: số phí cáp phải trả

 */

function cap(name, category, connect, vip) {
    var fee=0;
    switch (category) {
        case 1:
            connect =0; //Trường hợp là cap nhà dân thì set số kết nối tự động bằng 0
            fee = 4.5 + 20.5 + 7.5*vip;
            console.log("BÀI 2:\n Phí cáp mà khách hàng:",name," phải trả là: ",fee);
            break
        case 2:
            if(connect<=10){
                fee = 15  + 75*connect + 50 * vip;
            }
            else{
                fee = 15 + 75*10 + (connect-10)*15 + 50 * vip;
            }          
            console.log("BÀI 2:\n Phí cáp mà khách hàng:",name," phải trả là: ",fee)
            break

        default:
            break
    }
}

cap("Tiến",2,11,1);
