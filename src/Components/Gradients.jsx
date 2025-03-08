export default function Gradiente({ direction, color1, color2 }) {


    return(
        <div className='div-final'>
          <div className='gradiente' style={{backgroundImage: `linear-gradient(to ${direction},  ${color1}, ${color2}`}}></div>
        </div>
    );
}