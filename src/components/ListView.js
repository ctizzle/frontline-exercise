import React, { useEffect, useState } from "react";

import { fetchUser } from "../api";

// List View of the Contributors
const ListView = (props) => {
  const { listResults, setDetailResults } = props;

  const getDetailData = async (userUrl) => {
    let fetchedDetailData = await fetchUser(userUrl);
    await setDetailResults(fetchedDetailData);
  };

  return (
    <aside id="list">
      <section className="list-results">
        {listResults.map((item) => {
          return (
            <div
              className="contributor"
              onClick={async (event) => {
                event.preventDefault();
                getDetailData(item.url);
              }}
            >
              <img src={item.avatar_url} />
              <h4>User: {item.login}</h4>
              <h4>Contributions: {item.contributions}</h4>
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default ListView;