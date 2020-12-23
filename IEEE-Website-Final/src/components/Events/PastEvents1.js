import Booklet from "booklet-react-component";
import React, { useState, useEffect,  Component } from "react";
import event1 from '../../img/Events/AI&MLmain.jpg'
import event2 from '../../img/Events/AI&MLday1.jpg'
import event3 from '../../img/Events/AI&MLday2.jpg'
import event4 from '../../img/Events/AI&MLday3.jpg'
import completed from '../../views/Events.js'

class UsingBookletComponent extends Component  {
  
  constructor() {
    super();
    this.state = {
      index: 1,
      flipPageIndex: 1
    };
 }
  genNextPages = () => {
    this.setState({
      index: this.state.index + 2
    });
  };
  genPrevPages = () => {
    this.setState({
      index: this.state.index - 2
    });
  };
  flipPageIndexForward = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex + 1
    });
  };
  flipPageIndexBack = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex - 1
    });
  };

  render() {
        
    return (
      <>
      <div id="eve" className="pokemon__img whole">
        <Booklet
          flipPageIndex={this.state.flipPageIndex}
          index={this.state.index}
          nextPage={this.genNextPages}
          prevPage={this.genPrevPages}
          pages={[
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event1} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event2} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event3} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event4} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event1} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event2} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>,
            <div style={{objectFit:"cover", height:"25vh", width: "40vh"}}><img src={event3} style={{objectFit:"fill", height:"25vh", width: "40vh"}}/></div>
          ]}
        />

        <div className="button-container" style={{ width: "max-content",margin: "20px auto" }}>
          <button className="btn" onClick={this.flipPageIndexBack} style={{margin: "20px"}}>
            Prev
          </button>
          <button className="btn" onClick={this.flipPageIndexForward} style={{margin: "20px"}}>
            Next
          </button>
        </div>
      </div>
  </>
    );
  }
}

export default UsingBookletComponent;
