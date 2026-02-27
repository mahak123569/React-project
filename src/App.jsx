import Header from './Header';
import Todo from './Todo';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
//new
// heading
export default function MyApp() {
  return (
    <div>
  <Header which="world" />
    /* paragraph */
      <h1>welcome to my app</h1>
      <MyButton />
      <Todo />
    </div>
  );
}
