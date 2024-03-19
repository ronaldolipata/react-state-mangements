import Products from '../components/Products';
import Filter from '../features/filter/Filter';

const App = () => {
  return (
    <div>
      <h1>State Management using Redux</h1>
      <Filter />
      <Products />
    </div>
  );
};

export default App;
