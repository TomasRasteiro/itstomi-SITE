export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="section-header">
        <p className="section-tag">Contacto</p>
        <h2>Vamos conversar</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-card">
          <h3>Parcerias e oportunidades</h3>
          <p>
            Se gostas do trabalho e queres colaborar, falar de negócios, patrocínios ou eventos,
            manda uma mensagem.
          </p>

          <ul className="contact-list">
            <li>Email: itstomitvbussines@gmail.com</li>
            <li>Disponível para parcerias e eventos</li>
            <li>Respostas rápidas via email</li>
          </ul>
        </div>

        <div className="contact-card">
          <form
            className="contact-form"
            action={`mailto:itstomitvbussines@gmail.com?subject=${encodeURIComponent("Contacto ItsTomi")}`}
            method="post"
            encType="text/plain"
          >
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" placeholder="O teu nome" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="seu@email.com" required />
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Escreve a tua mensagem..." required />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

}






















































































































































































