import React, {Component} from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

class ContentRowTop extends Component {
	constructor(){
		super();
		this.state = {
			movies: {
				color: "primary",
				title: "Movies in Data Base",
				amount: "",
				icono: "fa-film"
			},
			awards:{
				color: "success",
				title: "Total awards",
				amount: "",
				icono: "fa-award"
			},
			actors: {
				color: "warning",
				title: "Actors quantity",
				amount: "",
				icono: "fa-user"
			}
		}
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
				<div className="row">
					 <ContentRowMovies
						{...this.state.movies}
					 />
				</div>
				<div className="row">
					<LastMovieInDb />
					<GenresInDb />
				</div>
			</div>
		)
	}

	async apiCall(url, handler){
		try {
			let response = await fetch(url)
			let result = await response.json();
			handler(result)
		} catch (error) {
			console.log(error)
		}
	}

	getTotalMovies = (info) => {
		this.setState({
			movies:{
				...this.state.movies,
				amount: info.data
			}
		})
	}

	async componentDidMount(){
		await this.apiCall('http://localhost:3001/api/movies/total')
	}
}

export default ContentRowTop;
