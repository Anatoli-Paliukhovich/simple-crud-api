import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileEntryPath = path.resolve(__dirname, "src", "index.ts");
const fileOutputPath = path.resolve(__dirname, "build");

const config = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(fileEntryPath),
    output: {
      path: path.resolve(fileOutputPath),
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};

export default config;
