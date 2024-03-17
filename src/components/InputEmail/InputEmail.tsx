import '../../styles/InputEmail.css'

const InputEmail = () => {
  return (
    <>
      <p className="title-news">¿Quieres recibir promociones y noticias?</p>
      <div className="send-mail">
        <input type="text" placeholder="Tu Correo"/>
          <button className="button-disabled">
            ENVIAR
          </button>
      </div>
      <div className="terms-conditions">
        <input type="checkbox" name="" id="" value="true"/> 
        <label htmlFor="">He leído y revisado los
          <a href="#" target="_blank"> términos y condiciones</a>
        </label>
      </div>
    </>
  )
}

export default InputEmail