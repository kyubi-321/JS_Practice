
function maxSumPair(arr){

    var maxSum=arr[0];

    for(let i=0;i<arr.length-1;i++){

        for(let j=i;j<arr.length-1;j++){

            if(arr[i]+arr[j]>maxSum && i!=j){

                maxSum = arr[i]+arr[j];

            }
        }
    }


    return maxSum;

}

arr=[1,2,34,6,8,7];

console.log(maxSumPair(arr));