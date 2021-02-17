import React from 'react'
import Form from '../form/form'
import '../home/home.scss'
import ash from '../images/ash.png'
import title from '../images/title.png'

function Home() {
	return (
		<>
			<div className="container-home">
				<div className="box">
					<div>
						<img className="ash" src={ash} />
					</div>
					<div>
						<img className="title" src={title} />
					</div>
				</div>
				<Form />
			</div>
		</>
	)
}
export default Home;