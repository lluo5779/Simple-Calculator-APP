import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
class Operator extends React.Component{

}

class Number extends React.Component{

}
*/

class Square extends React.Component{
    render(){
        return(
            <button className="square" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }    
}


class Screen extends React.Component{
    render(){
        return(
            <h1>{this.props.value}</h1>
        )
    }
}

/*
class InputScreen extends React.Component{
    
}

class OutputScreen extends React.Component{
    
}
*/

class Board extends React.Component{
	constructor(props){
        super(props)
        var li = ['CE','C','<-','/',
                    '7','8','9','*',
                    '4','5','6','-',
                    '1','2','3','+',
                    '0','00','.','='];
            
		this.state = {currentInput:'0',
                      validKeys:li,
                    };
	}
    
    renderButtons(i){
        const currKey = this.state.validKeys[i];
        
        if (1+parseFloat(currKey)){
            return <Square value={currKey} onClick={()=>this.appendNumber(currKey)} />
        } else if ([0,1].includes(i)){
            return <Square value={currKey} onClick={()=>this.clearScreen()} />
        } else if (i === 2){
            return <Square value={currKey} onClick={()=>this.removeLastKey()} />
        } else if ([3,7,11,15,18].includes(i)){
            return <Square value={currKey} onClick={()=>this.appendNumber(currKey)} />
        } else if (i === 19){
            return <Square value={currKey} onClick={()=>this.evaluateExpression(currKey)} />
        }
    }
            
    evaluateExpression(){
        try{
            var ans = eval(this.state.currentInput).toString();
            this.setState({
                currentInput: ans,
            })
        }
        catch (err){
            alert('Error in Expression!')
        }
        
    }
    
    removeLastKey(){
        var ans = this.state.currentInput;
        ans = ans.slice(0,ans.length-1).toString();
        if (ans === ''){
            ans = '0';
        }
        this.setState({
            currentInput: ans,
        })
    }       
            
    clearScreen(){
        this.setState({
            currentInput: '0',
        })
    }

    appendNumber(val){
        var ans = (this.state.currentInput+val);
       /* if (this.state.currentInput.slice(0,1) === '0'){
            ans = Number.parseFloat(ans)
        }
       */
        
        if (ans.charAt(0) ==='0'){
            ans = Number.parseFloat(ans);
        }
        
        this.setState({
            currentInput:ans,
        })
    }    
        
	render(){
		return(
            <div>
			<div className="container">

                <div className="board-row">
                    <Screen value={this.state.currentInput} />
                </div>

				<div className="board-row">
                    <div class="col"> {this.renderButtons(0)}
                    </div>
                    <div class="col"> {this.renderButtons(1)}
                    </div>
                    <div class="col"> {this.renderButtons(2)}
                    </div>
                    <div class="col"> {this.renderButtons(3)}
                    </div>
                </div>
                                       
				<div className="board-row">
                    <div class="col"> {this.renderButtons(4)}
                    </div>
                    <div class="col"> {this.renderButtons(5)}
                    </div>
                    <div class="col"> {this.renderButtons(6)}
                    </div>
                    <div class="col"> {this.renderButtons(7)}
                    </div>
                </div>
                                       
				<div className="board-row">
                    <div class="col"> {this.renderButtons(8)}
                    </div>
                    <div class="col"> {this.renderButtons(9)}
                    </div>
                    <div class="col"> {this.renderButtons(10)}
                    </div>
                    <div class="col"> {this.renderButtons(11)}
                    </div>
                </div>
                                       
				<div className="board-row">
                    <div class="col"> {this.renderButtons(12)}
                    </div>
                    <div class="col"> {this.renderButtons(13)}
                    </div>
                    <div class="col"> {this.renderButtons(14)}
                    </div>
                    <div class="col"> {this.renderButtons(15)}
                    </div>
                </div>
                          
				<div className="board-row">
                    <div class="col"> {this.renderButtons(16)}
                    </div>
                    <div class="col"> {this.renderButtons(17)}
                    </div>
                    <div class="col"> {this.renderButtons(18)}
                    </div>
                    <div class="col"> {this.renderButtons(19)}
                    </div>
                </div>
            </div>  
            </div>
            
            );
	}
}
    
    

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);


        /*
                <div class="row">
                    {Array.from({length: 4}, (_, i)=>(
                        <div key={i} class="col"> <Square value={this.state.validKeys.slice(0,4)[i]} /></div>
                    ))}
                </div>*/