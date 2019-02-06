import {memoize} from 'lodash';

export function Memoize() {
  return (_target: {}, _propertyKey: string, decorator: PropertyDescriptor) => {
    decorator.value = memoize(decorator.value);
  };
}
