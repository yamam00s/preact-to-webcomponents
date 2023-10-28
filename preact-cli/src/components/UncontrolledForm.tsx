import { h } from 'preact';
import { useRef } from 'preact/hooks';

export const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const countryRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('名前:', nameRef.current.value);
    console.log('国:', countryRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        国:
        <select ref={countryRef}>
          <option value="japan">日本</option>
          <option value="usa">アメリカ</option>
          <option value="uk" selected>イギリス</option>
        </select>
      </label>
      <button type="submit">送信</button>
    </form>
  );
}
