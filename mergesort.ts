function mergeSort<T>(list:Array<T>): Array<T>{
    // if there is only one item, return
    if(list.length < 2){
        return list;
    }
    
    // creating sub arrays
    let mid:number = Math.floor(list.length/2);
    let left:Array<T> = list.slice(0, mid);
    let right:Array<T> = list.slice(mid);

    // sorting recursively
    left = mergeSort(left);
    right = mergeSort(right);

    // setting up for merge
    let sorted:Array<T> = [];
    let leftIndex:number = 0;
    let rightIndex:number = 0;

    // execute until all elements have been added
    while(sorted.length < left.length + right.length){
        // if left array is not exhausted and
        // if right array is exhausted or current left element is smaller than current right element
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