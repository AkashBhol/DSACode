
const Link=(props)=>{
    const {title,content}=props;
    return(
        <div className="alok">
            <a href="https://th.bing.com/th/id/R.300129b0ee1b0315c0c5b26c571f7444?rik=SNjn%2f37YtfNFvw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-z2ECxRUqC7I%2fT3vIjng1l4I%2fAAAAAAAAAXg%2fQSKouWqRoaw%2fs1600%2fBest-top-desktop-spring-wallpapers-hd-spring-wallpaper-background-picture-06.jpg&ehk=tZbto9dPegtPMwgW2dySg%2bTLbyP8rQ%2fhPh6AqQD%2b61Y%3d&risl=&pid=ImgRaw&r=0">click here</a>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
            <br/>
          {title}
          {content}
        </div>
    );
}
export default Link;