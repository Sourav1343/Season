import React from 'react';

const seasonConfig ={
    summer:{
        text:'lets hit the beach',
     iconName: 'sun' },
    winter:{
        text:'Burr its chilly!',
     iconName: 'snowflake'
    }
}

const getSeason=(lat,month)=>{
    console.log('getSeason function')
    if(month>2 && month<9)
    {
      return  lat>0?'summer':'winter';
    }
    else{
        return  lat>0?'winter':'summer';

    }

}


const SeasonDisplay=(probs)=>{
    console.log('SeasonDisplay fucntion');
    const season = getSeason(probs.lat, new Date().getMonth());
    console.log(season);

    const {text,iconName}  = seasonConfig[season]    //{ text,inconName }


   /* const text= season==='winter'?'Burr its chilly!': 'lets hit the beach' 
    const icon= season==='winter'? 'snowflake': 'sun';*/
    
    return(
        
        <div className={`season-display ${season}`}>  
             <i className={`icon-left massive ${iconName} icon`}/>
            <h1 className='textDisplay'>{text}</h1> 
            <i className={`icon-right massive  ${iconName} icon`}/> </div>
        
 

    );
}
export default SeasonDisplay;