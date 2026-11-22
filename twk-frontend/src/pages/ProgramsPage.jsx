import PageHeader from '../components/PageHeader.jsx';
import Plans from '../components/Plans.jsx';
import Quote from '../components/Quote.jsx';

function ProgramsPage({ openQuote }) {
  return (
    <>
      <PageHeader label="Program" title={<>Master the process.<br /><span className="teal">Respect the market.</span></>} text="One focused mentorship program, built around structure, risk management and discipline." />
      <Plans openQuote={openQuote} />
      <Quote openQuote={openQuote} />
    </>
  );
}

export default ProgramsPage;
