
function Timer(){
    let is_start = false;
    this.start = function (){
        if (!is_start)
        {
            is_start = true;
            
        }
        else
            console.log("it is started");
    }
}