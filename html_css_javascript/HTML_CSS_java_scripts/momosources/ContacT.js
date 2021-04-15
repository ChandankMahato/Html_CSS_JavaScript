function UpdateDate(){
    document.getElementById("DATE").value=Date();
}

function DefaultValue(){
    if(document.getElementById("default").value==""){
        document.getElementById("default").value="NO";
    }
}