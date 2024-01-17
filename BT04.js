let a = prompt("Nhập số nguyên dương a");
let b = prompt("Nhập số nguyên dương b");
let arr[100], n = 0; 
for (let i = 1; i <= a; i++){
    if (i % b == 0){
        arr[n] = i;
        n++;
    }
}
for (let i = 1; i <= b; i++){
    if (i % a == 0){ 
        arr[n] = i;
        n++; 
    }
}
if (n == 0){
    console.log("Khong co phan tu nao thoa man");
} else {
    console.log("Cac phan tu thoa man la:");
    for (let i = 0; i < n; i++){
        console.log(arr[i]);
    }
}