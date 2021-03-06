var NavBar = React.createClass({

	getInitialState: function() {

		return {
			navStyle: { padding: '10px 15px'}
		}

	},
	render: function() {

		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
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
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
				        <li><a href="#">Link</a></li>
				       
				      </ul>
				      <form className="navbar-form navbar-left" role="search">
				        <div className="form-group">
				          <input type="text" className="form-control" placeholder="Search" />
				        </div>
				        <button type="submit" className="btn btn-default">Submit</button>
				      </form>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#" style={this.state.navStyle} className='btn btn-default add'>+</a></li>		        
				      </ul>
				    </div>
				  </div>
				</nav>		

		   </div>
		);
	}

});