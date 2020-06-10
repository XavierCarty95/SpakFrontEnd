import React, { Component } from 'react'

export class Member extends Component {
    render() {
        const {image, first_name ,last_name , email ,  initiation_year , position} = this.props.members
        return (
        // <div className = "container">
        //   <div class="section center-align" style={{width: "300px"}}>
        //     <div class="places-grid " style={{width: "300px"}}>
               
        //          <div style = {{width:"300px"}} class="col s4 l4 m4 places-holder">
        //            <div class="card hoverable">
        //       <div class="card-image circle responsive-img" width="50" height= "265.16px">
        //         <span class="picture responsive-img"/>
        //         <img  style = {{height:'300px'}} src = {image} alt={first_name}/>
        //       </div>
        //       <div class="card-content mar-bottom">
        //            <span> Name: {first_name} {last_name}</span><br/>
                   
        //             <span> Position: {position} </span><br/>
        //             <span> Year: {initiation_year}  </span> <br/> 
                  
            
        //   </div>    
        //  </div>
        //  </div>
        //  </div>
        // </div>
        // </div>

  <div className = "container" style={{marginLeft: '720px'}}>
  <div class="col s12 m6 center-align" style={{width: '300px'}}>
    <div class="card center-align">
      <div class="card-image">
          
        <img src={image} style={{height: '300px'}}/>
      </div>
      <div class="card-content">
        <p>This is Brother {first_name} he crossed in {initiation_year} he serves as the {position} if you want to contact him you can email him at {email}

        
         </p>
      </div>
    </div>
  </div>
  </div>
  

     
        )
    }
}

export default Member
