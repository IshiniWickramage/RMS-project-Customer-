import React, { useState } from "react";
import Header from "../../components/Header";
import LeftSideNavBar from "../../components/LeftSideNavBar";
import TextField from "../../components/TextField";

const CreateReservations = () => {
  const [Reservationid, setReservationid] = useState("");
  const [Date, setDate] = useState("");
  const [id, setName] = useState("");
  const [ResGroup, setResGroup] = useState("");
  const [ResItem, setResItem] = useState("");

  return (
    <div className="App">
      <Header />

      <div className="parts" style={{ float: "left", marginLeft: "0px", marginRight: "20px" }}>
        <LeftSideNavBar />
      </div>

      <div className="parts" style={{ float: "left", padding: "17px", paddingBottom: "50px", marginLeft: "40px", width: "900px", marginTop: "40px", borderRadius: 10, border: "3px solid #B5A28C" }}>
        <div id="subTopic" style={{ backgroundColor: "#B5A28C", marginBottom: "30px", height: "45px", width: "860px", borderRadius: 15, display: "flex" }}>
          <h4 className="subheaderTitle" style={{ paddingTop: 5, paddingLeft: 30 }}>Create Reservations</h4>
        </div>

        <form style={{ maxWidth: "800px", marginLeft: "30px" }}>
          <TextField
            label="Reservation ID:"
            type="text"
            value={Reservationid}
            onChange={(e) => setReservationid(e.target.value)}
          />

          <TextField
            label="Date:"
            type="text"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />

          <TextField
            label="Customer ID:"
            type="text"
            value={id}
            onChange={(e) => setName(e.target.value)}
          />

          <div style={{ display: 'flex' }}>
            <label htmlFor="reservationGroup" style={{ fontFamily: 'Roboto', width: '100px', marginRight: '60px' }}>Reservation Group:</label>
            <select
              id="reservationGroup"
              value={ResGroup}
              onChange={(e) => setResGroup(e.target.value)}
              style={{ height: '30px', width: '700px', borderRadius: '10px', backgroundColor: '#DFD8CF', borderColor: '#F0ECE8' }}
            >
              <option value=""></option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
            </select>
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor="reservationItem" style={{ fontFamily: 'Roboto', width: '100px', marginRight: '60px' }}>Reservation Item:</label>
            <select
              id="reservationItem"
              value={ResItem}
              onChange={(e) => setResItem(e.target.value)}
              style={{ height: '30px', width: '700px', borderRadius: '10px', backgroundColor: '#DFD8CF', borderColor: '#F0ECE8' }}
            >
              <option value=""></option>
              <option value="Item 1">Item 1</option>
              <option value="Item 2">Item 2</option>
              <option value="Item 3">Item 3</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReservations;
