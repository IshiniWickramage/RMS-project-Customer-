

export const fetchCustomers = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3005/customers');
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    const data = await response.json();
    dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: data });
    console.log("Data :", data);
  } catch (error) {
    console.error('Error fetching customers:', error);
    // Dispatch an action for error handling if needed
  }
};

export const fetchCustomer = (customerId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3005/customers/${customerId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch customer');
    }
    const data = await response.json();
    dispatch({ type: 'FETCH_CUSTOMER_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching customer:', error);
    // Dispatch an action for error handling if needed
  }
};

export const updateCustomer = (customerId, updatedData) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3005/customers/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Failed to update customer');
    }
    const data = await response.json();
    dispatch({ type: 'UPDATE_CUSTOMER_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error updating customer:', error);
    // Dispatch an action for error handling if needed
  }
};

export const deleteCustomer = (customerId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3005/customers/${customerId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete customer');
    }
    dispatch({ type: 'DELETE_CUSTOMER_SUCCESS', payload: customerId });
  } catch (error) {
    console.error('Error deleting customer:', error);
    // Dispatch an action for error handling if needed
  }
};

export const createCustomer = (customer) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3005/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    if (!response.ok) {
      throw new Error('Failed to create customer');
    }
    const data = await response.json();
    dispatch({ type: 'CREATE_CUSTOMER_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error creating customer:', error);
    // Dispatch an action for error handling if needed
  }
};

