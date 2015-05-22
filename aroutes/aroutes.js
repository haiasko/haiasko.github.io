// Insert your Dropbox app key here:
var DROPBOX_APP_KEY = 'ub9b9zi3hz9c9an';

// Exposed for easy access in the browser console.
var client = new Dropbox.Client({key: DROPBOX_APP_KEY});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

var myData = {ship: 'nautilus', capacity: 200, host: location.host, created: Date()};
var myResult;

function myLogin() {
    client.authenticate();
};

function myWork () {
    if (client.isAuthenticated()) {
	// Client is authenticated. Do work

	var datastoreManager = client.getDatastoreManager();

	datastoreManager.openDefaultDatastore(function (error, datastore) {
	    if (error) {
		alert('Error opening default datastore: ' + error);
	    } else {

		// Now you have a datastore. The next few examples can be included here.
		var myTable = datastore.getTable('testing');
	   
		myResult = myTable.insert(myData);
	    };
	});
    } else {
	alert("Not authenticated");
    }
}

