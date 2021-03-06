import React, { Component } from "react";
import axios from "axios";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import { getContacts, deleteContact } from "../../redux/actions";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

class ContactList extends Component {
  state = {
    contactList: [],
  };

  render() {
    const { contactList } = this.state;
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {contactList.map((contact) => (
          <Card
            key={contact._id}
            style={{
              width: "18rem",
              height: "20rem",
              textAlign: "center",
              margin: "0px 20px 20px 0px",
            }}
          >
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
            </Card.Body>
            <br />
            <Card.Body style={{ marginBottom: "20px" }}>
              <FaUser size="2em" />
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroupItem>{contact.phone}</ListGroupItem>
              <ListGroupItem>{contact.email}</ListGroupItem>
              <ListGroupItem
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Link to={`/edit_contact/${contact._id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() =>
                    axios.delete(
                      `http://localhost:4000/delete_contact/${contact._id}`
                    )
                  }
                >
                  Delete
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { getContacts, deleteContact })(
  ContactList
);
