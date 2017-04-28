var React = require('react');
var ReactDOM = require('react-dom');

//https://github.com/STRML/react-localstorage
var LocalStorageMixin = require('react-localstorage');

// var Rebase = require('re-base');
// var base = Rebase.createClass('https://stickynote.firebaseio.com/')


/* App */


var NavBar = React.createClass({

    getInitialState: function() {

        return {
            navStyle: { padding: '10px 15px'}
        }

    },
    noSubmit: function(e) {
        e.preventDefault();
    },
    render: function() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     
                      <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>

                      <form className="navbar-form navbar-right" role="search" onSubmit={this.noSubmit}> 
                        <button type="submit" className='btn btn-default btn-success glyphicon glyphicon-plus' onClick={this.props.add.bind(null, "New Note")}></button>
                      </form>
                 

                    </div>
                  </div>
                </nav>      

           </div>
        );
    }

});
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
                    <li><button onClick={this.props.save} style={{color: '#000'}} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk" /></li>
                </ul>
            </div>
        );
    }
});
var Note = React.createClass({
    getInitialState: function() {
        return {
            editing: false,
            colors: ['#e74c3c','#3498db', '#9b59b6', '#f1c40f','#1abc9c'],            
            colorClasses: ['lightBlue note', 'amethyste note', 'sunflower  note', 'turquoise note', 'alizarin note']
        }        
    },
     colorWheel: function(color) {
            
            var index = Math.floor(Math.random()* color.length);            
            return color[index];
    },
    componentWillMount: function() {
    
        var color_classes = this.state.colorClasses;
        var colorpick = this.colorWheel(color_classes);

        this.style = {
            right: this.randomPosition(0, window.innerWidth - 150) + 'px',
            top: this.randomPosition(0, window.innerHeight - 150) + 'px'
    
        };
        this.className = colorpick;
    },
    componentDidMount: function(){
        $(this.getDOMNode()).draggable();
    },
    randomPosition: function(min, max) {
        return (min + Math.ceil(Math.random() * max));
    },
    color: function(e) {

        var color_selected = e.target.className;
        //this.refs.noteDisplay.style.background = null;
        this.refs.noteDisplay.className = color_selected + " note";   

        console.log(color_selected)

    },
    colorWheel: function(color) {
            
            var index = Math.floor(Math.random()* color.length);            
            return color[index];
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        this.props.onChange(this.refs.newText.value, this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className={this.className} ref="noteDisplay" style={this.style}
                onClick={this.edit}>
                <div>
                    <p>{this.props.children}</p>
                 
                        <button className="remove" onClick={this.remove}>x</button>                  
                  </div>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className={this.className}  ref="noteDisplay" style={this.style}>
                <textarea ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
                <Editor getInitialState={this.getInitialState} color={this.color} save={this.save} fontSize={this.fontSize}/>   
                <button className="remove" onClick={this.remove}>x</button>
               
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
    mixins: [LocalStorageMixin],

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
        }
    },
    nextId: function() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    componentDidMount: function() {
        console.log('component did mount');
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
        return (<div>
                <NavBar add={this.add}/>
                    {this.state.notes.map(this.eachNote)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                            onClick={this.add.bind(null, "New Note")}/>
               </div>

        );
    }
});


ReactDOM.render(<Board count={2}/>, 
 