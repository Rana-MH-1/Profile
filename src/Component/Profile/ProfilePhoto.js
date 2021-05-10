import profileimage from './profileimage.jpg';
const style={
    
        width: '350px',
        height: '350px',
        border: 'none',
        MozBorderRadius : '170px',
        WebkitBorderRadius : '170px',
        borderRadius : '170px',
        marginLeft:'300px'

}

export const ProfileImage = () => {
    return(
        <img className='profileimage' src={profileimage} style={style} alt='profileimage'></img>
    )
}