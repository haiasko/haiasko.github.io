// sample empty script 
var emptyRactive = new Ractive({
    el: 'emptyContainer',
    template: '#emptyTemplate',
    data: { 
    }
});

// Login script
var loginRactive = new Ractive({
    el: 'loginContainer',
    template: '#loginTemplate',
    data: { 
	status: "",
	loggedIn: false,
	email: undefined,
	password: undefined,
	response: undefined,
	uid: undefined,
	uname: undefined }
});

// Tables list script
var tablesRactive = new Ractive({
    el: 'tablesContainer',
    template: '#tablesTemplate',
    data: { 
	tables: undefined,
	records: undefined,
	response: undefined
    }
});

// Table details script 
var tableRactive = new Ractive({
    el: 'tableContainer',
    template: '#tableTemplate',
    data: { 
        table: undefined,
        headers: undefined,
        records: undefined,
        response: undefined,
    }
});

function selectTable (table) {
    tableRactive.set('table', table);
    df.apis.db.getRecords({'table_name': table}, function (response) { 
	
        var records = response.record;
	
        tableRactive.set('response', response); // save it for debugging
        tableRactive.set('headers', Object.keys(records[0]));
        tableRactive.set('records', records);
    }); // missing failure func and what happens if no rows?
};

function myLogin () {
    var body = {
        email: loginRactive.get('email'),
        password: loginRactive.get('password')
    };
    window.df.apis.user.login({body: body}, function (response) {
        
        //assign session token to be used for the session duration
        window.authorizations.add("X-DreamFactory-Session-Token", new ApiKeyAuthorization("X-Dreamfactory-Session-Token", response.session_id, 'header'));
        loginRactive.set('status', ""); 
        loginRactive.set('loggedIn', true); 
        loginRactive.set('response', response); 

        loginRactive.set('uid', response.id); 
        loginRactive.set('uname', response.display_name); 

            <!-- Get the tables list and set it -->

        df.apis.db.getTables(undefined, function (response) {
            tablesRactive.set('tables', response)
        }, function(response){
            loginRactive.set('status', myGetErrorString(response));
        });

    }, function(response){
        loginRactive.set('status', myGetErrorString(response));
        loginRactive.set('loggedIn', false); 
        loginRactive.set('response', response); 
    });
};

function myLogout () {
    window.df.apis.user.logout();
    loginRactive.set('loggedIn', false); 
}

myGetErrorString = function(response){
    var msg = "An error occurred, but the server provided no additional information.";
    if (response.content && response.content.data && response.content.data.error) {
        msg = response.content.data.error[0].message;
    }
    msg = msg.replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&apos;/g, '\'');
    return msg;
};









