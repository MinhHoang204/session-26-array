let a = [1,2,3,4,5];
let b = [2,4,6,8,10];
let c = [1,3,5,7,9];
let i = 0; j = 0; k = 0;
console.log("Cac phan tu chung cua 3 mang:");

while (i < 5 && j < 5 && k < 5) {
    if (a[i] == b[j] && b[j] == c[k]) {
        console.log(a[i]);
        i++;
        j++;
        k++;
    } else if (a[i] < b[j]) {
        i++;
    } else if (b[j] < c[k]) {
        j++;
    } else {
        k++;
    }
}