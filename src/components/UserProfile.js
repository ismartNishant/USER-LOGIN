import React from "react";

import { Link } from "react-router-dom";

const UserProfile = () => {
  const fileHandler = (event) => {
    console.log(event);
  };
  return (
    <div className="user">
      <div className="in-user">
        <div className="px-4 pt-0 pb-4 cover">
          <div className="media profile-head">
            <div className="profile mr-3">
              <img
                src="/img/p.jpg"
                alt="..."
                width="180"
                className="rounded mb-2 img-thumbnail"
              />
              <button className="btn btn-outline-danger my-2 btn-sm btn-block">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="inner-user">
            <div className=" in-box py-2">
              <div className="uploader d-flex">
                <input type="file" placeholder="Profile pic" onChange={fileHandler} />
                <button className="upload" type="submit">Upload</button>
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className=" in-box py-2">
              <label htmlFor="validationTooltip01" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                placeholder="Nishant Anil Rajput"
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="in-box py-2">
              <label htmlFor="validationTooltip01" className="form-label">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="validationTooltip01"
                placeholder="Please Enter valid date"
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="in-box py-2">
              <label htmlFor="validationTooltip03" className="form-label">
                Religion
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
                placeholder="Hindu"
                required
              />
              <div className="invalid-tooltip">Please provide a valid</div>
            </div>
            <div className="in-box py-2">
              <label htmlFor="validationTooltip05" className="form-label">
                Height
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                placeholder="156cm"
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid height.
              </div>
            </div>
            <div className="pt-4">
              <button className="logout" type="submit">
                {" "}
                <Link to="/">Log Out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
