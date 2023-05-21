import Button from '../components/base/Button';
import { GoBell } from 'react-icons/go';
import { ReactElement } from 'react';

function ButtonPage(): ReactElement {
  const handleClick = (): void => {
    console.log('hi');
  };

  return (
    <div>
      <Button primary onClick={handleClick} className="mb-5" disabled>
        <GoBell />
        Button
      </Button>
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

export default ButtonPage;
