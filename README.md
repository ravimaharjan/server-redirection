# server-redirection

![result](<https://github.com/ravimaharjan/server-redirection/blob/master/assets/reverse-proxy.png>)

Server-redirection displays how the nginx can be used as the proxy server for the multiple backend applications or services. This demo consists of three backend services named DC, lpsm and a socket based simple service. DC is built using Express js and lpsm is a flask application. DC and lpsm return response with their corresponding messages "Hello World!! This is DC.." and "Hello World!! This is Search Master..". 

# How it works

DC, lpsm and socket services are run inside the three docker containers. Nginx acts as a proxy server infront of these services. Nginx forwards the Api request to the DC and lpsm based on the request header product_key. The mapping is done in the nginx configuration file. Socket requests are based on the location key which is "socket.io". DC, lpsm and socket run at 3000, 5000 and 3002 ports respectively. Nginx listen on the port 80. Since Nginx is run in the separate container, I have used port 8000 to map with the port 80 of the container.

# User Interface

![result](<https://github.com/ravimaharjan/server-redirection/blob/master/assets/server-redirection.png>)

User interface consists of two buttons to send Api request. Corresponding message will be displayed on clicking on it. Socket has the text input where user can input any string or number. On submitting the job, socket will respond with completed Job after 2 seconds. Completed jobs will be added in the UI.

# Requirements for the system
* Docker and docker-compose should be installed

# How to run
* Clone the repo
* Go to the server-redirection folder and run "docker-compose up" to run all the services at once.
* Run "docker-compose stop" to stop all the containers. Or use "docker-compose up <individual service>
