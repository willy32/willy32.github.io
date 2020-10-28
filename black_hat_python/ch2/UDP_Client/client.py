import socket;

target_ip = "127.0.0.1";
target_port = 8080;

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM); #SOCK_DGRAM: Client for UDP
client.bind((target_ip, target_port)); #Creates a server????
client.sendto(b"Tjeeena", (target_ip, target_port)); #Sends a message

msg = client.recvfrom(4096);

print(msg);