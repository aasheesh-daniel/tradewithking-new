import PageHeader from '../components/PageHeader.jsx';
import Faq from '../components/Faq.jsx';
import { links } from '../data/content.js';

// one contact card = round logo + small label + value + arrow
function Card({ href, icon, label, value, external }) {
  return (
    <a className="contact-card" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <img className="contact-icon" src={icon} alt="" width="46" height="46" />
      <div><span>{label}</span><strong>{value}</strong></div>
      <b className="contact-arrow" aria-hidden="true">→</b>
    </a>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title={<>Let's talk <span className="teal">trading.</span></>} text="Questions about the program or the community? Reach us on any channel below." />
      <section className="section">
        <div className="container contact-list">
          <Card href={'mailto:' + links.email} icon="/icons/mail.png" label="Email" value={links.email} />
          <Card href={links.discord} icon="/icons/discord.png" label="Discord" value="Free community group" external />
          <Card href={links.telegram} icon="/icons/telegram.png" label="Telegram" value="Free community group" external />
        </div>
      </section>
      <Faq />
    </>
  );
}

export default ContactPage;
