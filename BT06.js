let n = prompt("Nhap so phan tu cua mang");
let a = prompt("Nhap cac phan tu cua mang");
for (let i = 0; i < n; i++){
    let a[i];
}
for (let i = 0; i < n; i++){
    if (a[i] < 0){
        for (let j = i; j > 0; j++){
            swap(a[j], a[j - 1]);
        }
    }
}
for (let i = 0; i < n; i++){
    if (a[i] > 0){
        for (let j = i; j < n - 1; j++){
            swap(a[j], a[j + 1]);
        }
    }
}
console.log("Mang sau khi sap xep:");
for (let i = 0; i < n; i++){
    console.log(a[i]);
}