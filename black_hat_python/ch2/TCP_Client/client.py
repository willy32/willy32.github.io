import socket;

tagret_ip = "www.nik.fi";
target_port = 80;

#Makes an object
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM); #AF_INET: IPv4      SOCK_STREAM: TCP Client

#Connects to server
client.connect((tagret_ip, target_port));

#Sends data(a request for the HTML file)
client.send(b"GET / HTTP/1.1\r\nHost: nik.fi\r\n\r\n"); #b: converts string to byte

#Recives data
msg = client.recv(4096);

print("Message:" + "\n" + msg.decode("UTF-8")); #decode: converts byte to string 