let numberArray = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numberArray.length; i++){
    if(numberArray[i] > 0){
        console.log("Các phần tử là số nguyên trong mảng", numberArray[i]);
    } else {
        console.log("Trong mảng không tồn tại số nguyên");
    }
}