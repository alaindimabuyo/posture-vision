// components/ChatWidget.js
'use client';
import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <chat-widget
        location-id="wvQwMzyXRjFdLc5UInJZ"
        agency-name="Doctor Hutcheson"></chat-widget>
    </div>
  );
};

export default ChatWidget;
