import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterProvider } from "./context/CounterContext.jsx";
import { TitleColorProvider } from "./context/TitleColorContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CounterProvider>
			<TitleColorProvider>
				<App />
			</TitleColorProvider>
		</CounterProvider>
	</StrictMode>
);
