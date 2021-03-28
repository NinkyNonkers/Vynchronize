// 0. Enqueue
// 1. Host Change
// 2. Empty Queue
// 3. Beta Message


// Change Host (1)
socket.on('changeHostNotify', function(data) {
    console.log("Host Change Notify Alert")

})


// Beta Message (3)
socket.on('betaNotify', function(data) {
    console.log("Beta Notify Alert")
})

//------------------------------------------------------------------------------
// Not part of the server function
//------------------------------------------------------------------------------


// Made into its own function to reduce spam
// When pressing sync button
function syncAlert() {

}

// When user gets out of sync from the host
function disconnectedAlert() {

}

// When playNext is called
function playNextAlert() {

}

// When user enters a url, but the url is invalid
function invalidURL() {

}

function betaAlert() {

}
