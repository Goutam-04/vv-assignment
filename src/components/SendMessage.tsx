const SendMessage = () => {

function send(){
    console.log("hello");
}

  return (
    <form onSubmit={send} className="flex fixed bottom-0 w-[66%]  p-1 bg-blue-800">
    <label htmlFor="messageInput" hidden>
      Enter Message
    </label>
    <input
      id="messageInput"
      name="messageInput"
      type="text"
      className="flex-grow h-10 p-2 rounded-l bg-white text-blue-900 text-lg"
      placeholder="type message..."
     
    />
    <button type="submit" className="w-16 h-10 p-2 rounded-r bg-blue-400 text-white font-semibold">
      Send
    </button>
  </form>
  );
};

export default SendMessage;
