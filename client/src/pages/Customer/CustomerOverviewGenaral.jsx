import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSave,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "../../components/TextField";
import Header from "../../components/Header";
import LeftSideNavBar from "../../components/LeftSideNavBar";
import {
  updateCustomer,
  deleteCustomer,
  fetchCustomer,
} from "../../redux/actions/customerActions";

function CustomerOverviewGeneral({
  customer,
  updateCustomer,
  deleteCustomer,
  fetchCustomer,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerData = await dispatch(fetchCustomer(id));
        setEditedData(customerData || {});
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedData = { ...customer, ...editedData };
    updateCustomer(id, updatedData);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDelete = () => {
    deleteCustomer(id);
  };

  return (
    <div className="App">
      <Header />
      <div
        className="parts"
        style={{
          float: "left",
          marginTop: "0px",
          marginLeft: "0px",
          marginRight: "24px",
        }}
      >
        <LeftSideNavBar />
      </div>
      <div
        className="parts"
        style={{
          float: "left",
          padding: "17px",
          paddingBottom: "50px",
          marginTop: "24px",
          width:"1020px",
          borderRadius: 10,
          border: "3px solid #B5A28C",
        }}
      >
        <div
          id="subTopic"
          style={{
            backgroundColor: "#B5A28C",
            marginBottom: "30px",
            height: "40px",
            width: "900px",
            borderRadius: 15,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4
            className="subheaderTitle"
            style={{ padding: 10, marginLeft: "20px" }}
          >
            Customer Overview
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search"
              style={{ marginRight: "10px", padding: "2px", borderRadius: 10 }}
            />
            <Link to={`/CustomerCreation`}>
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  fontSize: "1.5rem",
                  margin: "10px",
                  cursor: "pointer",
                  height: "20px",
                }}
              />
            </Link>
            {isEditing ? (
              <FontAwesomeIcon
                icon={faSave}
                style={{
                  fontSize: "1.5rem",
                  margin: "10px",
                  cursor: "pointer",
                  height: "20px",
                }}
                onClick={handleSave}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEdit}
                style={{
                  fontSize: "1.5rem",
                  margin: "10px",
                  cursor: "pointer",
                  height: "20px",
                }}
                onClick={handleEdit}
              />
            )}
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                fontSize: "1.5rem",
                margin: "10px",
                cursor: "pointer",
                height: "20px",
              }}
              onClick={handleDelete}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "40px",
            width: "900px",
            marginBottom: "20px",
            backgroundColor: "#DFD8CF",
          }}
        >
          <Link
            to={`/CustomerOverviewGeneral/${id}`}
            style={{
              padding: "10px",
              color: "black",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            General
          </Link>
          <Link
            to={`/CustomerOverviewSecondTab`}
            style={{
              padding: "10px",
              color: "black",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            Current Reservations
          </Link>
          <Link
            to={`/CustomerOverviewHistory`}
            style={{
              padding: "10px",
              color: "black",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            History
          </Link>
        </div>

        <div
          className="body-part"
          style={{ padding: 20, borderRadius: "10px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="customerId">Customer ID:</label>
              <TextField
                id="customerId"
                type="text"
                value={id}
                disabled={true}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="fullName">Full Name:</label>
              <TextField
                id="fullName"
                type="text"
                value={
                  isEditing ? editedData.fullName : customer?.fullName || ""
                }
                disabled={!isEditing}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="identifier">Identifier:</label>
              <TextField
                id="identifier"
                type="text"
                value={
                  isEditing ? editedData.identifier : customer?.identifier || ""
                }
                disabled={!isEditing}
                onChange={(e) => handleChange("identifier", e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="address">Address:</label>
              <TextField
                id="address"
                type="text"
                value={isEditing ? editedData.address : customer?.address || ""}
                disabled={!isEditing}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="email">Email:</label>
              <TextField
                id="email"
                type="text"
                value={isEditing ? editedData.email : customer?.email || ""}
                disabled={!isEditing}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <label htmlFor="contactNo">Contact No:</label>
              <TextField
                id="contactNo"
                type="text"
                value={
                  isEditing ? editedData.contactNo : customer?.contactNo || ""
                }
                disabled={!isEditing}
                onChange={(e) => handleChange("contactNo", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customer: state.customerReducer.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomer: (customerId) => dispatch(fetchCustomer(customerId)),
    updateCustomer: (customerId, updatedData) =>
      dispatch(updateCustomer(customerId, updatedData)),
    deleteCustomer: (customerId) => dispatch(deleteCustomer(customerId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerOverviewGeneral);