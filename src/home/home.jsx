import React from 'react'
import Form from '../form/form'
import 	'../home/home.scss'
import Results from '../results/results'

function Home() {
	return (
		<>
			<div className="container-home">
				<div className="box">
					<h1>Vamos caçar pokemon?</h1>
					<img className="logo"/>
				</div>
				<Form/>
			</div>
			<Results/>
		</>
	)
}
export default Home;