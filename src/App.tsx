import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [gender, setGender] = React.useState<string | undefined>("Male");
  const [color, setColor] = React.useState<string | undefined>("Red");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color);
  };

  // const handleInputChage = (event: React.FormEvent<HTMLFormElement>) => {
  //   let { name, value } = e.target;
  //   this.setState({
  //     ...this.setState,
  //     inputs: {
  //       [name]: value,
  //     },
  //   });
  // };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <SelectGender name="Gender" value={gender} onChange={changeGender} />
        <Input name="Age" value={age} onChange={changeAge} />
        <SelectColor
          name="Favourite Color"
          value={color}
          onChange={changeColor}
        />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button type="reset" className="btn-secondary mb-16">
          Clear
        </button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type RadioType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectGender = ({ value, onChange, name }: RadioType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input type="radio" value="Male" onChange={onChange} />
      <input type="radio" value="Female" onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectColor = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
