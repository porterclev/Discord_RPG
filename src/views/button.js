import React from "react";

const button = () => {
  function sendMessage() {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/1067705581223284777/qVbHfVN2UpXhd0sRBYec4Ox1qfK9KjhgQtPQzBBu5p-RZYpUbu-OWCsMc-YDS3p-xnYQ"
    );
    request.setRequestHeader("Content-type", "application/json");
    const params = {
      username: "My Webhook Name",
      avatar_url: "",
      content: "",
    };
    request.send(JSON.stringify(params));
  }
  return <button onClick={() => sendMessage()}>button</button>;
};

export default button;
