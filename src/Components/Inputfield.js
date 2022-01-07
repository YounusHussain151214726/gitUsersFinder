import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import UserModel from "./UserModel";
const Inputfield = () => {
  const { data } = useSelector((state) => state.Datareducer);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      className="cd"
    >
      {data.map((e) => {
        return (
          <div style={{ marginTop: "4.1pc", marginLeft: "5pc" }}>
            <Card
              className="c"
              style={{
                width: "12rem",
                height: "23pc",
                borderRadius: "2pc",
                borderBottomColor: "greenyellow",
                borderLeftColor: "red",
                borderRightColor: "orange",
              }}
            >
              <Card.Img
                variant="top"
                src={e.avatar_url}
                style={{
                  height: "9pc",
                  borderTopLeftRadius: "2pc",
                  borderTopRightRadius: "2pc",
                }}
              />

              <ListGroup
                className="list-group-flush"
                style={{ borderRadius: "2pc" }}
              >
                <ListGroupItem
                  style={{ borderRadius: "5px", borderColor: "green" }}
                >
                  Login : {e.login}{" "}
                </ListGroupItem>
                <ListGroupItem
                  style={{ borderRadius: "5px", borderColor: "darkgreen" }}
                >
                  Github : {e.html_url}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  <br />{" "}
                  <UserModel
                    id={e.id}
                    image={e.avatar_url}
                    name={e.name}
                    followers={e.followers}
                    following={e.following}
                    location={e.location}
                  />
                </ListGroupItem>
              </ListGroup>
            </Card>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Inputfield;
