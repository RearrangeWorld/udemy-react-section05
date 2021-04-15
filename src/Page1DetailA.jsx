import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>This page is Page1DetailA.</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
