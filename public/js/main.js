//cityname empty karu nai mahnun
const cityname =document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name =document.getElementById('city_name');

//array data  inside which temp data will get d=store
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
   

    //search kela te city cityval madhe VARIABLE LA  value janar
    let cityVal = cityname.value;
    if(cityVal===""){
        //if that search part is empty
        //search kelya agodar/ default
       city_name.innerText = `Please write the name before search`;
       
       datahide.classList.add('data_hide');
    }else{
        //jar url  madhe kahi problem lla tr error catch karnya sathi try catch method use karto apan
        try{
             //jar kahi search madhe asel tarach api use kara
               // to get data from API(open source waether data) werre units=matric because data will collect in matric format 
            let url  = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=459bf5f184236e7c317e48f52ce543fc`
            //now fteching api and storing that data/response into response variable
            //aawait is for wait till data snyc
            const response = await fetch(url);
            //response will get in JSON format
            //need to convert it into javascript
            const data = await response.json();
            console.log(response);
            //so upto here you will get data in inspect
            //now need to store data in array
            const arrData = [data];

            //to get temp and cityname  from array
            city_name.innerText =  `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText =arrData[0].main.temp;
            //temp_status.innerText =arrData[0].weather[0].main;

            //due to below line ther is no need of upper line
            const tempMood = arrData[0].weather[0].main;

            //to cj=heck weather sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    
                }
                datahide.classList.remove('data_hide');
        
        }catch{
            //jr kahi r=error asel / empty asel tar
            city
            city_name.innerText = `Please write the name before search`;
            datahide.classList.add('data_hide');
            console.log("Please add the proper city name");
        }
       
    }
}
// through this you will get list of entries once we click on the submitbtn and thet entries will get store in the getInfo
submitBtn.addEventListener('click', getInfo);