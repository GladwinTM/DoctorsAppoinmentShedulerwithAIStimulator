
import DoctorFinder from "../DoctorFinder";
import Navbar from "../Navbar";
import ChatBot from "react-chatbotify";

const Home = () => {

  const styles = {
    botBubbleStyle: {fontSize: "10"},
    sendButtonStyle: {backgroundColor: "#9f5f00ff"},
    chatButtonStyle: {background: "red"},
    headerStyle: {background: "#00ff00", color: "#0000ff"},
    footerStyle: {fontSize: 12}
  }

  const flow = {
    "start":{
        message: "hello! how can i help you?",
        path: "end"
    },
    "end":{
        message: "i am sorry i cannot help you with that, as it is just a demo",
        chatDisabled : true
    }
  }

  return (
    <>
      <Navbar />
      {/* the chatbotify component */}
      <ChatBot flow={flow} style={styles}  />
        <DoctorFinder />
    </>
  );
};

export default Home;
