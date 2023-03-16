import React from "react";

class TestList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
     }

   componentDidMount(){
        console.log("Mounting....");
        this.props.sampleParent();
   }

  calltoParent(){
    console.log("calling parent");
   
  }


    render() {
        return (
          <ul>
            <li>Tiktok</li>
            <li>Telegram</li>
            <div>
          <a href='javascript:void(0)' onClick={() => this.props.sampleParent()}>Oculus</a>
          </div>
          </ul>
        );
      }
    }

  export default TestList;