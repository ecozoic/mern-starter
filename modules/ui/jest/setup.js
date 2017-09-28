import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LocalStorage } from 'node-localstorage';

enzyme.configure({ adapter: new Adapter() });

global.localStorage = new LocalStorage('./jest/scratch');
