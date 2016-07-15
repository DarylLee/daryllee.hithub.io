var clicks = {Shipper_Name: 0, Mode: 0, Origin_City: 0, Origin_State: 0, Pickup_Zip: 0, Consignee_Name: 0, Destination_City: 0, Destination_Zip:0, Invoice_Total: 0};

/*** TABLE COLUMN HEADERS ***/
var ColumnHeaders = React.createClass({
  onClick: function(e) {
    // bubble up
  },
  render: function() {
    return (
      <tr onClick={this.onClick}>
        <th data-value="Shipper_Name" onClick={this.onClick}>Shipper Name</th>
        <th data-value="Mode" onClick={this.onClick}>Mode</th>
        <th data-value="Origin_City" onClick={this.onClick}>Origin City</th>
        <th data-value="Origin_State" onClick={this.onClick}>Origin State</th>
        <th data-value="Pickup_Zip" onClick={this.onClick}>Origin Zip</th>
        <th data-value="Consignee_Name" onClick={this.onClick}>Consignee Name</th>
        <th data-value="Destination_City" onClick={this.onClick}>Destination City</th>
        <th data-value="Destination_State" onClick={this.onClick}>Destination State</th>
        <th data-value="Destination_Zip" onClick={this.onClick}>Destination Zip</th>
        <th data-value="Invoice_Total" onClick={this.onClick}>Invoice Total</th>
      </tr>
    );
  }
});

/*** ROWS IN TABLE  ***/
var Rows = React.createClass({
  render: function() {
    return (
      <tbody>
        {this.props.data.map(function(row) {
          return <RowsWrapper key={row.id} data={row}/>;
        })}
      </tbody>
    );
  }
});

var RowsWrapper = React.createClass({
  render: function() {
    return (
    <tr>  
      <td>{this.props.data.Shipper_Name}</td>
      <td>{this.props.data.Mode}</td>
      <td>{this.props.data.Origin_City}</td>
      <td>{this.props.data.Origin_State}</td>
      <td>{this.props.data.Pickup_Zip}</td>
      <td>{this.props.data.Consignee_Name}</td>
      <td>{this.props.data.Destination_City}</td>
      <td>{this.props.data.Destination_State}</td>
      <td>{this.props.data.Destination_Zip}</td>
      <td>{this.props.data.Invoice_Total}</td>
    </tr>
    );
  }
});

/*** TABLE ***/
var Table = React.createClass({
  onClick : function(e) {
    // bubble up
  },
  
  render: function() {
    return (
      <table onClick={this.onClick}>
        <ColumnHeaders onClick={this.onClick} data={this.props.data} />
        <Rows data={this.props.data} />
      </table>
    );
  }
});

/*** SEARCH BAR ***/
var SearchBar = React.createClass({
  onChange: function(e) {
	// bubble up   
  },
  onBlur: function(e) {
    // bubble up
  },
  render: function() {
    return (
      <div className="SearchBar">
      <p className="SearchBar">Search by Shipper Name:</p>
      <form className="SearchBar" onChange={this.onChange} onBlur={this.onBlur}>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
      </form>
      </div>
    );
  }
});

/*** FILTERABLE TABLE (TOPMOST LEVEL) ***/
var FilterableTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      columnClicked: '',
      data: []
    };
  },
  // set state according to search field 
  onChange: function(e) {
    this.setState({filterText: e.target.value});
  },
  onBlur: function(e) {
    this.setState({filterText: ''})
  },
  // set state according to onClick events that bubbled up from ColumnHeaders
  onClick: function(e) { 
    var column = e.target.getAttribute("data-value");

	    if (column == "Shipper_Name") {
	      clicks.Shipper_Name++;
	      if (clicks.Shipper_Name % 2 == 0) {
      this.setState({columnClicked: 'Shipper_Name_ascending'});
      } 
      if (clicks.Shipper_Name % 2 != 0) {
        this.setState({columnClicked: 'Shipper_Name_descending'});
      }
    } else if (column == "Mode") {
      clicks.Mode++;
      if (clicks.Mode % 2 == 0) {
        this.setState({columnClicked: 'Mode_ascending'});
      } 
      if (clicks.Mode % 2 != 0) {
        this.setState({columnClicked: 'Mode_descending'});
      } 
    } else if (column == "Origin_City") {
      clicks.Origin_City++;
   	  if (clicks.Origin_City % 2 == 0) {
        this.setState({columnClicked: 'Origin_City_ascending'});
      } 
      if (clicks.Origin_City % 2 != 0) {
        this.setState({columnClicked: 'Origin_City_descending'});
      }
    } else if (column == "Origin_State") {
      clicks.Origin_State++;
      if (clicks.Origin_State % 2 == 0) {
        this.setState({columnClicked: 'Origin_State_ascending'});
      } 
      if (clicks.Origin_State % 2 != 0) {
        this.setState({columnClicked: 'Origin_State_descending'});
      } 
    } else if (column == "Pickup_Zip") {
      clicks.Pickup_Zip++;
      if (clicks.Pickup_Zip % 2 == 0) {
        this.setState({columnClicked: 'Pickup_Zip_ascending'});
      } 
      if (clicks.Pickup_Zip % 2 != 0) {
        this.setState({columnClicked: 'Pickup_Zip_descending'});
      }
    } else if (column == "Consignee_Name") {
      clicks.Consignee_Name++;
      if (clicks.Consignee_Name % 2 == 0) {
        this.setState({columnClicked: 'Consignee_Name_ascending'});
      } 
      if (clicks.Consignee_Name % 2 != 0) {
        this.setState({columnClicked: 'Consignee_Name_descending'});
      }
    } else if (column == "Destination_City") {
      clicks.Destination_City++;
      if (clicks.Destination_City % 2 == 0) {
        this.setState({columnClicked: 'Destination_City_ascending'});
      } 
      if (clicks.Destination_City % 2 != 0) {
        this.setState({columnClicked: 'Destination_City_descending'});
      }
    } else if (column == "Destination_State") {
      clicks.Destination_State++;
      if (clicks.Destination_State % 2 == 0) {
        this.setState({columnClicked: 'Destination_State_ascending'});
      } 
      if (clicks.Destination_State % 2 != 0) {
        this.setState({columnClicked: 'Destination_State_descending'});
      }
    } else if (column == "Destination_Zip") {
      clicks.Destination_Zip++;
      if (clicks.Destination_Zip % 2 == 0) {
        this.setState({columnClicked: 'Destination_Zip_ascending'});
      } 
      if (clicks.Destination_Zip % 2 != 0) {
        this.setState({columnClicked: 'Destination_Zip_descending'});
      }
    } else if (column == "Invoice_Total") {
      clicks.Invoice_Total++;
      if (clicks.Invoice_Total % 2 == 0) {
        this.setState({columnClicked: 'Invoice_Total_ascending'});
      } 
      if (clicks.Invoice_Total % 2 != 0) {
        this.setState({columnClicked: 'Invoice_Total_descending'});
      }
    }
  },
  loadDataFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
    })
    .done(function(data) {
        this.setState({data: data});
      }.bind(this))
    .fail(function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this))
  },
  componentDidMount : function() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, this.props.pollInterval);
  },
  render: function() {
    // d is the copy of data that will change according to state
    var d = this.state.data;
        
    /** filter with the search bar **/
    if (this.state.filterText != "") {
      var text = this.state.filterText.trim();
      var searchResults = d.map(function(r) {
        var regex = new RegExp("^" + text + ".*", "i");
        if (regex.test(r.Shipper_Name)) { // if there are any results
          return regex.exec(r.Shipper_Name)[0]; // return them to searchResults
        } 
      })
	  
	  // filter blank entries from searchResults
      searchResults = searchResults.filter(function(r){ 
        return r != undefined;
      })
      
      // filter dataset with searchResults
      d = searchResults.map(function(r) {
        return d.filter(function(p) {
          return p.Shipper_Name.indexOf(r) != -1;
        })
      })
      
      // flatten the array so it can render
      d = [].concat.apply([], d)
	}    
    
    /** sort by clicking on column headers **/  
    if (this.state.columnClicked == "Shipper_Name_ascending") { // sort by Shipper_Name
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Shipper_Name.toUpperCase() < b.Shipper_Name.toUpperCase()) { 
            return -1; 
          } else if (a.Shipper_Name.toUpperCase() > b.Shipper_Name.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Shipper_Name_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Shipper_Name.toUpperCase() < b.Shipper_Name.toUpperCase()) { 
            return 1; 
          } else if (a.Shipper_Name.toUpperCase() > b.Shipper_Name.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Mode_ascending") { // sort by Mode
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Mode.toUpperCase() < b.Mode.toUpperCase()) { 
            return -1; 
          } else if (a.Mode.toUpperCase() > b.Mode.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Mode_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Mode.toUpperCase() < b.Mode.toUpperCase()) { 
            return 1; 
          } else if (a.Mode.toUpperCase() > b.Mode.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Origin_City_ascending") { // sort by Origin_City
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Origin_City.toUpperCase() < b.Origin_City.toUpperCase()) { 
            return -1; 
          } else if (a.Origin_City.toUpperCase() > b.Origin_City.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Origin_City_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Origin_City.toUpperCase() < b.Origin_City.toUpperCase()) { 
            return 1; 
          } else if (a.Origin_City.toUpperCase() > b.Origin_City.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Origin_State_ascending") { // sort by Origin_State
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Origin_State.toUpperCase() < b.Origin_State.toUpperCase()) { 
            return -1; 
          } else if (a.Origin_State.toUpperCase() > b.Origin_State.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Origin_State_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Origin_State.toUpperCase() < b.Origin_State.toUpperCase()) { 
            return 1; 
          } else if (a.Origin_State.toUpperCase() > b.Origin_State.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Pickup_Zip") { // sort by Pickup_Zip
        // sort ascending: numerically
        d.sort(function(a,b) { 
          if (+a.Pickup_Zip < +b.Pickup_Zip) { 
            return -1; 
          } else if (+a.Pickup_Zip > +b.Pickup_Zip) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Pickup_Zip_descending") { 
        // sort descending: numerically
        d.sort(function(a,b) { 
          if (+a.Pickup_Zip < +b.Pickup_Zip) { 
            return 1; 
          } else if (+a.Pickup_Zip > +b.Pickup_Zip) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Consignee_Name_ascending") { // sort by Consignee_Name
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Consignee_Name.toUpperCase() < b.Consignee_Name.toUpperCase()) { 
            return -1; 
          } else if (a.Consignee_Name.toUpperCase() > b.Consignee_Name.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Consignee_Name_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Consignee_Name.toUpperCase() < b.Consignee_Name.toUpperCase()) { 
            return 1; 
          } else if (a.Consignee_Name.toUpperCase() > b.Consignee_Name.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_City_ascending") { // sort by Destination_City
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Destination_City.toUpperCase() < b.Destination_City.toUpperCase()) { 
            return -1; 
          } else if (a.Destination_City.toUpperCase() > b.Destination_City.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_City_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Destination_City.toUpperCase() < b.Destination_City.toUpperCase()) { 
            return 1; 
          } else if (a.Destination_City.toUpperCase() > b.Destination_City.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_State_ascending") { // sort by Destination_State
        // sort ascending: alphabetically
        d.sort(function(a,b) { 
          if (a.Destination_State.toUpperCase() < b.Destination_State.toUpperCase()) { 
            return -1; 
          } else if (a.Destination_State.toUpperCase() > b.Destination_State.toUpperCase()) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_State_descending") { 
        // sort descending: alphabetically
        d.sort(function(a,b) { 
          if (a.Destination_State.toUpperCase() < b.Destination_State.toUpperCase()) { 
            return 1; 
          } else if (a.Destination_State.toUpperCase() > b.Destination_State.toUpperCase()) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_Zip_ascending") { // sort by Destination_Zip
        // sort ascending: numerically
        d.sort(function(a,b) { 
          if (+a.Destination_Zip < +b.Destination_Zip) { 
            return -1; 
          } else if (+a.Destination_Zip > +b.Destination_Zip) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Destination_Zip_descending") { 
        // sort descending: numerically
        d.sort(function(a,b) { 
          if (+a.Destination_Zip < +b.Destination_Zip) { 
            return 1; 
          } else if (+a.Destination_Zip > +b.Destination_Zip) { 
            return -1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Invoice_Total") { // sort by Invoice_Total
        // sort ascending: numerically
        d.sort(function(a,b) { 
          if (+a.Invoice_Total < +b.Invoice_Total) { 
            return -1; 
          } else if (+a.Invoice_Total > +b.Invoice_Total) { 
            return 1; 
          } else {
            return 0;
          }
        });
    } else if (this.state.columnClicked == "Invoice_Total_descending") { 
        // sort descending: numerically
        d.sort(function(a,b) { 
          if (+a.Invoice_Total < +b.Invoice_Total) { 
            return 1; 
          } else if (+a.Invoice_Total > +b.Invoice_Total) { 
            return -1; 
          } else {
            return 0;
          }
        });
    }
    return (
      <div id="FilterableTable" onClick={this.onClick} onChange={this.onChange} onBlur={this.onBlur}>   
        <SearchBar onChange={this.onChange} onBlur={this.onBlur}/>
  	    <Table data={d} onClick={this.onClick}/>
  	  </div>
  	);
  }
});

// this draws to screen
React.render(
  <div>
    <h1 id="Shipper_Name">NFI Street Cred</h1>
    <FilterableTable onClick={this.onClick} onChange={this.onChange} url="data.json" pollInterval={2000} />
  </div>,
  document.getElementById('app')
);