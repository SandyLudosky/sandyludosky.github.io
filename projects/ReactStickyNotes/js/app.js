var Editor = React.createClass({
	getInitialState: function() {
		return {
			editing: false,
			bg: { alizarin :  {background: '#e74c3c'}, 
			      lightBlue : {background: '#3498db'},
                  amethyste : {background: '#9b59b6'},
                  sunflower : {background: '#f1c40f'},
                  turquoise : {background: '#1abc9c'},
				}
		}
	},
	getFontSize: function() {
		var font_value = this.refs.fontSize.value;

	},
	render: function(){
		return (

			<div id="editor">
				<ul className='colorPalette right'>
					<li><button className="alizarin"  style={this.state.bg.alizarin}  onClick={this.props.color}></button></li>
					<li><button className="lightBlue" style={this.state.bg.lightBlue} onClick={this.props.color}></button></li>
					<li><button className="amethyste" style={this.state.bg.amethyste} onClick={this.props.color}></button></li>
					<li><button className="sunflower" style={this.state.bg.sunflower} onClick={this.props.color}></button></li>
					<li><button className="turquoise" style={this.state.bg.turquoise} onClick={this.props.color}></button></li>
				</ul>

				<select id="font" ref="fontSize"  onChange={this.props.fontSize}>
					<option selected>size</option>
					<option value="small">small</option>
					<option value="normal">normal</option>
					<option value="large">large</option>
				</select>

					<div className="clear"></div>
				<ul className='right'>
					<li><button onClick={this.props.save}>save</button></li>
				</ul>
			</div>
		);
	}
});
var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    randomPosition: function(n) {
        return (Math.ceil(Math.random() * n));
    },
    componentWillMount: function() { 

		var container = (window.document.children)[0].children[1].children[0];
	 
        this.style = {
        	left: (this.randomPosition(container.clientWidth))-175 + 'px',
        	top: (this.randomPosition(window.innerHeight))- 175 + 'px',
          };     
    },
     componentDidMount: function(e){

        $(this.getDOMNode()).draggable();


        console.log(e.currentTarget.attributes.style)
        var currentTarget = this.getDOMNode().children;

        this.style = {
        	left: e.currentTarget.attributes.style.left,
        	top: e.currentTarget.attributes.style.top,
            position: absolute
            // background: colordone
         };
    },
    edit: function(e) {
        this.setState({editing: true});
        this.style = {
            left: e.currentTarget.attributes.style,
            top: e.currentTarget.attributes.style,
        };
    },
    save: function() {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div>
				<div id="noteDisplay" ref="noteDisplay" style={this.style} className={this.className} onChange={this.fontSize}>
					<div >			    					
						<p onClick={this.edit}>{this.props.children}</p>
					</div>
					<button className="remove" onClick={this.remove}>x</button>
				</div>					
			</div>
            );
    },
    renderForm: function() {
        return (
           <div id="noteDisplay" ref="noteDisplay" style={this.style} className={this.className}>
				<div>
				 	<textarea defaultValue={this.props.children} ref="EditedNote"></textarea>
					<Editor getInitialState={this.getInitialState} color={this.color} save={this.save} fontSize={this.fontSize}/>				
			   	</div>	
			</div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: []
        };
    },
    nextId: function() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    add: function(text) {
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({notes: arr});
    },
    update: function(newText, i) {
        var arr = this.state.notes;
        arr[i].note = newText;
        this.setState({notes:arr});
    },
    remove: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    eachNote: function(note, i) {
        return (
                <Note key={note.id}
                    index={i}
                    onChange={this.update}
                    onRemove={this.remove}
                >{note.note}</Note>
            );
    },
    render: function() {
        return (<div className="board">
                    {this.state.notes.map(this.eachNote)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                            onClick={this.add.bind(null, "")}/>
            </div>

        );
    }
});


React.render(<Board />, 
    document.getElementById('note'));










