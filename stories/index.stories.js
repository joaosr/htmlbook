import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import places from '../public/place.json'
import { placeChartRender } from '../PlaceChart'

storiesOf('PlaceChart', module)
  .add('default', () => {
    const div = document.createElement('div');
    div.className = "chart";
    setTimeout(function(){
      placeChartRender(places, '.chart')
    }, 0)
    return div;
  });
