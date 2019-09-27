var weight = ["", "", "", ""];
var numerator = ["", "", "", ""];
var denominator = ["", "", "", ""];
var percent = ["", "", "", ""];

// Percent 1
function Per1(){
    if(document.getElementById("A1-num").value < 0 || document.getElementById("A1-den").value < 0){
        window.alert("Error: Please enter positive number.");
        return;
    }

    weight[0] = document.getElementById("A1-wei").value;
    numerator[0] = document.getElementById("A1-num").value;
    denominator[0] = document.getElementById("A1-den").value;
    if(numerator[0] != "" && denominator[0] != ""){
        percent[0] = numerator[0]/denominator[0];
        document.getElementById("percent1").innerHTML = ((percent[0])*100).toFixed(2) + '%';
    }
    else{
        percent[0] = ""; 
        document.getElementById("percent1").innerHTML = " ";
    }

}

// Percent 2
function Per2(){
    if(document.getElementById("A2-num").value < 0 || document.getElementById("A2-den").value < 0){
        window.alert("Error: Please enter positive number.");
        return;
    }

    weight[1] = document.getElementById("A2-wei").value;
    numerator[1] = document.getElementById("A2-num").value;
    denominator[1] = document.getElementById("A2-den").value;
    if(numerator[1] != "" && denominator[1] != "" ){
        percent[1] = numerator[1]/denominator[1];
        document.getElementById("percent2").innerHTML = ((percent[1])*100).toFixed(2) + '%';
    }
    else{
        percent[1] = "";
        document.getElementById("percent2").innerHTML = " ";
    }
}

// Percent 3
function Per3(){
    if(document.getElementById("A3-num").value < 0 || document.getElementById("A3-den").value < 0){
        window.alert("Error: Please enter positive number.");
        return;
    }

    weight[2] = document.getElementById("A3-wei").value;
    numerator[2] = document.getElementById("A3-num").value;
    denominator[2] = document.getElementById("A3-den").value;
    if(numerator[2] != "" && denominator[2] != ""){
        percent[2] = numerator[2]/denominator[2];
        document.getElementById("percent3").innerHTML = ((percent[2])*100).toFixed(2) + '%';
    }
    else{
        percent[2] = "";
        document.getElementById("percent3").innerHTML = " ";
    }
}

// Percent 4
function Per4(){
    if(document.getElementById("A4-num").value < 0 || document.getElementById("A4-den").value < 0){
        window.alert("Error: Please enter positive number.");
        return;
    }

    weight[3] = document.getElementById("A4-wei").value;
    numerator[3] = document.getElementById("A4-num").value;
    denominator[3] = document.getElementById("A4-den").value;
    if(numerator[3] != "" && denominator[3] != ""){
        percent[3] = numerator[3]/denominator[3];
        document.getElementById("percent4").innerHTML = ((percent[3])*100).toFixed(2) + '%';
    }
    else{
        percent[3] = "";
        document.getElementById("percent4").innerHTML = " ";
    }
}

// Button WEIGHT
function calweight(){
    document.getElementById("result").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    var sum = 0;
    var n = 0;
    for(let i = 0; i<4; i++){
        if(weight[i] < 0){
            window.alert("Error: Please enter positive number.");
            return;
        }
        if(weight[i] != "" && percent[i] != ""){
            sum = Number(sum) + Number(percent[i])*Number(weight[i]);
            n = Number(n) + Number(weight[i]);
        } else if ( weight[i] == "" && percent[i] == ""){
            if(numerator[i] != "" || denominator[i] != ""){
                document.getElementById("result").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
                window.alert("Error: Missing Data");
                return;
            }
        }
        else{
            document.getElementById("result").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
            window.alert("Error: Missing Data");
            return;
        }
    }
    var result = sum/n;
    document.getElementById("result").innerHTML = (result*100).toFixed(2) + '%';
};

// Button MEAN
function calmean(){
    document.getElementById("result").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    var sum = 0;
    var n = 0;
    for(let i = 0; i<4; i++){
        if (percent[i] != ""){
            sum = Number(sum) + Number(percent[i]);
            n++
        }
        else if(percent[i] == ""){
            if(numerator[i] != "" || denominator[i] != ""){
                document.getElementById("result").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
                window.alert("Error: Missing Data");
                return;
            }
        }
    }
    var mean = sum/n;
    document.getElementById("result").innerHTML = (mean*100).toFixed(2) + '%';
};
