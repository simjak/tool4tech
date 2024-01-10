"use client"

import { ChangeEvent, FormEvent, useState } from 'react';

interface Tool {
  name: string;
  problem: string;
  tested: string;
  comments: string;
  added: string;
}

export default function AddTool() {
  const [tool, setTool] = useState<Tool>({
    name: '',
    problem: '',
    tested: '',
    comments: '',
    added: '',
  });

  const [tools, setTools] = useState<Tool[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTool({
      ...tool,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTools([...tools, tool]);
    setTool({
      name: '',
      problem: '',
      tested: '',
      comments: '',
      added: '',
    });
  };

  
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '8px',
  };

  const tdStyle = {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '8px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#5C6BC0', // Different color for the Add button
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Form inputs for tool properties */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={tool.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="problem"
          placeholder="Problem to Solve"
          value={tool.problem}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="tested"
          placeholder="Tested"
          value={tool.tested}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="comments"
          placeholder="Comments"
          value={tool.comments}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="added"
          placeholder="Added"
          value={tool.added}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={addButtonStyle}>Add Tool</button>
      </form>
      {/* Table to display the tools */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Problem to Solve</th>
            <th style={thStyle}>Tested</th>
            <th style={thStyle}>Comments</th>
            <th style={thStyle}>Added</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr key={index}>
              <td style={tdStyle}>{tool.name}</td>
              <td style={tdStyle}>{tool.problem}</td>
              <td style={tdStyle}>{tool.tested}</td>
              <td style={tdStyle}>{tool.comments}</td>
              <td style={tdStyle}>{tool.added}</td>
              <td style={tdStyle}>
                <button style={buttonStyle}>Edit</button>
                <button style={buttonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}