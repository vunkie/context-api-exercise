import "./Home.css";

// import { CounterContext } from "../context/CounterContext";
// import { useContext } from "react";

import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
	const { counter, setCounter } = useCounterContext();
	// const { counter, setCounter } = useContext(CounterContext);
	const { color, dispatch } = useTitleColorContext();

	const setTitleColor = (color) => {
		dispatch({ type: color });
	};

	return (
		<div>
			<h1 style={{ color: color }}>Home</h1>
			<p>Valor do contador {counter}</p>
			<button
				onClick={() => (counter === 5 ? setCounter(10) : setCounter(5))}
			>
				Clique
			</button>
			<ChangeCounter></ChangeCounter>
			<div>
				<button onClick={() => setTitleColor("RED")}>Vermelho</button>
				<button onClick={() => setTitleColor("BLUE")}>Azul</button>
				<button onClick={() => setTitleColor("GREEN")}>Verde</button>

			</div>
		</div>
	);
};

export default Home;
