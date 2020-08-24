const io = require("socket.io");
const server = io.listen(3002);

server.on("connection", socket => {
    console.log("Socket connection is established")

    socket.on("new_job", job_id => {

        setTimeout(function(){
            socket.emit("job_complete", job_id)
        }, 2000)
    });

});