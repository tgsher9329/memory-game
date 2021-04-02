import React from 'react'
import './MemoryCard.css';

class MemoryCard extends React.Component {
    
    render() {
        
        let innerClass = "MemoryCard__inner "

        if(this.props.isFlipped) {
            innerClass = innerClass.concat("flipped")
        }

    return (
    <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={innerClass}>
            <div className="MemoryCard__back">
            </div>
            <div className="MemoryCard__front">
                {this.props.symbol}
            </div>
        </div>
    </div>
    )
    }
}

export default MemoryCard