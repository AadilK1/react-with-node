import React from "react";
import TestList from "../test-components";

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.setState =this.props;
     }

   componentDidMount(){
        console.log("Mounting....");
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
   }

   testfunction () {
    alert("here in parent");
   }

       // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


    render() {
      return (
       
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <TestList sampleParent={this.testfunction}/>
            </>
        </div>
        
      );
    }
  }


  export default ShoppingList;