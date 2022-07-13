import React, { useEffect, useState, useContext, createContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { CurrentUser } from './CurrentUser';
import { PostEditForm } from './PostEditForm';
import { Spinner } from './Spinner';
import { Posts } from './Posts';
import { over } from 'stompjs';
import { FeedContext } from '../contexts/FeedContext';
import { API_URL, WEBSOCKET_URL } from '../helpers/urls';
import SockJS from 'sockjs-client';
import axios from 'axios';

var stompClient = null;

export const Feed = () => {
  const { user } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
    connect();
    setIsLoading(false);
  }, []);

  const fetchData = async () => {
    const resp = await axios.get(API_URL.concat('post/getall'));
    console.log(resp.data);
    setPosts(resp.data);
    setIsLoading(false);
  };

  const connect = () => {
    let Sock = new SockJS(WEBSOCKET_URL);
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe('/feed-clients', onMessageReceived);
  };

  const onError = (err) => {
    console.log(err);
  };

  const onMessageReceived = (payload) => {
    payload && setPosts(JSON.parse(payload.body));
  };

  const broadcastTrigger = () => {
    if (stompClient) {
      stompClient.send('/feed-trigger', {}, '[ feed reload event triggered ]');
    }
  };

  return (
    <FeedContext.Provider value={{ broadcastTrigger }}>
      <div className='feed'>
        {user && (
          <>
            <CurrentUser />
            <PostEditForm broadcastTrigger={broadcastTrigger} />
          </>
        )}
        {isLoading ? <Spinner /> : <Posts posts={posts} />}
      </div>
    </FeedContext.Provider>
  );
};
