import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/CheckStatus.css';

export default function CheckStatus() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const checkStatusFetch = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="check-container">
      <di>
        <strong>The Status is: </strong>
        {status}
      </di>
      <button className="chek-button" type="button" onClick={checkStatusFetch}>check status</button>
    </div>
  );
}
