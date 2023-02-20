import { QueryClient } from "@tanstack/react-query";

export const Configs = {
  TWILIO_ACCOUNT_SID: "ACd2104f2caa9496fb7c2988eeadb41d1d",
  TWILIO_API_KEY: "SK38e2a18569e509cb69f6d2526bac9671",
  TWILIO_API_SECRET: "7eQlTtTfuUZUMixomZNDvN9Ve8BkpGG4",
  TWILIO_AUTH_TOKEN: "5cbeec2d293311d4bd3a51fc6a3e56ba",
  SPOTIFY_CLIENT_ID: "5cde59ff59374f3c9e6ba77034d3b90a",
  SPOTIFY_CLIENT_SECRET: "b5091a99fa4e4c94880b1f53c2e6cd8a",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10,
      retry: 5,
      suspense: true
    }
  }
});

export default queryClient;

export const formatTime = (time: any) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
