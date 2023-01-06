import React from 'react'
import { Await, Form, useLoaderData } from "react-router-dom";

interface Props {
}

function Team({ }: Props) {
  // const teams = useLoaderData();
  // const { data, meta }: any = teams;

  return (
    <div className="h-screen">
      {/* <Await
        resolve={data}
        errorElement={
          <p>Error loading!</p>
        }
      >
        {(data) => {
          return <></>
        }}
      </Await> */}
      {/* <Form method="post" action="/team">
        <input type="text" name="name" />
        <button type="submit">Create</button>
      </Form> */}
    </div>
  )
}
export default React.memo(Team);
