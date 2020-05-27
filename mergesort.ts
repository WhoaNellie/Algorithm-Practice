function mergeSort<T>(list:Array<T>): Array<T>{
    if(list.length < 2){
        return list;
    }
    
    let mid:number = Math.floor(list.length/2);
    let left:Array<T> = list.slice(0, mid);
    let right:Array<T> = list.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    let sorted:Array<T> = [];
    let leftIndex:number = 0;
    let rightIndex:number = 0;

    while(sorted.length < left.length + right.length){
        if((leftIndex < left.length) && 
           ((rightIndex === right.length) || (left[leftIndex] < right[rightIndex]))){
            sorted.push(left[leftIndex]);
            leftIndex++;
        }else{
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted;
}

let test = [6,5,3,6,8,0];

let sortTest = mergeSort(test);

console.log(sortTest);