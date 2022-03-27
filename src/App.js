/* eslint-disable react/jsx-props-no-spreading */
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => (
  <div className="App">
    <ChatEngine
      height="100vh"
      projectID="ae55be71-ba6b-4069-b058-d5a956b82768"
      userName="tresorsaw"
      userSecret="123456123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  </div>
);

export default App;
