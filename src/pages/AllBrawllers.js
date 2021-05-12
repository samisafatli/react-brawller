import BrawllerList from '../components/brawllers/BrawllerList'

const DUMMY_DATA = [
  {
    id: 'm1',
    name: 'This is a first brawller',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    type: 'Brawllerstreet 5, 12345 Brawller City',
    description:
      'This is a first, amazing brawller which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    name: 'This is a second brawller',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    type: 'Brawllerstreet 5, 12345 Brawller City',
    description:
      'This is a first, amazing brawller which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllBrawllersPage = () => {
  return (
    <section>
      <h1>All Brawllers</h1>
      <BrawllerList brawllers={DUMMY_DATA}/>
    </section>
  );
}

export default AllBrawllersPage;