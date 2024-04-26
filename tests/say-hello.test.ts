import { sayHello } from "../src/say-hello"

describe('sayHello', (): void => { 
  it('should return hello Putra', (): void => {
    expect(sayHello('Putra')).toBe('Hello Putra')
  })
 })