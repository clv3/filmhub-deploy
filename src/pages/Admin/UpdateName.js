import React from "react";
import "./styles.scss";
import firebase from "firebase/app";
import "firebase/firestore";
import { firestore, auth, userIdRef } from "./../../firebase/utils";
import { useState, useEffect } from "react";

export const UpdateName = ({ user, users, props }) => {
  const [displayName, setName] = useState(user.displayName);
  const [userNames, setNameUser] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [showing, setShowing] = useState(false);
  const [userNewNames, setNewNameUser] = useState(0);
  // const [userCurrentRoles, setRoles] = useState(user.userRoles);

  const [ids, setIds] = useState([]);
  console.log(displayName, "nammeee");
  console.log(user, "user name object");

  const ii = user.displayName;

  console.log(userNames, "gwgwgwgwg");

  // useEffect(() => {
  //   for (let i = 0; i < 30; i++) {
  //     setTimeout(() => {
  //       setNewNameUser(i);
  //     }, 5000);
  //   }
  //   return userNewNames;
  // }, []);

  // const getTheUsernames = () => {
  //   for (let i = 0; i < userNames.length; i++) {
  //     const name = userNames[i];
  //     setNewNameUser(i);
  //   }
  //   return userNewNames;
  // };

  console.log(userNewNames, "haahahahahah");

  const onUpdate = () => {
    firestore
      .collection("users")
      .doc(user.id)
      .set({ ...user, displayName });
    if (userNames === user.displayName) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  };
  console.log(showing, "true or not true");

  const onUpdateEmail = () => {
    firestore
      .collection("users")
      .doc(user.id)
      .set({ ...user, email });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("users").doc(user.id).delete();
  };

  const onUpdateRoles = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(user.id)
      .update({
        userRoles: firebase.firestore.FieldValue.arrayUnion("user", "admin"),
      });
  };

  const onRemoveRoles = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(user.id)
      .update({
        userRoles: firebase.firestore.FieldValue.arrayRemove("admin"),
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setNameUser(
        data.docs.map((doc) => ({ ...doc.data(), username: doc.displayName }))
      );
      console.log(data, "indeed");
    };
    fetchData();
  }, []);

  // const onDelete = (id) => {
  //   firestore.collection('users').doc(id).delete();
  // }

  return (
    <div className="  ">
      <div className="card card-content content  ">
        <header className="card card-content content mb-3 title has-background-primary-light">
          {" "}
          Current Name : {!displayName
            ? "no username "
            : displayName} <br /> <br /> Email:{" "}
          {!email ? "no email" : user.email}
          <br />
          <br />
          Roles : {(user ? "" : ",  ") + user.userRoles}
        </header>

        {/* <th><abbr title="name">current name</abbr></th> */}

        <div className="">
          <div className="card card-content content ">
            <div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control  is-large">
                  {
                    <input
                      className="input is-success is-large"
                      type="text"
                      placeholder="Text input"
                      value={displayName}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  }
                  <span className="">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="">
                    <i className="fas fa-check"></i>
                  </span>
                </div>

                {(() => {
                  if (
                    displayName === user.displayName ||
                    displayName.includes(userNames.toString())
                  ) {
                    return (
                      <div>
                        <p className="help is-danger is-size-6">
                          This is current username or is already taken{" "}
                        </p>
                      </div>
                    );
                  } else if (!displayName) {
                    return (
                      <div>
                        <p className="help is-danger is-size-6">
                          Please enter username!{" "}
                        </p>
                      </div>
                    );
                  } else if (
                    displayName != user.displayName &&
                    displayName.length >= 5
                  ) {
                    return (
                      <div>
                        <p className="help is-success is-size-6">
                          This username is avaiable{" "}
                        </p>
                        <button
                          className="button is-success is-pulled-right is-medium"
                          onClick={onUpdate}
                        >
                          Update Name
                        </button>
                      </div>
                    );
                  } else if (
                    displayName != user.displayName &&
                    displayName.length < 5
                  ) {
                    return (
                      <div>
                        <p className="help is-danger is-size-6">
                          {" "}
                          Username has to contain atleast 5 characters!{" "}
                        </p>
                      </div>
                    );
                    // } else if (displayName === userNames[i].displayName) {
                    return (
                      <div>
                        <p class="help is-success">
                          {" "}
                          This username is not available!{" "}
                        </p>
                      </div>
                    );
                  }
                })()}
              </div>

              <br />
              <br />

              <div className="field">
                <label className="label">Username</label>
                <div className="control  is-large">
                  {
                    <input
                      className="input is-info is-hovered is-large"
                      type="email"
                      placeholder="Email Input"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  }
                  <span className="">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
              </div>
              {(() => {
                if (email === user.email) {
                  return (
                    <div>
                      <p className="help is-danger is-size-6">
                        This is current email or isnt available{" "}
                      </p>
                    </div>
                  );
                } else if (!email) {
                  return (
                    <div>
                      <p className="help is-danger is-size-6">
                        Please enter email!{" "}
                      </p>
                    </div>
                  );
                } else if (email.includes("@" + "gmail" + ".com")) {
                  return (
                    <div>
                      <p className="help is-success is-size-6">
                        This username is avaiable{" "}
                      </p>
                      <button
                        className="button is-success is-pulled-right is-medium"
                        onClick={onUpdateEmail}
                      >
                        Update Email
                      </button>
                    </div>
                  );
                } else if (!email.includes("@" + "gmail" + ".com")) {
                  return (
                    <div>
                      <p className="help is-danger is-size-6">
                        Email must include "@", "gmail", and ".com"!
                      </p>
                    </div>
                  );

                  return (
                    <div>
                      <p class="help is-success">
                        {" "}
                        This username is not available!{" "}
                      </p>
                    </div>
                  );
                }
              })()}

              <br />

              <div>
                <button
                  className="button is-danger is-large mr-3"
                  onClick={onDelete}
                >
                  Remove
                </button>
                <button
                  className="button is-info is-large mr-3"
                  onClick={onUpdateRoles}
                >
                  make admin
                </button>

                <button
                  className="button is-warning is-large mr-3"
                  onClick={onRemoveRoles}
                >
                  remove admin
                </button>
              </div>
            </div>

            <br />
            {/* <button className="button is-danger is-medium" onClick={() => onDelete(user.ids)}>Delete User</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateName;
