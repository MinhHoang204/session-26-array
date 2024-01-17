let n = prompt ("Nhap so phan tu cua mang");
let a = prompt ("Nhap cac phan tu cua mang");

for (let i = 0; i < n; i++){
    let a[i];
}
console.log("Cac phan tu xuat hien tu hai lan tro len trong mang");
for (let i = 0; i < n; i++){
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (a[i] == a[j]) {
            count++;
        }
    }
    if (count >= 2){
        console.log(a[i]);
    }
}