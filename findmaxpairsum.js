
function maxSumPair(arr){

    var maxSum=arr[0]+arr[1];
    var pair = [arr[0] , arr[1]];

    for(let i=0;i<arr.length-1;i++){

        for(let j=i;j<arr.length-1;j++){

            if(arr[i]+arr[j]>maxSum && i!=j){

                maxSum = arr[i]+arr[j];
                pair=[arr[i] , arr[j]];

            }
        }
    }


    return {maxSum , pair};

}

arr=[1,2,34,6,100,200,200,300,7];

console.log(maxSumPair(arr));