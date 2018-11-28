import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY="3105bd16661d2bc7fb6aef5d15747519";

class App extends React.Component{

  state ={
     
     temperature: undefined,
     city:undefined,
     country:undefined,
     humidity:undefined,
     description:undefined,
     error:undefined

  }

  getweather= async (e) =>{

    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api_call.json();
    if(city&&country){

      console.log(data);
    this.setState({

      temperature:data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });
  }
       else{
          console.log(data);
    this.setState({

      temperature:undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:"Please Enter the values"
    });


       }
  }

  render(){

    return(
           <div>
            <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                         <Titles/>
                      </div>
                        <div className="col-xs-7 form-container">
                                    <Form getweather={this.getweather}/>
                                    <Weather temperature={this.state.temperature}
                                     city={this.state.city}
                                     country={this.state.country}
                                     humidity={this.state.humidity}
                                     description={this.state.description}
                                     error={this.state.error}
                
                                        />
                          </div>
                  </div>
                </div>
              </div>
            </div>


           </div>
    );
  }
}; 

 
           

export default App; 