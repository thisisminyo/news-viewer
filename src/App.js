import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=8053640cd13046c8936495e84c0d07cc',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewsList />
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
  );
};

export default App;
