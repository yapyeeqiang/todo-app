import { useState, useEffect } from "react";

function useFetchQuote() {
	const [quote, setQuote] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchQuote = async () => {
			setIsLoading(true);
			await fetch("https://type.fit/api/quotes")
				.then((response) => response.json())
				.then((data) => {
					setQuote(data[Math.floor(Math.random() * data.length)]);
					setIsLoading(false);
				});
		};
		fetchQuote();
	}, []);

	return { isLoading, quote };
}

function Quote() {
	const { isLoading, quote } = useFetchQuote();
	console.log(quote);
	return (
		<div className="quote">
			{isLoading ? (
				<h2>Fetching the Quote of The Day...</h2>
			) : (
				<div>
					<h2 className="quote__text">"{quote.text}"</h2>
					<h4 className="quote__author">
						- {quote.author !== " " ? `${quote.author}` : ""}
					</h4>
				</div>
			)}
		</div>
	);
}

export default Quote;
