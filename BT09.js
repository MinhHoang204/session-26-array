let n = prompt ("Nhap so phan tu cua mang");
let a = prompt ("Nhap cac phan tu cua mang");

for (let i = 0; i < n; i++){
    let a[i];
}

let min = 1;
while(true){
    let found = false;
    for (let i = 0; i < n; i++) {
        if (a[i] == min) {
            found = true;
            break;
        }
    }
    if (!found) {
        break;
    }
    min++;
}
console.log("Phan tu lon hon 0 nho nhat chua xuat hien trong mang", min);