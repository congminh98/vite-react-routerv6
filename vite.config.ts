import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },
  define: {
    "process.env": {
      TWILIO_ACCOUNT_SID: "ACd2104f2caa9496fb7c2988eeadb41d1d",
      TWILIO_API_KEY: "SK38e2a18569e509cb69f6d2526bac9671",
      TWILIO_API_SECRET: "7eQlTtTfuUZUMixomZNDvN9Ve8BkpGG4",
      TWILIO_AUTH_TOKEN: "5cbeec2d293311d4bd3a51fc6a3e56ba"
    }
  },
  plugins: [react()]
});
