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
function checkpass(grade1,grade2,grade3,area,category,point){
    var total = grade1 + grade2 + grade3;
    switch (area) {
        case "A":
            if(category===1)
            {
                total = total + 2 + 2.5;
            }else if(category===2){
                total = total + 2 + 1.5;
            }else if(category===3)
            {
                total = total + 2 + 1;
            }else{
                total=total+2;
            }
            break;
        case "B":
            if(category===1)
            {
                total = total + 1 + 2.5;
            }else if(category===2){
                total = total + 1 + 1.5;
            }else if(category===3)
            {
                total = total + 1 + 1;
            }else{
                total=total+1;
            }
            break;
        case "C":
            if(category===1)
            {
                total = total + 0.5 + 2.5;
            }else if(category===2){
                total = total + 0.5 + 1.5;
            }else if(category===3)
            {
                total = total + 0.5 + 1;
            }else{
                total=total+0.5;
            }
            break;

        case "X":
            if(category===1)
            {
                total = total  + 2.5;
            }else if(category===2){
                total = total  + 1.5;
            }else if(category===3)
            {
                total = total  + 1;
            }else if(category===0){
                total=total;
            }
            break;
        default:
            break;
    }
    if(total>point && grade1>1 && grade2>1 && grade3>1)
    {
        console.log("BÀI 1:\n Bạn đã đỗ với số điểm: " + total);
    }
    else
    {
        console.log("BÀI 1:\n Bạn đã tạch với số điểm: " + total);
    }

}

checkpass(5,10,5,"A",2,14);

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
function checkBill(){
    var fullName = "Công Tiến";
    var kw = 250;
    var totalPrice;

    if(kw<=50){
        totalPrice = 500 * kw;
    } else if (kw <= 100){
        totalPrice = 500 *50 + (kw -50) *650;
    } else if (kw <= 200){
        totalPrice = 500 * 50 + 50 * 650 + (kw -100)*850;
    } else if (kw <= 350){
        totalPrice = 500 * 50 + 650 * 50 + 100*850 + (kw-200)* 1100;
    }else {
        totalPrice = 500 * 50 + 650 * 50 + 100*850 + 150 * 1100 +  (kw-350)* 1300;
    }

    console.log("Bài 2:\n Ông: ",fullName,"phải trả số tiền điện là: ", totalPrice)
}

checkBill();