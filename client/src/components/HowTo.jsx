import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default class HowTos extends Component {
  render () {
  const popover = (
    <Popover id="popover-basic" title="The journey begins!">
      This section allows you to add habits that you would like to master to the list by pressing the add button.
    </Popover>
  );
  const popover1 = (
    <Popover id="popover-basic" title="Giving up on yourself?">
      This button allows you to be a quitter by deleting this habit from your list ...nobody likes quitters.
    </Popover>
  );
  const popover2 = (
    <Popover id="popover-basic" title="Gamify my life!">
      This button allows you to subtract 5% to the progress bar.
    </Popover>
  );
  const popover3 = (
    <Popover id="popover-basic" title="Small improvements = Big change!">
      This button allows you to master your habit 5% at a time! 
    </Popover>
  );
  const popover4 = (
    <Popover id="popover-basic" title="A Dragon has been born!">
      This button allows you to master all of your inner demons and become a Demi-God one habit at a time!. It will also send this habit to the archive where you can drown yourself in self-pride.
    </Popover>
  );
 
  return (
    <div>
      <center>
        <div>
					<h1>Kaizen<h6>Learn how to use the main app by clicking on the buttons!</h6></h1>
						<label>Enter a new habit: </label>
						<input placeholder="Example habit" type="text"/>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
						<button className="bHT">Add</button></OverlayTrigger>
				</div>
        <br/>
        <br/>
        <div className="App">
          <div>
            <div>Example habit
              <OverlayTrigger trigger="click" placement="left" overlay={popover1}><button className="del2" >
								Give up 
							</button></OverlayTrigger>
							<div className="bar">
					  		<div className="bar"><OverlayTrigger trigger="click" placement="down" overlay={popover2}><p className="barx" >-</p></OverlayTrigger></div> 
						  	<div className="bar"><ProgressBar className="barxz" striped animated variant="warning" now={60} label={'60%'}/></div>
								<div className="bar"><OverlayTrigger trigger="click" placement="down" overlay={popover3}><p className="barx" >+</p></OverlayTrigger></div>
							</div>
							<OverlayTrigger trigger="click" placement="right" overlay={popover4}><button className="del2">
								Mastered!
							</button></OverlayTrigger>
						</div>
					</div>
        </div>
        <br/>
      </center>
    </div>
  )
}}