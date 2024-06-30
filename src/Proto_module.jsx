import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DynamicInputBars = () => {
  const [inputBars, setInputBars] = useState([]);
  const [mainInput, setMainInput] = useState("");
  const [users, setUsers] = useState([
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" },
    { name: "Charlie", phone: "555-555-5555" },
    { name: "David", phone: "111-111-1111" },
    { name: "Eve", phone: "222-222-2222" },
    { name: "Frank", phone: "333-333-3333" },
    { name: "Grace", phone: "444-444-4444" },
    { name: "Hank", phone: "666-666-6666" },
    { name: "Ivy", phone: "777-777-7777" },
    { name: "Jack", phone: "888-888-8888" },
    { name: "Kate", phone: "999-999-9999" },
    { name: "Leo", phone: "000-000-0000" },
    { name: "Mia", phone: "123-123-1234" },
    { name: "Nick", phone: "321-321-4321" },
    { name: "Olivia", phone: "456-456-4567" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", phone: "" });

  const addInputBar = () => {
    setInputBars([...inputBars, ""]);
  };

  const removeInputBar = (indexToRemove) => {
    const updatedInputBars = inputBars.filter((_, i) => i !== indexToRemove);
    setInputBars(updatedInputBars);
  };

  const handlePaste = (index) => {
    const copiedText = mainInput;
    const updatedInputBars = [...inputBars];
    updatedInputBars[index] = copiedText;
    setInputBars(updatedInputBars);
  };

  const saveUserInfo = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: "", phone: "" });
  };

  return (
    <div>
      <h1>Making more Input Bars</h1>
      {/* Main Input Bar */}
      <input
        type="text"
        value={mainInput}
        onChange={(e) => setMainInput(e.target.value)}
        placeholder="Enter text here..."
        style={{
          width: "300px",
          height: "30px",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      />

      {/* Add Button */}
      <button onClick={addInputBar} style={{ marginBottom: "10px" }}>
        Add Input Bar
      </button>

      {/* Rendered Input Bars */}
      {inputBars.map((value, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const updatedInputBars = [...inputBars];
              updatedInputBars[index] = e.target.value;
              setInputBars(updatedInputBars);
            }}
            placeholder={`Input Bar ${index + 1}`}
            style={{ width: "300px", height: "30px", marginRight: "10px" }}
          />
          <button onClick={() => handlePaste(index)} style={{ padding: "5px" }}>
            Paste
          </button>
          <button
            onClick={() => removeInputBar(index)}
            style={{ padding: "5px" }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}

      {/* New User Form */}
      <h2>Add New User</h2>
      <div>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Enter name"
          style={{ width: "200px", height: "30px", marginRight: "10px" }}
        />
        <input
          type="text"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          placeholder="Enter phone number"
          style={{ width: "200px", height: "30px", marginRight: "10px" }}
        />
        <button onClick={saveUserInfo} style={{ padding: "5px" }}>
          Save User
        </button>
      </div>

      {/* Display Users */}
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicInputBars;
