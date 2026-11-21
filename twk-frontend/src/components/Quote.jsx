// banner section , button opens the quote box (email)
function Quote({ openQuote }) {
  return (
    <section className="section">
      <div className="container quote-box">
        <h2>Have a question about <span className="teal">the program?</span></h2>
        <p className="lead">Send us an email and we will get back to you with your quote.</p>
        <button className="btn btn-red" onClick={() => openQuote('')}>Ask for a quote</button>
      </div>
    </section>
  );
}

export default Quote;
