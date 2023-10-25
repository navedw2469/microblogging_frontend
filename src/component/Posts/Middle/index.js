import React, {useState, useEffect} from 'react';
import Navbar from '../Top';
import Card from '@/component/Card';
import axios from 'axios';

const Middle = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleScroll = (e) => {
    const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 1;

    if (bottom && !loading && data?.page !== data?.total) {
      setLoading(true);
      axios.get("http://127.0.0.1:3000/list_posts", {
        params: { is_user_data_required: true, page: data.page + 1 },
      }).then(function (response) {
        setData((oldData)=>{
          return { ...response.data, list: [...oldData.list, ...response.data.list] };
        });
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });;
    }
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/list_posts", {
      params: { is_user_data_required: true },
    }).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.log(error);
    });;
  }, []);

  return(
    <div className="w-[625px] h-[100vh] overflow-y-scroll" onScroll={handleScroll}>
      <Navbar />
      {data?.list?.map((obj)=>{
        return(
          <Card key={obj?.id} data={obj}/>
          );
        })
      }
      {loading && <div>Loading ...</div>}
    </div>
  );

}

export default Middle;