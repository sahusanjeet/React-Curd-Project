import React from 'react'

const Card = ({ name, age, city, profession, profile_photo }) => {
  return (
    <div style={{
      width: '250px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <img 
        src={profile_photo} 
        alt={name} 
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '10px',
        }} 
      />
      <h2 style={{ margin: '10px 0', fontSize: '20px', color: '#333' }}>{name}</h2>
      <p style={{ margin: '4px 0', color: '#666' }}>Age: {age}</p>
      <p style={{ margin: '4px 0', color: '#666' }}>City: {city}</p>
      <p style={{ margin: '4px 0', color: '#666' }}>Profession: {profession}</p>
    </div>
  )
}

export default Card
