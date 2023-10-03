class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper name:"CamperBot}/>
        </div>
      );
    }
  };
  // Change code below this line
  
class Camper extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: 'CamperBot'
      };
    }
    render() {
      return (
        <p> My Name is {this.props.name}</p>
        
      )
    }
  }