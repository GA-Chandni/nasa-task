import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { AsteroidIdAction } from "../redux/action/asteroidIdAction";
import {RandomAsteroidIdAction} from '../redux/action/RandomAsteroidIdAction';
import { navigate } from "@reach/router";

const SearchAsteroidIdDetails = () => {
  const [asteroidID, setAsteroidID] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [allAsteroidId, setAllAsteroidId] = useState("");

  const dispatch = useDispatch("");

  const SearchId = () => {
    if (asteroidID !== "") {
      dispatch(AsteroidIdAction(asteroidID))
        .then((res) => {
          navigate("/asteroid-details");
        })
        .catch((e) => {
          setError(true);
          setErrorMsg("asteroid id not found ...");
        });
    }
  };
  useEffect(() => {
    dispatch(RandomAsteroidIdAction())
    .then((res) => {
      setAllAsteroidId(res.near_earth_objects);
    });
  }, []);

  function getRandomArbitary(max, min) {
    return Math.random() * (max + min) - min;
  }

  const Randomid = async () => {
    const id = allAsteroidId.map(({ id }) => id);
    const randomIndex = Math.ceil(Math.abs(getRandomArbitary(0 , id.length-1)));
    dispatch(AsteroidIdAction(id[randomIndex]));
    navigate("/asteroid-details");

  };

  return (
    <>
      <Fragment>
        <Input
          type="text"
          value={asteroidID}
          name={asteroidID}
          onChange={(e) => setAsteroidID(e.target.value)}
        />
        <br />
        <br />
        {error}
        <div>
          <Button variant="contained" color="secondary" onClick={SearchId}>
            Search id
          </Button>
          <Button variant="contained" color="secondary" onClick={Randomid}>
            Random id
          </Button>
        </div>
      </Fragment>
    </>
  );
};

export default SearchAsteroidIdDetails;
