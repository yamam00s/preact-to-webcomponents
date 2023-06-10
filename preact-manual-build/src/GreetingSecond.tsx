import { h } from 'preact';
import register from 'preact-custom-element';

const GreetingSecond = ({ name = 'World' }) => (
  <p>sHello, {name}!</p>
);

register(GreetingSecond, 'x-greeting-second', ['name']);
