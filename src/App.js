import React from 'react';
import './App.css';
import Accordion from './components/accordion.component'


const data = [
  {title: 'title1' ,
  description: "some description"
},
  {title: 'title2' ,
  description: "some description"
},
  {title: 'title13',
  description: "some description"
},
{title: 'title4' ,
  description: "some description"
}, 
{title: 'title5' ,
  description: "some description"
}, 
{title: 'title6' ,
  description: "some description"
}, 
{title: 'title7' ,
  description: "some description"
}
]



function App() {
  return (
    <div>
      <Accordion arr={data}/>
    </div>
  );
}

export default App;
