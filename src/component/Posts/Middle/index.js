import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Top";
import Card from "@/component/Card";
import secureAPI from "@/api/axios";
import Spinner from '@/component/common/Spinner';
import {PostSkelton} from '@/component/common/Skelton';

const Middle = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

    if (bottom && !loading && data?.page !== data?.total) {
      setLoading(true);
      secureAPI
        .get("list_posts", {
          params: { is_user_data_required: true, page: data.page + 1 },
        })
        .then(function (response) {
          setData((oldData) => {
            return {
              ...response.data,
              list: [...oldData.list, ...response.data.list],
            };
          });
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    secureAPI
      .get("list_posts", {
        params: { is_user_data_required: true },
      })
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="w-[625px] h-[100vh] overflow-y-scroll no-scrollbar"
      onScroll={handleScroll}
    >
      <Navbar />
      
      {((data || {}).list || [])?.map((obj)=>{
        return(
          <Card key={obj?.id} data={obj} setData={setData}/>
          );
        })
      }
      {
      loading && [1,2,3,4].map((e)=><PostSkelton key={e}/>)
      }
    </div>
  );
};

export default Middle;
