import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="35cfd923-04d2-4bd9-927e-cc6e649a75a6"
            userName="Atlegangkola"
            userSecret="password"
            renderChatFeed = {(ChatAppProps) => <ChatFeed{...ChatAppProps}/>}
        
        />

    );

    
}

export default App;