import * as React from 'react';
import { Configs } from "@/utils/commons";

type Props = {}
const CLIENT_ID = Configs.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://127.0.0.1:5173";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Login({ }: Props) {  
  return (
    <>
      <section className="container">
        <a className="inline-flex items-center p-4 m-5 bg-colorPink" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </section>
    </>
  )
}
