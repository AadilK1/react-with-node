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
   }

   testfunction () {
    alert("here in parent");
   }


    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <TestList sampleParent={this.testfunction}/>
          </ul>
        </div>
      );
    }
  }


  export default ShoppingList;