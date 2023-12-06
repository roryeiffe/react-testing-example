import Counter from '../components/Counter';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Test that component is rendered:
it('Counter component is rendered', () => {
    const wrapper = mount(<Counter />);
    expect(wrapper.exists()).toBe(true);
})

it('should start at 0:', () => {
    const wrapper = mount(<Counter />);
    const element = wrapper.find('p');
    expect(element.text()).toBe('You clicked 0 times');
})

// Test that increment button works:
it('should increment by 1:', () => {
    const wrapper = mount(<Counter />);
    wrapper.find('button').at(0).simulate('click');
    const element = wrapper.find('p');
    expect(element.text()).toBe('You clicked 1 times');
})

// Test that decrement button works:
it('should decrement by 1:', () => {
    const wrapper = mount(<Counter />);
    wrapper.find('button').at(1).simulate('click');
    const element = wrapper.find('p');
    expect(element.text()).toBe('You clicked -1 times');
})