var connection = new Postmonger.Session();

connection.on('initActivity', function(payload) {
    console.log("Iniciada:", payload);
});

connection.on('clickedNext', function() {
    connection.trigger('updateActivity', {
        inArguments: [],
        outArguments: []
    });

    connection.trigger('nextStep');
});

connection.trigger('ready');