import { h } from 'preact';
import register from 'preact-custom-element';

const Greeting = ({ name = 'World' }) => (
  <p>sHello, {name}!</p>
);

register(Greeting, 'x-greeting', ['name']);
