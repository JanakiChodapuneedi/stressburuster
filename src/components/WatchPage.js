import React from "react";

const WatchPage = ({videoId}) => {
  //const [searchParams] = useSearchParams();
  
  
  return (
    <div>
      <iframe
        width="1200"
        height="615"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default WatchPage;
