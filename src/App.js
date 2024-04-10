import { useState } from 'react';
import './App.css';

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialchars = "!@#$%^&*()-_+=";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  let validChars = "";
  if (includeUppercase) {
    validChars += uppercaseChars;
  }
  if (includeLowercase) {
    validChars += lowercaseChars;
  }
  if (includeNumber) {
    validChars += numberChars;
  }
  if (includeSpecialChars) {
    validChars += specialchars;
  }

  const handleSubmit = () => {
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className='bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen  flex justify-center items-center border border-sky-500'>
      <div className='container p-3 w-80'>
        <p className='text-white text-bold text-3xl '>Password Generator</p>
        <div className='flex flex-col w-full mt-5'>
          <label className='text-white text-sm'>Password Length</label>
          <input className='rounded p-1' type="number" min="0" max="15" onChange={(e) => setPasswordLength(e.target.value)} />
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <p className='text-white text-md outline-none'>Include Uppercase</p>
          <input type='checkbox' className='outline-none' checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
        </div>
        <div className='flex items-center gap-2 mt-1'>
          <p className='text-white text-md outline-none' onClick={() => setIncludeLowercase(!includeLowercase)}>Include Lowercase</p>
          <input type='checkbox' className='outline-none' checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
        </div>
        <div className='flex items-center gap-2 mt-1'>
          <p className='text-white text-md outline-none' onClick={() => setIncludeNumber(!includeNumber)}>Include Number</p>
          <input type='checkbox' className='outline-none' checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} />
        </div>
        <div className='flex items-center gap-2 mt-1'>
          <p className='text-white text-md outline-none' onClick={() => setIncludeSpecialChars(!includeSpecialChars)}>Include Special Character</p>
          <input type='checkbox' className='outline-none' checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} />
        </div>
        <button className='bg-pink-600 px-3 py-1 text-white rounded-md outline-none border-none my-4' onClick={handleSubmit}>Generate Password</button>
        <span className='text-black block bg-slate-50 p-1 rounded-md h-9'>{password}</span>
      </div>
    </div>
  );
}

export default App;
