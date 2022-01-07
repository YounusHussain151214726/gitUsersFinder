import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

const Users = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({});
  const [inp, setinp] = useState();

  const search = (e) => {
    setinp(e.target.value);
  };
  const button = () => {
    axios.get(`https://api.github.com/users/${inp}`).then((res) => {
      const item = res.data;
      dispatch({ type: "send", payload: { item } });
    });
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/YounusHussain151214726")
      .then((res) => {
        const item = res.data;
        setuser(item);
      });
  }, []);

  return (
    <div>
      <div style={{display:'flex' ,flexDirection:'row'}} className="inpd">
        <Form.Control
          type="text"
          
          placeholder="Find SomeOne Here ? "
          onChange={search}
          className="Input"
        />
        <Button className="ibtn"

          variant="dark"
          style={{
            height: "40px",
            width: "5pc",
            marginLeft: "0.5pc",
            marginTop: "5pc",
          }}
          onClick={button}
        >
          🔍
        </Button>{" "}
      </div>
</div>    
  );
};
export default Users;
