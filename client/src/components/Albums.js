import React from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";


    const Albumdata = [
        {
          id: "1",
          name: "A.R.Rahman",
          image: "https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c",
        },
        {
          id: "2",
          name: "Anirudh Ravichander",
          image: "https://i.scdn.co/image/ab676161000051740f0be2054fe9594026a6b843",
        },
        {
          id: "3",
          name: "Yuvan Shankar Raja",
          image: "https://i.scdn.co/image/ab6761610000e5ebe60d7a790ebea50d205bda93",
        },
        {
          id: "4",
          name: "Hiphop Thamizha",
          image:
            "https://pbs.twimg.com/profile_images/1537036944726982656/9yxiDNYe_400x400.jpg",
        },
        {
          id: "5",
          name: "G.V.Prakash",
          image: "https://i.scdn.co/image/ab6761610000e5eb0a5c692089af5c0f9cf839f3",
        },
        {
          id: "6",
          name: "Vijay Antony",
          image: "https://i.scdn.co/image/ab6772690000c46c51320f1823e1b38521de23fd",
        },
        /*   {
            name: "Santhosh Narayanan",
            image: "https://i.scdn.co/image/ab6761610000e5eba52538772891f66547e1ebc3",
          },
          {
            name: "Ilaiyaraaja",
            image: "https://i.scdn.co/image/ab6761610000e5ebec891c36864eb59b28f65cf8",
          }, */
      ];
      
      function Albums(){
        const [isMouseOver, setMouseOver] = React.useState(null);
      
        function handleMouseOver(albumId) {
          setMouseOver(albumId);
          console.log(albumId);
        }
        function hoverOut() {
          setMouseOver(null);
        }
        return (
          <>
            <div className="main-heading">
              <p>Popular Albums</p>
            </div>
            <div className="artist">
              {Albumdata.map((album) => (
                <div
                  className="main-container"
                  key={album.id}
                  onMouseOver={() => handleMouseOver(album.id)}
                  onMouseOut={hoverOut}
                >
                  <div className="details-container">
                    <div className="image-container" >
                      <img style={{ borderRadius: 0 }} src={album.image} alt={album.name} />
      
                      {isMouseOver === album.id ? (
                        <PlayCircleIcon
                          style={{
                            position: "absolute",
                            fill: "#399918",
                            fontSize: "3rem",
                            backgroundColor: "black",
                            borderRadius: "50%",
                            border: "none",
                            left: "5.6rem",
                            top: "5.9rem",
                          }}
                          className="slide-in"
                        />
                      ) : null}
      
                      <p className="name">{album.name}</p>
                      <p className="role">Artist</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      

}
export default Albums;