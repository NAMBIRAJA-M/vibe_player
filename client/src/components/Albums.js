import React from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";


    const Albumdata = [
        {
          id: "1",
          name: "Rayaan",
          image: "https://i.scdn.co/image/ab67616d00001e02c55687b6cdba45d13ff07c91",
          artist:"A.R.Rahman",
        },
        {
          id: "2",
          name: "The Greatest Of All Time (GOAT)",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsS0iLeqYzIlbPERt-et5YfxxNPC5uH7ijw&s",
          artist:"Yuvan Shankar Raja",
        },
        {
          id: "3",
          name: "Vaazhai - Original Motion Picture Soundtrack",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQS-zhXlPJZS8ugweNpj5sB3m38sxzIocf4A&s",
          artist:"Santhosh Narayanan",
        },
        {
          id: "4",
          name: "Soorarai Pottru (Original Motion Picture Soundtrack)",
          image:
            "https://i.scdn.co/image/ab67616d00001e02f06fc429c88fd58835de00ec",
            artist:"G.V.Prakash",
        },
        {
          id: "5",
          name: "Aavesham (Original Motion Picture Soundtrack)",
          image: "https://i.scdn.co/image/ab67616d0000b2731d93bb16bf3025587d001f45",
          artist:"Sushin Shyam",
        },
        {
          id: "6",
          name: "Indian 2 (Original Motion Picture Soundtrack)",
          image: "https://i.scdn.co/image/ab67616d0000b273605a640e7636ce440c8d9323",
          artist:"Anirudh Ravichander",
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
                      <p className="role">{album.artist}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      

}
export default Albums;