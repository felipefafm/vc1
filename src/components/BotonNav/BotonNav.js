const BotonNav=(props)=>{
    return(
        
          <button onClick={props.func}>{props.textoNav} </button>
        //   style={{color: props.colorText,}}
    )
}
export default BotonNav