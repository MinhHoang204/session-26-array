let arr = [1,2,3,4,5];
let n = sizeof(arr) / sizeof(arr[0]);
let x;
let count = 0;
console.log("Nhap gia tri can tim kiem", x);
for (let i = 0; i < n; i++){
    if (arr[i] == 0){
        count++;
    }
}
if (count > 0){
    console.log("So lan xuat hien cua phan tu la", x)
} else {
    console.log("Phan tu khong ton tai");
}