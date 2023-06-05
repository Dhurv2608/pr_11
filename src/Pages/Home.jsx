import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest } from "../store/home/actions";


const Home = () => {
  
  const dispatch = useDispatch();

  const { isLoading, homePageData } = useSelector((store) => ({
    isLoading: store?.home?.loading,
    homePageData: store?.home?.homePageData,
  }));

  

  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);

  return (
    <>
    {


      
      isLoading ? "loading" : <div className="my-5">
      <h1 className="text-2xl font-medium text-center">Home</h1>
      <div className="mt-5">
        {homePageData?.map((item, index) => (
          <div key={index} className="d-flex justify-center">
            <p className="mx-3">{item?.id }.</p>  
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
    }
    </>
  );
};

export default Home;
