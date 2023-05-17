import Button from './components/base/Button';
import { ReactElement } from 'react';
import './App.css';

function App(): ReactElement {
  return (
    <div>
      <Button primary>Button</Button>
      <Button secondary>Buy now</Button>
      <Button success>See Deal</Button>
      <Button warning>Hide Ads</Button>
      <Button danger>Something</Button>
      <Button rounded>Rounded</Button>
      <Button outline>Outline</Button>
      <Button outline primary>
        outline primary
      </Button>
      <Button outline secondary>
        outline secondary
      </Button>
      <Button outline success>
        outline success
      </Button>
      <Button outline warning>
        outline warning
      </Button>
      <Button outline danger>
        outline danger
      </Button>
    </div>
  );
}

export default App;
