/**
 * Connection / Communications with server
 */
let Connect = {
    connection: null,
    connection_status: false,
    ip_address: '127.0.0.1', // edit by yours
    port: '8081', // port

    start: function () {
        this.connection = new WebSocket('ws://' + this.ip_address + ':' + this.port);

        this.connection.onopen = function (e) {
            Connect.connection_status = true;
            console.log("Connection established!");

            $('.window .title').html('Connected.');
        };

        // callback messages
        this.connection.onmessage = function (e) {
            var message = JSON.parse(e.data);
    console.log('Received message:', message);
    
    // Check if the message contains 'ans' property
    if (message.ans !== undefined) {
        // Handle the 'ans' part of the message here
        console.log('Answer received:', message.ans);
        
        // Example: Update DOM or perform further processing with message.ans
        document.getElementById('result').textContent = message.ans;
    } else {
        console.log('Message does not contain an "ans" property');
    }
        };

        // Closed window
        this.connection.onclose = function (e) {
            console.log("Connection closed!");
            this.connection_status = false;
        };

        // Error window
        this.connection.onerror = function (e) {
            console.log("Connection error!");
            this.connection_status = false;
        };

    },

    sendMessage: function (data) {
        if (this.connection_status === false) return;

        var data = JSON.stringify(data);
        this.connection.send(data);
    },

};
