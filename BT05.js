let arr = [1,2,3,4,5];
let n = sizeof(arr) / sizeof(arr[0]); 
for (let i = 0; i < n/2; i++){
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
}
console.log("Mang sau khi dao nguoc la:");
for (let i = 0; i < n; i++){
    console.log(arr[i]);
}