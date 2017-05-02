import React, {Component} from 'react';
import './App.css';
import * as Survey from 'survey-react';

class App extends Component {
    constructor() {
        super();
        this.surveyJson = {
           pages:[
              {
                 questions:[
                    {
                       type:"rating",
                       name:"satisfaction",
                       title:"How satisfied are you with the Product?",
                       mininumRateDescription:"Not Satisfied",
                       maximumRateDescription:"Completely satisfied"
                    },
                    {
                       type:"rating",
                       name:"satisfaction",
                       title:"How satisfied are you with the Product?",
                       mininumRateDescription:"Not Satisfied",
                       maximumRateDescription:"Completely satisfied"
                    }
                 ]
              }
           ]
        }
    }

    sendDataToServer(survey) {
       var resultAsString = JSON.stringify(survey.data);
       alert(resultAsString); //send Ajax request to your web server.
    };

  render() {
    return (
        <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToServer} />
    );
  }
}

export default App;
