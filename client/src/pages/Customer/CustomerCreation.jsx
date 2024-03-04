import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCustomer } from '../../redux/actions/customerActions';
import Header from '../../components/Header';
import LeftSideNavBar from '../../components/LeftSideNavBar';
import TextField from '../../components/TextField';

const CustomerCreation = ({ createCustomer }) => {
  const navigate = useNavigate();

  const [id, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !value || emailRegex.test(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id || !fullName || !identifier || !address || !contactNo) {
      alert("All fields marked with * are mandatory");
      return;
    }

    if (id.length > 8 || fullName.length > 50 || identifier.length > 20 || contactNo.length > 15) {
      alert("Please make sure you have entered the correct number of characters in each field.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const newCustomer = {
      id,
      fullName,
      identifier,
      address,
      email,
      contactNo,
    };

    try {
      await createCustomer(newCustomer);
      navigate('/');
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginLeft: '0px', marginRight: '20px' }}>
        <LeftSideNavBar />
      </div>
      <div className="parts" style={{ float: 'left', padding: '17px', paddingBottom: '50px', marginLeft: "40px", width: '900px', marginTop: '40px', borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: '30px', height: '45px', width: '860px', borderRadius: 15, display: 'flex' }}>
          <h4 className="subheaderTitle" style={{ paddingTop: 5, paddingLeft: 30 }}>Customer Creation</h4>
        </div>

        <form style={{ maxWidth: '800px', marginLeft: "30px" }} onSubmit={handleSubmit}>
          <TextField
            label="Customer ID*:"
            type="text"
            value={id}
            onChange={(e) => setName(e.target.value)}
            maxLength={8}
          />

          <TextField
            label="Full Name*:"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            maxLength={50}
          />

          <TextField
            label="Identifier*:"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            maxLength={20}
          />

          <TextField
            label="Address*:"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            maxLength={50}
          />

          <TextField
            label="Email:"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Contact No*:"
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            maxLength={15}
          />

          <div className="btn" style={{ textAlign: 'center', marginLeft: "710px", marginTop: '30px' }}>
            <button className='btn btn-success' style={{ backgroundColor: "#B5A28C", borderColor: "#B5A28C" }}>
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { createCustomer })(CustomerCreation);
