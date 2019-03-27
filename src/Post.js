import React from "react"
import StyleButton from "./StyleButton"

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedClass: 'red',
            displayBtns: true,
            buttons:[
                {id: 1, buttonName: 'purple'},
                {id: 2, buttonName: 'cyan'},
                {id: 3, buttonName: 'ballons'},
                {id: 4, buttonName: 'clouds'},
                {id: 5, buttonName: 'thumbs'},
                {id: 6, buttonName: 'smile'},
              ]
        }
    }
    
    handleDisplayBtnClick = () => {
        this.setState(prevState => ({
            displayBtns: !prevState.displayBtns 
        }))
    }
    
    handleChange = e => {
        let btnId = e.currentTarget.dataset.id;
        switch (btnId) {
            case '1':
                this.setState({selectedClass: "purple" })
                break;
            case '2':
                this.setState({selectedClass: "cyan" })
                break;
            case '3':
                this.setState({selectedClass: "ballons" })
                break;
            case '4':
                this.setState({selectedClass: "clouds" })
                break;
            case '5':
                this.setState({selectedClass: "thumbs" })
                break;
            case '6':
                this.setState({selectedClass: "smile" })
                break;
            default: 
                this.setState({selectedClass: "default" })
          }
    }

    render() {
        return(
            <div className={`bg container ${this.state.selectedClass}`} >
                <input className="input" placeholder="What's on your mind?" type="text"/>
                <button className={this.state.displayBtns ? 'closeBtn' : 'openBtn'} onClick={this.handleDisplayBtnClick}>&nbsp;</button>
                
                { this.state.displayBtns ? 
                    <div className="btns">
                        {this.state.buttons.map(eachButtonNumber => 
                            <button 
                                key={eachButtonNumber.id} 
                                className={this.state.selectedClass === eachButtonNumber.buttonName ? 'active' : null}
                                data-id={eachButtonNumber.id} 
                                onClick={this.handleChange}
                            >&nbsp;</button>
                        )}
                    </div> 
                : null }
            </div>
        )
    }
}

export default Post