const { ServiceBusClient } = require("@azure/service-bus");

const connectionString = "Endpoint=sb://rp0041-sbus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey="
const senderQueue = "inputq01"

const serviceBusClient = new ServiceBusClient(connectionString);
const sender = serviceBusClient.createSender(senderQueue);

async function main() {
    await sender.sendMessages( {
        body: "Hello, world!",
        applicationProperties: { "msgId": "002" },
    });
    console.log("Message sent at "+ new Date(Date.now()).toLocaleString('en-GB'));
    await sender.close();
}

main().catch((err) => {
    console.log("Error occurred: ", err);
    process.exit(1);
 });


