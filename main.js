arr1=[];

function submit(){
    n1=document.getElementById("s1").value;
    n2=document.getElementById("s2").value;
    n3=document.getElementById("s3").value;
    n4=document.getElementById("s4").value;

    arr1.push(n1);
    arr1.push(n2);
    arr1.push(n3);
    arr1.push(n4);

    console.log(arr1);

    document.getElementById("display_name").innerHTML=arr1;
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline-block";

}

function sort(){
    arr1.sort();
    console.log(arr1);
    document.getElementById("display_name").innerHTML=arr1;
}