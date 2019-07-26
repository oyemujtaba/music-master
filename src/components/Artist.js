import React from 'react';

const Artist = ({ artist }) => {

    const { images, name, followers, genres } = artist;

    return(
        <div>
             <img src={images && images[0].url} 
                style=
                {{
                margin:5,
                width:200,
                height:200,
                borderRadius:100,
                objectFit:'cover'
                }} 
                alt="ARTIST IMAGE"
             />
            <h1>{name}</h1>
            <p>{followers.total} <i  >followers</i> </p>
            <p >Type : {genres.join(',')}</p>
           
        </div>
    )

}

export default Artist;