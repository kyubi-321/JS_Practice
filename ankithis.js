
const badhani = {
    name: "Ankit",
    course:"B Tech",
    sum:function () {

        var add = 2+2;
        console.log(this.name);
        console.log(add);
        console.log(this);
        
    }

}

badhani.sum()
