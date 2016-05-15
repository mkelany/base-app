var app = 
{
    init: function()
	{
        document.addEventListener('deviceready', app.deviceReadyHandler, false);
    },
	
    deviceReadyHandler: function()
	{
		document.addEventListener("backbutton", app.backButtonHandler, true);
		
		setTimeout(function()
		{
			navigator.splashscreen.hide();
			
			//alert('Device is ready and application has been loaded...');
		},
		1000);
    },
	
    backButtonHandler: function()
	{
		//Don't force programmatic application exit ever or your app won't be published to Apple Store!
        navigator.notification.confirm
		(
            'Are you sure, you want to exit?', // message
            app.onExitConfirm, // callback to invoke with index of button pressed
            'Exit application?', // title
            'Yes,No'// buttonLabels
        );
    },
	
	onExitConfirm: function(button)
	{
		//Don't force programmatic application exit ever or your app won't be published to Apple Store!
		if (button == 1) navigator.app.exitApp();
	}
};

app.init();