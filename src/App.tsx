import * as React from 'react';
import './style.css';

export default function App() {

  let [name,setName] = React.useState<String>("");
  const [age, setAge] = React.useState<String | undefined>();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input name="Name" value={name} onChange={changeName} />
      <input name="Age" value={age} onChange={changeAge} />
    </div>
  )

  type InputType = {
    name: String;
    value: String;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

  const Input = ({value, onChange, name)} => {
  }