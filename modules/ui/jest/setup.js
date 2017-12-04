import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LocalStorage } from 'node-localstorage';

require('dotenv').config();

enzyme.configure({ adapter: new Adapter() });

global.localStorage = new LocalStorage('./jest/scratch');
