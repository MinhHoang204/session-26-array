let n = prompt("Nhap so phan tu cua mang");
let a = propmt("Nhap cac phan tu cua mang");
for (let i = 0; i < n; i++){
    let a[i];
}

let sum = prompt ("Nhap so can tim:");
let found = false;
for (let i = 0; i < n; i++){
    let cur_sum = 0;
    for (let j = i; j < n; j++){
        cur_sum += a[j];
        if (cur_sum == sum){
            console.log("Mang con dau tien co tong bang", sum);
            for (let k = i; k <= j; k++){
                console.log(a[k]);
            }
            found = true;
            break;
        }
    }
    if (found){
        break;
    }
    if(!found){
        console.log("Khong co mang thoa man");
    }
}