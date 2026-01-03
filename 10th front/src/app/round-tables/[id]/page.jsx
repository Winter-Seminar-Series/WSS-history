import { fetchRoundTables } from '../../../lib/api/events/roundTable';
import Footer from '../../../ui/components/Footer';
import Navbar, { NavbarPlaceholder } from '../../../ui/components/Navbar';
import RoundTableDetail from './RoundTableDetail';

export default async function RoundTablePage({ params }) {
  const { id } = await params;
  const roundTables = await fetchRoundTables();
  const roundTable = roundTables.find((seminar) => seminar.id === parseInt(id));

  return (
    <>
      <Navbar />
      <NavbarPlaceholder />
      <RoundTableDetail roundTable={roundTable} />
      <Footer />
    </>
  );
}
