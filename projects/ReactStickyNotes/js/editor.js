var Editor = React.createClass({
	
	getInitialState: function() {
        return {
			editing: false, 
			bg: { pink : {background: 'pink'}, 
			      blue : {background: 'lightblue'},
                  yellow : {background: 'yellow'},
                  tomato : {background: 'tomato'}
				 }, 		
			new_bg: {background: 'pink'}
		
		}
    }, 
    color: function(e) {
		
		// http://stackoverflow.com/questions/1553661/how-to-get-the-onclick-calling-object
		var a = e.target.props.title;
		var selected = this.refs.selected;
		selected.style.background = a;
		//selected.setState({bg: a })
		
		console.log(a)
		console.log(selected)
		
		for(var key in (this.state.bg)) {
    		console.log((this.state.bg)[key]);
		}
		
		this.setState({new_bg: {background: a}})
		
	},  
	render: function(){
		return (

			<div id="editor">
				<ul className='color right'>
					<li><button className="alizarin"></button></li>
					<li><button className="lightBlue"></button></li>
					<li><button className="amethyste"></button></li>
					<li><button className="sunflower"></button></li>
					<li><button className="turquoise"></button></li>
				</ul>

				<select id="font">
					<option selected>size</option>
					<option value="small">small</option>
					<option value="normal">normal</option>
					<option value="large">large</option>
				</select>

					<div className="clear"></div>
				<ul className='right'>
					<li><button>save</button></li>
				</ul>
			</div>
		);
	}
});