import { useRef, useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [ages, setAges] = useState([]); // Novo estado para armazenar as idades
  const inputEl = useRef(null);

  const handleClick = () => {
    const customerData = [name, age, phone, email, password];

    // Usando reduce para concatenar os campos em uma string
    const concatenatedData = customerData.reduce((prev, next) => prev + next + ' ', '');

    // Adicionando a string concatenada ao estado data
    setData(prev => [...prev, concatenatedData]);

    // Adicionando a idade ao estado ages
    if (!isNaN(age) && age !== "") {
      setAges(prev => [...prev, parseInt(age)]);
    }

    // Limpando os campos
    setName('');
    setAge('');
    setPhone('');
    setEmail('');
    setPassword('');
    inputEl.current.focus();
  };

  // Função para calcular a média das idades
  const averageAge = () => {
    if (ages.length === 0) return 0;
    const sum = ages.reduce((prev, next) => prev + next, 0);
    return (sum / ages.length).toFixed(2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input className='input' ref={inputEl} type='text' placeholder='Nome' onChange={event => setName(event.target.value)} value={name} />
          <input className='input' ref={inputEl} type='text' placeholder='Idade' onChange={event => setAge(event.target.value)} value={age} />
          <input className='input' ref={inputEl} type='text' placeholder='Telefone' onChange={event => setPhone(event.target.value)} value={phone} />
          <input className='input' ref={inputEl} type='text' placeholder='E-mail' onChange={event => setEmail(event.target.value)} value={email} />
          <input className='input' ref={inputEl} type='text' placeholder='Senha' onChange={event => setPassword(event.target.value)} value={password} />
          <button className='btn' onClick={handleClick}>Adicionar</button>
        </div>
        <div>
          <ul>
            {
              // Usando filter para filtrar dados
              data.filter(item => item !== '').map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2>Média das Idades: {averageAge()} </h2> {/* Exibindo a média das idades dos clientes*/}
        </div>
      </header>
    </div>
  );
}

export default App;