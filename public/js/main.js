const datahide = document.querySelector('.middle_layer');
const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_real_val = document.getElementById('temp_real_val')
submitBtn.addEventListener('click', async(event)=>{
    event.preventDefault();
    let search = cityName.value
    if(search == ""){
            city_name.innerHTML = `Please Enter the valid city name else get the fuck out of my website`
            datahide.classList.add('data_hide')
    }
    else{
        try{
          
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ae3e426845028aa48f96ec0eb64187cc`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata  = [data];
            
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp_real_val.innerText = arrdata[0].main.temp;
           
              const tempMood = arrdata[0].weather[0].main
             //condition to check sunny or cloudy
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
                cityVal = "";
               
        }
        catch(error){
            cityVal = " ";
            console.log(error);
            datahide.classList.add("data_hide");
            city_name.innerHTML = `no data found`
        }
    }
  
})