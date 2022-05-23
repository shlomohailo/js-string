function js_string_3_b(str) {
    var obj = {
        city: "haifa"
    }
    return obj[str];
}
js_string_3_b(city);


function getString(str) {
    if (str.length > 5) {
        return "long";
    }
    else {
        return "short";
    }
}
getString("shlomoo");

function getStringA(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            return (i);
        }
        else {
            return "not found";
        }
    }

}
getStringA("shloomo hilo");


function getStringR(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "r"){
            return "true";
        }
        else{
            return "false";
        }

    }

}
getStringR("rizhon");

function getStringAndTav(str, tav) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == tav) {
            return "true";
        }
        else {
            return "false";
        }

    }
}
getStringAndTav("shlomo", "h");

function terurenTreeTav() {
    var str = "sayonara";
    var getString = str.substr(0, 3);
    return getString;
}
terurenTreeTav();


function terurenEndTav() {
    var str = "sayonara";
    var getString = str.substr(2);
    return getString;
}
terurenEndTav();


function getStringAndIndex(str, index) {
    if (index > str.length) {
        return "big";
    }
    else {
        return str.substr(index);
    }
}
getStringAndIndex("shlomo", 4);


function getTwoString(str1, str2) {
    if (str1.length == str2.length){
        return str1 ;
    }
}
getTwoString("shlomo", "hailoo");

function getFullName(str) {
    console.log(str.length);
}
getFullName("shlmoo hailo");


function printTheLong(firstname,lastname) {
    if (firstname.length>lastname.length) {
        console.log(firstname);
    }
    else {
        console.log(lastname);
    }
}
printTheLong("shlomo","hailommm");

function printTheLong(firstname, lastname) {
   if (firstname.includes ("a")) {
       console.log(firstname);
   }
  if (lastname.includes("a"+"p"+"i")){
      return "no"
  }


}
printTheLong("shalomo", "asdafapi");

function toLongOrToshort(str) {
    if (str.length > 5){
        return "long";
    }
    else {
        return "short";
    }
}
toLongOrToshort("haifa");


function nameCantry(str) {
    if (str.length < 3) {
        return "no";
    }
    else {
        return "yes";
    }
}
nameCantry("israel");



function getStrAndTAV(str,index) {
    if (str.length>6) {
        return str;
    }
    else{
        return index;
    }
}
getStrAndTAV("shlomo","lo");




function getStringAndCahrc(str,tav) {
    if(str.includes(tav)){
        return str.indexof(tav);
    }
    else{
        return str;
    }
}
getStringAndCahrc("shlomoo","o");

function returnFirstNameAndLastNme(firstname, lastname) {
    return firstname.substr(1) + "." + " " + lastname.toUpperCase();
}
returnFirstNameAndLastNme("shlomo", "hailo");




function getTwoLastName(lname1, lname2) {
    if (lname1.length > lname2.length) {
        console.log(lname2.toLowerCase());
        return lname1;
    }
   else {
        console.log(lname1.toLowerCase());
        return lname2;
    }
}
getTwoLastName("hailo", "bery");