import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({
  label,
  disabled,
  type,
  className,
  value,
  onChange,
  maxLength,
}) => {
  const handleInputChange = (e) => {
    if (e.target.value.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <Form.Group className="mb-3" style={{ display: "flex" }}>
      <Form.Label
        style={{ fontFamily: "Roboto", width: "100px", marginRight: "60px" }}
      >
        {label}
      </Form.Label>
      <Form.Control
        disabled={disabled}
        type={type}
        className={className}
        value={value}
        onChange={handleInputChange}
        style={{
          height: "30px",
          width: "700px",
          borderRadius: "10px",
          backgroundColor: "#DFD8CF",
          borderColor: "#F0ECE8",
        }}
        maxLength={maxLength}
      />
      {value.length > maxLength && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          You cannot enter more than {maxLength} characters.
        </div>
      )}
    </Form.Group>
  );
};

export default TextField;
